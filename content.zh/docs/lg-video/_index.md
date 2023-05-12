---
title: lg-video
---

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/lightgallery@2.7.0/css/lightgallery.css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/lightgallery@2.7.0/css/lg-thumbnail.css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/lightgallery@2.7.0/css/lg-video.css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/video.js@7.20.3/dist/video-js.min.css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/justifiedGallery@3.8.1/dist/css/justifiedGallery.css" />
<style type="text/css">
  .gallery-item {
    width: 200px;
    padding: 5px;
  }
  .lg-custom-thumbnails {
      &.lg-outer {
          width: auto;
          // Set space for the container to occupy thumbnails
          right: 225px;

          // Add some spacing on the left to match with the right hand side spacing
          left: 10px;

          .lg-thumb-outer {
              // Set the position of the thumbnails
              left: auto;
              top: 0;
              width: 225px;
              bottom: 0;
              position: fixed;
              right: 0;

              // Reset max height
              max-height: none;

              // Customize the layout (Optional)
              background-color: #999;
              padding-left: 5px;
              padding-right: 5px;
              margin: 0 -10px;
              overflow-y: auto;

              // Update transition values
              // By default thumbnails animates from bottom to top
              // Change that from right to left.
              // Also, add a tiny opacity transition to look better
              transform: translate3d(30%, 0, 0);
              opacity: 0;
              will-change: transform opacity;
              transition: transform 0.15s cubic-bezier(0, 0, 0.25, 1) 0s, cubic-bezier(
                          0,
                          0,
                          0.25,
                          1
                      ) 0.15s;
          }

          &.lg-thumb-open {
              .lg-thumb-outer {
                  transform: translate3d(0, 0, 0);
                  opacity: 1;
              }
          }

          // Add hove effect (Optional)
          .lg-thumb-item {
              filter: grayscale(100%);
              will-change: filter;
              transition: filter 0.12s ease-in, border-color 0.12s ease;
              &:hover,
              &.active {
                  filter: grayscale(0);
                  border-color: #545454;
              }
          }

          .lg-thumb {
              padding: 5px 0;
          }
      }
  }
