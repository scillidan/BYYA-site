jQuery("#lg-image")
  .justifiedGallery({
    rowHeight: 180,
    margins: 1.5
  })
  .on("jg.complete", function () {
    window.lightGallery(
      document.getElementById("lg-image"),
      {
        appendSubHtmlTo: '.lg-item',
        plugins: [lgThumbnail, lgZoom],
        addClass: 'lg-custom-thumbnails',
        allowMediaOverlap: false,
        download: false,
        animateThumb: false,
        zoomFromOrigin: false,
        mousewheel: true,
        closeOnTap: false,
        enableDrag: false,
        enableSwipe: false,
        swipeToClose: false,
        mobileSettings: {
          showCloseIcon: false,
          download: false
        }
      }
    );
  });