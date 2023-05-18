jQuery("#lg-video")
  .justifiedGallery({
    lastRow: "hide",
    rowHeight: 180,
    margins: 1.5
  })
  .on("jg.complete", function () {
    window.lightGallery(
      document.getElementById("lg-video"),
      {
        autoplayFirstVideo: false,
        pager: false,
        mousewheel: true,
        plugins: [lgThumbnail, lgVideo],
        addClass: 'lg-custom-thumbnails',
        download: false,
        allowMediaOverlap: false,
        animateThumb: false,
        closeOnTap: false,
        enableDrag: false,
        enableSwipe: false,
        swipeToClose: false,
        videojs: true,
        mobileSettings: {
          controls: false,
          showCloseIcon: false,
          download: false,
          rotate: true
        }
      }
    );
  });