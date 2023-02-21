if (window.PB && window.PB.$) {
  (function ($, undefined) {
    if ($ === undefined) {
      return;
    }
    var richTextWidgetAssetBrowser = function (callback, value, meta) {
      var options = { canSelectFile: true, canSelectFolder: false };
      var fileManagerPromise = $.assetBrowser(
        null,
        value,
        meta.filetype,
        window,
        options
      );
      fileManagerPromise.progress(function (aSelectedHierarchyItems, isFolder) {
        if (aSelectedHierarchyItems.length > 0 && !isFolder) {
          var selectedResource = aSelectedHierarchyItems[0];
          callback(selectedResource.Href);
          if (
            window &&
            window.ImageDialog &&
            typeof window.ImageDialog != "undefined"
          ) {
            if (window.ImageDialog.getImageData) {
              window.ImageDialog.getImageData();
            }
            if (window.ImageDialog.showPreviewImage) {
              window.ImageDialog.showPreviewImage(selectedResource.Href);
            }
          }
        }
      });
      return fileManagerPromise;
    };
    var HTML_CONTAINER =
      '<div class="bs pb-tinymce-container">' +
      '<div class="pb-tinymce-target"/>' +
      '<div class="pb-tinymce-backdrop modal-backdrop"/>' +
      "</div>";
    var RichTextWidget = {
      init: function () {
        if (window.tinyMCE === undefined) {
          return;
        }
        $("html").on(
          "dblclick",
          "[data-pb-widget-type='general-rich-text']:not(.pb-widget-locked)",
          {},
          function () {
            if ($(".pb-tinymce-container").length === 0)
              if ($("html").hasClass("pb-dropzone-mode")) {
                var richChild = $(this).find(".pb-rich-text");
                RichTextWidget.activate.call(richChild[0]);
              }
          }
        );
      },
      activate: function () {
        var el = this;
        var $el = $(this);
        var widget = $el.closest(".pb-widget").data("pb-view");
        if (!widget) {
          return;
        }
        function runEditor(el, widget) {
          var tinyMCEConfig = $.extend(
            {
              style_formats_merge: true,
              forced_root_block: "p",
              mode: "none",
              theme: "silver",
              selector: ".pb-tinymce-container .pb-tinymce-target",
              plugins: [
                "advlist autolink lists link image charmap print preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table paste code help wordcount hr template",
              ],
              menu: {
                file: {
                  title: "File",
                  items: "newdocument customSaveMenuItem | preview | print ",
                },
              },
              toolbar:
                "customSaveButton | undo redo | styleselect | template | bold italic backcolor forecolor| alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image media| print preview  fullpage | emoticons | removeformat | help",
              autoresize_min_height: 150,
              autoresize_on_init: false,
              autoresize_bottom_margin: 30,
              extended_valid_elements: "i[class]",
              file_picker_callback: richTextWidgetAssetBrowser,
              convert_urls: false,
              setup: function (ed) {
                ed.ui.registry.addButton("customSaveButton", {
                  icon: "save",
                  tooltip: "Save",
                  onAction: function () {
                    RichTextWidget.deactivate.call(tinyMCE.activeEditor);
                  },
                });
                ed.ui.registry.addMenuItem("customSaveMenuItem", {
                  icon: "save",
                  text: "Save",
                  onAction: function () {
                    RichTextWidget.deactivate.call(tinyMCE.activeEditor);
                  },
                });
              },
              init_instance_callback: function (editor) {
                editor.setContent(el.innerHTML);
                $(".pb-tinymce-container .tox-tinymce").addClass(
                  "tiny-fullscreen"
                );
              },
            },
            window.pbTinyMCEConfig || {}
          );
          $(HTML_CONTAINER)
            .appendTo(document.body)
            .click(function () {
              RichTextWidget.deactivate.call(tinyMCE.activeEditor);
            });
          var $target = $(".pb-tinymce-container .pb-tinymce-target");
          $target.data("pb-widget", widget);
          tinyMCE.init(tinyMCEConfig);
        }
        var contentUpdatedInScope = $el
          .closest(".pb-rich-text")
          .data("content-updated-in-scope");
        if (contentUpdatedInScope) {
          runEditor(el, widget);
        } else {
          $.pbOverridePropertyDialog({ parent: el }).then(function () {
            runEditor(el, widget);
          });
        }
      },
      deactivate: function () {
        tinyMCE.execCommand("mceRemoveEditor", false, this.id);
        var $ee = $(this.getElement());
        var $target = $(".pb-tinymce-container .pb-tinymce-target");
        var widget = $target.data("pb-widget");
        var locale = $.pbLocale();
        var updates = { content: { i18n: true } };
        updates.content[locale] = $ee.html();
        $(".pb-tinymce-container").remove();
        widget.el.trigger("UpdateWidget", [
          { widget: widget, updates: updates },
        ]);
      },
    };
    $(document).ready(RichTextWidget.init);
  })(window.PB.$);
}
$(function () {
  $(".general-jobs-feed-reader").each(function () {
    var $this = $(this);
    var $resultsTarget = $(this).find(".jobs-body");
    var url = $(this).data("jobs-url");
    var data = {};
    if (url) {
      data.url = url;
    }
    $this.pbAjax({
      type: "GET",
      url: "/pb/widgets/jobsWidget/loadWidget",
      data: data,
      dataType: "html",
      async: "false",
      success: function (data) {
        $resultsTarget.html(data);
      },
    });
  });
});
