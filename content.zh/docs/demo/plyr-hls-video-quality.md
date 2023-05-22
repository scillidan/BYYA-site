---
title: plyr + hls.js & video quality
---
# (demo)plyr + hls.js & video quality

<link rel="stylesheet" href="https://unpkg.com/plyr@3/dist/plyr.css" />

<video controls crossorigin playsinline poster="https://bitdash-a.akamaihd.net/content/sintel/poster.png"></video>

<script src="https://cdn.rawgit.com/video-dev/hls.js/18bb552/dist/hls.min.js"></script>
<script src="https://unpkg.com/plyr@3"></script>
<script>
document.addEventListener("DOMContentLoaded", () => {
  const source = "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8";
  const video = document.querySelector("video");
  const defaultOptions = {};
  if (!Hls.isSupported()) {
    video.src = source;
    var player = new Plyr(video, defaultOptions);
  } else {
    const hls = new Hls();
    hls.loadSource(source);
    hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
      const availableQualities = hls.levels.map((l) => l.height);
      availableQualities.unshift(0);
      defaultOptions.quality = {
        default: 0,
        options: availableQualities,
        forced: true,
        onChange: (e) => updateQuality(e),
      };
      defaultOptions.i18n = {
        qualityLabel: {
          0: "Auto",
        },
      };
      hls.on(Hls.Events.LEVEL_SWITCHED, function (event, data) {
        var span = document.querySelector(".plyr__menu__container [data-plyr='quality'][value='0'] span");
        if (hls.autoLevelEnabled) {
          span.innerHTML = `AUTO (${hls.levels[data.level].height}p)`;
        } else {
          span.innerHTML = `AUTO`;
        }
      });
      var player = new Plyr(video, defaultOptions);
    });
    hls.attachMedia(video);
    window.hls = hls;
  }
  function updateQuality(newQuality) {
    if (newQuality === 0) {
      window.hls.currentLevel = -1;
    } else {
      window.hls.levels.forEach((level, levelIndex) => {
        if (level.height === newQuality) {
          console.log("Found quality match with " + newQuality);
          window.hls.currentLevel = levelIndex;
        }
      });
    }
  }
});
</script>