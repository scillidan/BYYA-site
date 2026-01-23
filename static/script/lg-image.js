jQuery("#lg-image")
  .justifiedGallery({
    rowHeight: 180,
    margins: 1.5,
    lastRow: "nojustify",
  })
  .on("jg.complete", function () {
    window.lightGallery(
      document.getElementById("lg-image"),
      {
        customSlideName: true,
        appendSubHtmlTo: ".lg-outer",
        plugins: [lgThumbnail, lgZoom, lgHash],
        controls: false,
        download: true,
        pager: false,
        mousewheel: true,
        closeOnTap: false,
        enableDrag: false,
        enableSwipe: false,
        swipeToClose: false,
        mobileSettings: {
          showCloseIcon: false,
          download: true
        }
      }
    );
  });

const customButtons = `<button type="button" id="lg-toolbar-prev" aria-label="Previous slide" class="lg-toolbar-prev lg-icon">  </button><button type="button" id="lg-toolbar-next" aria-label="Next slide" class="lg-toolbar-next lg-icon">  </button>`;

const $galleryContainer = document.getElementById("lg-image");

$galleryContainer.addEventListener("lgInit", event => {
  const pluginInstance = event.detail.instance;
  const $toolbar = pluginInstance.outer.find(".lg-toolbar");
  $toolbar.prepend(customButtons);
  document.getElementById("lg-toolbar-prev").addEventListener("click", () => {
    pluginInstance.goToNextSlide();
  });
  document.getElementById("lg-toolbar-next").addEventListener("click", () => {
    pluginInstance.goToPrevSlide();
  });
});