# 🎧 Podcasts 

## Saison 1 – "IA de 2025 à demain"

<div id="podcast-gallery" style="display: flex; flex-wrap: wrap; gap: 1em; margin-bottom: 2em;">
  <img src="/BetweenIntelligences/podcasts/cover1.jpg" 
       data-audio="/BetweenIntelligences/podcasts/A1.m4a"
       alt="Podcast 1/12" title="Episode 1/12"
       class="podcast-thumb" />

<img src="/BetweenIntelligences/podcasts/cover2.jpg"
data-audio="/BetweenIntelligences/podcasts/A2.m4a"
alt="Podcast 2/12" title="Episode 2/12"
class="podcast-thumb" />

<img src="/BetweenIntelligences/podcasts/cover3.jpg"
data-audio="/BetweenIntelligences/podcasts/A3.m4a"
alt="Podcast 3/12" title="Episode 3/12"
class="podcast-thumb" />

<img src="/BetweenIntelligences/podcasts/cover4.jpg"
data-audio="/BetweenIntelligences/podcasts/A4.m4a"
alt="Podcast 4/12" title="Episode 4/12"
class="podcast-thumb" />

<img src="/BetweenIntelligences/podcasts/cover5.jpg"
data-audio="/BetweenIntelligences/podcasts/A5.m4a"
alt="Podcast 5/12" title="Episode 5/12"
class="podcast-thumb" />

<img src="/BetweenIntelligences/podcasts/cover6.jpg"
data-audio="/BetweenIntelligences/podcasts/A6.m4a"
alt="Podcast 6/12" title="Episode 6/12"
class="podcast-thumb" />

<img src="/BetweenIntelligences/podcasts/cover7.jpg"
data-audio="/BetweenIntelligences/podcasts/A7.m4a"
alt="Podcast 7/12" title="Episode 7/12"
class="podcast-thumb" />

<img src="/BetweenIntelligences/podcasts/cover8.jpg"
data-audio="/BetweenIntelligences/podcasts/A8.m4a"
alt="Podcast 8/12" title="Episode 8/12"
class="podcast-thumb" />

<img src="/BetweenIntelligences/podcasts/cover9.jpg"
data-audio="/BetweenIntelligences/podcasts/A9.m4a"
alt="Podcast 9/12" title="Episode 9/12"
class="podcast-thumb" />

<img src="/BetweenIntelligences/podcasts/cover10.jpg"
data-audio="/BetweenIntelligences/podcasts/A10.m4a"
alt="Podcast 10/12" title="Episode 10/12"
class="podcast-thumb" />

<img src="/BetweenIntelligences/podcasts/cover11.jpg"
data-audio="/BetweenIntelligences/podcasts/A11.m4a"
alt="Podcast 11/12" title="Episode 11/12"
class="podcast-thumb" />

<img src="/BetweenIntelligences/podcasts/cover12.jpg"
data-audio="/BetweenIntelligences/podcasts/A12.m4a"
alt="Podcast 12/12" title="Episode 12/12"
class="podcast-thumb" />


</div>

<div id="main-waveform" style="width: 100%; height: 96px; margin-bottom: 8px; background: #f4f4f4;"></div>
<div style="display: flex; align-items: center; gap: 1em; margin-bottom: 16px;">
  <button id="main-play" disabled
          style="padding: 8px 16px; background: #4050b5; color: white; border: none; border-radius: 4px; cursor: pointer;">
    ▶️ Lecture
  </button>
  <span id="main-time" style="font-family: monospace; color: #555;">00:00 / 00:00</span>
</div>

<style>
.podcast-thumb {
  width: 160px;
  height: 160px;
  object-fit: cover;
  cursor: pointer;
  border-radius: 8px;
  box-shadow: 0 0 5px #ccc;
  transition: transform 0.2s, box-shadow 0.2s;
}
.podcast-thumb:hover {
  transform: scale(1.02);
}
.podcast-thumb.active {
  border: 3px solid #4050b5;
  box-shadow: 0 0 8px #4050b5;
}
</style>

<script>
document.addEventListener("DOMContentLoaded", function () {
  const waveform = WaveSurfer.create({
    container: '#main-waveform',
    waveColor: '#ddd',
    progressColor: '#4050b5', // ✅ couleur lue
    height: 96,
    responsive: true,
    barWidth: 2,
    cursorColor: '#333'
  });

  const playBtn = document.getElementById("main-play");
  const timeLabel = document.getElementById("main-time");
  let currentActive = null;

  function formatTime(sec) {
    const m = Math.floor(sec / 60), s = Math.floor(sec % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  }

  function updateTime() {
    timeLabel.textContent = `${formatTime(waveform.getCurrentTime())} / ${formatTime(waveform.getDuration())}`;
  }

  waveform.on('ready', () => {
    playBtn.disabled = false;
    updateTime();
    waveform.play(); // 🔊 lecture auto
  });

  waveform.on('audioprocess', updateTime);
  waveform.on('seek', updateTime);
  waveform.on('play', () => playBtn.textContent = '⏸ Pause');
  waveform.on('pause', () => playBtn.textContent = '▶️ Lecture');
  waveform.on('finish', () => {
    playBtn.textContent = '▶️ Lecture';
    updateTime();
  });

  playBtn.addEventListener('click', () => waveform.playPause());

  document.querySelectorAll('.podcast-thumb').forEach(img => {
    img.addEventListener('click', () => {
      const audioSrc = img.getAttribute('data-audio');

      if (currentActive) {
        currentActive.classList.remove('active');
      }
      img.classList.add('active');
      currentActive = img;

      waveform.load(audioSrc);
      playBtn.textContent = '▶️ Lecture';
    });
  });
});
</script>

---

<div style="text-align: center;">
  <a href="https://apple.co/4fmQLp5" target="_blank" rel="noopener noreferrer" title="Écouter sur Apple Podcasts">
    <img src="/BetweenIntelligences/podcasts/badge.svg" alt="Disponible sur Apple Podcasts"
         style="height: 48px; margin-bottom: 1em; cursor: pointer;" />
  </a>
</div>

---