</style>
<div class="gallery-container justified-gallery" id="lg-video">
  <a class="gallery-item" data-lg-size="1280-720" data-html="#smp14" data-video='{"source": [{"src":"http://media.eightqueen.com/Fabian.Oder.Der.Gang.Vor.Die.Hunde.2021_smp01.webm", "type":"video/webm"}], "tracks": [{"src": "/vtt/Fabian.Oder.Der.Gang.Vor.Die.Hunde.2021_smp01.zho.vtt", "kind":"captions", "srclang": "zh-cn", "label": "Simplified Chinese", "default": "true"},{"src": "/vtt/Fabian.Oder.Der.Gang.Vor.Die.Hunde.2021_smp01.deu.vtt", "kind":"captions", "srclang": "de", "label": "German"},{"src": "/vtt/Fabian.Oder.Der.Gang.Vor.Die.Hunde.2021_smp01.eng.vtt", "kind":"captions", "srclang": "en", "label": "English"}], "attributes": {"preload": false, "controls": true, "playsinline": true}}' data-sub-html="<h4>Fabian Oder Der Gang Vor Die Hunde (2021) SMP01</h4>">
    <img class="img-responsive" src="http://cos.eightqueen.com/Fabian.Oder.Der.Gang.Vor.Die.Hunde.2021_smp01.jpg" alt="&lt;p&gt;Fabian Oder Der Gang Vor Die Hunde (2021) SMP01&lt;/p&gt;" />
  </a>
  <a class="gallery-item" data-lg-size="1280-720" data-html="#smp13" data-video='{"source": [{"src":"http://media.eightqueen.com/Las.ninas.2020_smp01.webm", "type":"video/webm"}], "tracks": [{"src": "/vtt/Las.ninas.2020_smp01.zho.vtt", "kind":"captions", "srclang": "zh-cn", "label": "Simplified Chinese", "default": "true"},{"src": "/vtt/Las.ninas.2020_smp01.spa.vtt", "kind":"captions", "srclang": "es", "label": "Spanish"},{"src": "/vtt/Las.ninas.2020_smp01.eng.vtt", "kind":"captions", "srclang": "en", "label": "English"}], "attributes": {"preload": false, "controls": true, "playsinline": true}}' data-sub-html="<h4>Las ninas (2020) SMP01</h4>">
    <img class="img-responsive" src="http://cos.eightqueen.com/Las.ninas.2020_smp01.jpg" alt="&lt;p&gt;Las ninas (2020) SMP01&lt;/p&gt;" />
  </a>
  <a class="gallery-item" data-lg-size="1280-720" data-html="#smp12" data-video='{"source": [{"src":"http://media.eightqueen.com/Faya.Dayi.2021_smp01.webm", "type":"video/webm"}], "tracks": [{"src": "/vtt/Faya.Dayi.2021_smp01.zho.vtt", "kind":"captions", "srclang": "zh-cn", "label": "Simplified Chinese", "default": "true"},{"src": "/vtt/Faya.Dayi.2021_smp01.eng.vtt", "kind":"captions", "srclang": "en", "label": "English"}], "attributes": {"preload": false, "controls": true, "playsinline": true}}' data-sub-html="<h4>Faya Dayi (2021) SMP01</h4>">
    <img class="img-responsive" src="http://cos.eightqueen.com/Faya.Dayi.2021_smp01.jpg" alt="&lt;p&gt;Faya Dayi (2021) SMP01&lt;/p&gt;" />
  </a>
  <a class="gallery-item" data-lg-size="1280-720" data-html="#smp11" data-video='{"source": [{"src":"http://media.eightqueen.com/Lacci.2020_smp02.webm", "type":"video/webm"}], "tracks": [{"src": "/vtt/Lacci.2020_smp02.zho.vtt", "kind":"captions", "srclang": "zh-cn", "label": "Simplified Chinese", "default": "true"},{"src": "/vtt/Lacci.2020_smp02.ita.vtt", "kind":"captions", "srclang": "it", "label": "Italian"},{"src": "/vtt/Lacci.2020_smp02.eng.vtt", "kind":"captions", "srclang": "en", "label": "English"}], "attributes": {"preload": false, "controls": true, "playsinline": true}}' data-sub-html="<h4>Lacci (2020) SMP02</h4>">
    <img class="img-responsive" src="http://cos.eightqueen.com/Lacci.2020_smp02.jpg" alt="&lt;p&gt;Lacci (2020) SMP02&lt;/p&gt;" />
  </a>
  <a class="gallery-item" data-lg-size="1280-720" data-html="#smp10" data-video='{"source": [{"src":"http://media.eightqueen.com/Lacci.2020_smp01.webm", "type":"video/webm"}], "attributes": {"preload": false, "controls": true, "playsinline": true}}' data-sub-html="<h4>Lacci (2020) SMP01</h4>">
    <img class="img-responsive" src="http://cos.eightqueen.com/Lacci.2020_smp01.jpg" alt="&lt;p&gt;Lacci (2020) SMP01&lt;/p&gt;" />
  </a>
  <a class="gallery-item" data-lg-size="1280-720" data-html="#smp09" data-video='{"source": [{"src":"http://media.eightqueen.com/Das.letzte.Schweigen.2010_smp01.webm", "type":"video/webm"}], "attributes": {"preload": false, "controls": true, "playsinline": true}}' data-sub-html="<h4>Das letzte Schweigen (2010) SMP01</h4>">
    <img class="img-responsive" src="http://cos.eightqueen.com/Das.letzte.Schweigen.2010_smp01.jpg" alt="&lt;p&gt;Das letzte Schweigen (2010) SMP01&lt;/p&gt;" />
  </a>
  <a class="gallery-item" data-lg-size="1280-720" data-html="#smp08" data-video='{"source": [{"src":"http://media.eightqueen.com/Being.John.Malkovich.1999_smp01.webm", "type":"video/webm"}], "tracks": [{"src": "/vtt/Being.John.Malkovich.1999_smp01.zho.vtt", "kind":"captions", "srclang": "zh-cn", "label": "Simplified Chinese", "default": "true"},{"src": "/vtt/Being.John.Malkovich.1999_smp01.eng.vtt", "kind":"captions", "srclang": "en", "label": "English"}], "attributes": {"preload": false, "controls": true, "playsinline": true}}' data-sub-html="<h4>Being John Malkovich (1999) SMP01</h4>">
    <img class="img-responsive" src="http://cos.eightqueen.com/Being.John.Malkovich.1999_smp01.jpg" alt="&lt;p&gt;Being John Malkovich (1999) SMP01&lt;/p&gt;" />
  </a>
  <a class="gallery-item" data-lg-size="1280-720" data-html="#smp07" data-video='{"source": [{"src":"http://media.eightqueen.com/Io.sono.l'amore.2009_smp02.webm", "type":"video/webm"}], "tracks": [{"src": "/vtt/Io.sono.l'amore.2009_smp02.zho.vtt", "kind":"captions", "srclang": "zh-cn", "label": "Simplified Chinese", "default": "true"},{"src": "/vtt/Io.sono.l'amore.2009_smp02.zho.vtt", "kind":"captions", "srclang": "it", "label": "Italian"},{"src": "/vtt/Io.sono.l'amore.2009_smp02.eng.vtt", "kind":"captions", "srclang": "en", "label": "English"}], "attributes": {"preload": false, "controls": true, "playsinline": true}}' data-sub-html="<h4>Io sono l'amore (2009) SMP02</h4>">
    <img class="img-responsive" src="http://cos.eightqueen.com/Io.sono.l'amore.2009_smp02.jpg" alt="&lt;p&gt;Io sono l'amore (2009) SMP02&lt;/p&gt;" />
  </a>
  <a class="gallery-item" data-lg-size="1280-720" data-html="#smp06" data-video='{"source": [{"src":"http://media.eightqueen.com/Io.sono.l'amore.2009_smp01.webm", "type":"video/webm"}], "tracks": [{"src": "/vtt/Io.sono.l'amore.2009_smp01.zho.vtt", "kind":"captions", "srclang": "zh-cn", "label": "Simplified Chinese", "default": "true"},{"src": "/vtt/Io.sono.l'amore.2009_smp01.ita.vtt", "kind":"captions", "srclang": "it", "label": "Italian"},{"src": "/vtt/Io.sono.l'amore.2009_smp01.eng.vtt", "kind":"captions", "srclang": "en", "label": "English"}], "attributes": {"preload": false, "controls": true, "playsinline": true}}' data-sub-html="<h4>Io sono l'amore (2009) SMP01</h4>">
    <img class="img-responsive" src="http://cos.eightqueen.com/Io.sono.l'amore.2009_smp01.jpg" alt="&lt;p&gt;Io sono l'amore (2009) SMP01&lt;/p&gt;" />
  </a>
  <a class="gallery-item" data-lg-size="1280-720" data-html="#smp05" data-video='{"source": [{"src":"http://media.eightqueen.com/Dead.Ringers.1988_smp01.webm", "type":"video/webm"}], "tracks": [{"src": "/vtt/Dead.Ringers.1988_smp01.zho.vtt", "kind":"captions", "srclang": "zh-cn", "label": "Simplified Chinese", "default": "true"},{"src": "/vtt/Dead.Ringers.1988_smp01.eng.vtt", "kind":"captions", "srclang": "en", "label": "English"}], "attributes": {"preload": false, "controls": true, "playsinline": true}}' data-sub-html="<h4>Dead Ringers (1988) SMP01</h4>">
    <img class="img-responsive" src="http://cos.eightqueen.com/Dead.Ringers.1988_smp01.jpg" alt="&lt;p&gt;Dead Ringers (1988) SMP01&lt;/p&gt;" />
  </a>
  <a class="gallery-item" data-lg-size="1280-720" data-html="#smp04" data-video='{"source": [{"src":"http://media.eightqueen.com/Revanche.2008_smp01.webm", "type":"video/webm"}], "tracks": [{"src": "/vtt/Revanche.2008_smp01.zho.vtt", "kind":"captions", "srclang": "zh-cn", "label": "Simplified Chinese", "default": "true"}], "attributes": {"preload": false, "controls": true, "playsinline": true}}' data-sub-html="<h4>Revanche (2008) SMP01</h4>">
    <img class="img-responsive" src="http://cos.eightqueen.com/Revanche.2008_smp01.jpg" alt="&lt;p&gt;Revanche (2008) SMP01&lt;/p&gt;" />
  </a>
  <a class="gallery-item" data-lg-size="1280-720" data-html="#smp03" data-video='{"source": [{"src":"http://media.eightqueen.com/Nymphomaniac.Volume.I.2013_smp01.webm", "type":"video/webm"}], "tracks": [{"src": "/vtt/Nymphomaniac.Volume.I.2013_smp01.zho.vtt", "kind":"captions", "srclang": "zh-cn", "label": "Simplified Chinese", "default": "true"},{"src": "/vtt/Nymphomaniac.Volume.I.2013_smp01.eng.vtt", "kind":"captions", "srclang": "en", "label": "English"}], "attributes": {"preload": false, "controls": true, "playsinline": true}}' data-sub-html="<h4>Nymphomaniac Volume I (2013) SMP01</h4>">
    <img class="img-responsive" src="http://cos.eightqueen.com/Nymphomaniac.Volume.I.2013_smp01.jpg" alt="&lt;p&gt;Nymphomaniac Volume I (2013) SMP01&lt;/p&gt;" />
  </a>
  <a class="gallery-item" data-lg-size="1280-720" data-html="#smp02" data-video='{"source": [{"src":"http://media.eightqueen.com/Jestem.2005_smp01.webm", "type":"video/webm"}], "tracks": [{"src": "/vtt/Jestem.2005_smp01.zho.vtt", "kind":"captions", "srclang": "zh-cn", "label": "Simplified Chinese", "default": "true"}], "attributes": {"preload": false, "controls": true, "playsinline": true}}' data-sub-html="<h4>Jestem (2005) SMP01</h4>">
    <img class="img-responsive" src="http://cos.eightqueen.com/Jestem.2005_smp01.jpg" alt="&lt;p&gt;Jestem (2005) SMP01&lt;/p&gt;" />
  </a>
  <a class="gallery-item" data-lg-size="1280-720" data-html="#smp01" data-video='{"source": [{"src":"http://media.eightqueen.com/不能说的·秘密.2007_smp01.webm", "type":"video/webm"}], "tracks": [{"src": "/vtt/不能说的·秘密.2007_smp01.zho.sc.vtt", "kind":"captions", "srclang": "zh-cn", "label": "Simplified Chinese", "default": "true"},{"src": "/vtt/不能说的·秘密.2007_smp01.zho.tc.vtt", "kind":"captions", "srclang": "en", "label": "English"}], "attributes": {"preload": false, "controls": true, "playsinline": true}}' data-sub-html="<h4>不能说的·秘密 (2007) SMP01</h4>">
    <img class="img-responsive" src="http://cos.eightqueen.com/不能说的·秘密.2007_smp01.jpg" alt="&lt;p&gt;不能说的·秘密 (2007) SMP01&lt;/p&gt;" />
  </a>
</div>

<script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.js"></script>
<script src="https://cdn.jsdelivr.net/npm/justifiedGallery@3.8.1/dist/js/jquery.justifiedGallery.js"></script>
<script src="https://cdn.jsdelivr.net/npm/lightgallery@2.7.0/lightgallery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/lightgallery@2.7.0/plugins/thumbnail/lg-thumbnail.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/lightgallery@2.7.0/plugins/video/lg-video.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/video.js@7.20.3/dist/video.min.js"></script>

<script type="text/javascript">
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
</script>

tool: losslesscut, kdenlive(rescale), ffmpeg-batch, subtitle-edit, neav1e, srt2vtt, calcutext