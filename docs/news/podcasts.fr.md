
## 🎧 Podcast "AI War - 1/8"

<div id="waveform" style="width: 100%; height: 96px; margin-bottom: 1em; background: #f4f4f4;"></div>
<button id="playPause"
        style="padding: 10px 16px; border: none; background-color: #1abc9c; color: white; border-radius: 4px; cursor: pointer;">
  ▶️ Lecture
</button>

<script>
  document.addEventListener("DOMContentLoaded", function () {
    const wavesurfer = WaveSurfer.create({
      container: '#waveform',
      waveColor: '#ddd',
      progressColor: '#1abc9c',
      height: 96,
      responsive: true,
      barWidth: 2,
      cursorColor: '#333'
    });

    // 🔁 Chemin absolu depuis la racine du site
    wavesurfer.load('/BetweenIntelligences/podcasts/IA_War.mp3');

    const playBtn = document.getElementById('playPause');
    playBtn.disabled = true;

    wavesurfer.on('ready', () => {
      playBtn.disabled = false;
    });

    playBtn.addEventListener('click', () => {
      wavesurfer.playPause();
    });

    wavesurfer.on('play', () => {
      playBtn.textContent = '⏸ Pause';
    });

    wavesurfer.on('pause', () => {
      playBtn.textContent = '▶️ Lecture';
    });

    wavesurfer.on('finish', () => {
      playBtn.textContent = '▶️ Lecture';
    });
  });
</script>

Accès à l'ensemble du dossier : [Expériences | Loss of Control](../xp/lossofcontrol/1.resume.fr.md)

---

## 🎧 Podcast "AI War - 3/8"

<div id="waveform" style="width: 100%; height: 96px; margin-bottom: 1em; background: #f4f4f4;"></div>

<div style="display: flex; align-items: center; gap: 1em; margin-bottom: 1em;">
  <button id="playPause"
          style="padding: 10px 16px; border: none; background-color: #1abc9c; color: white; border-radius: 4px; cursor: pointer;">
    ▶️ Lecture
  </button>
  <span id="timeDisplay" style="font-family: monospace; color: #555;">00:00 / 00:00</span>
</div>

<script>
  document.addEventListener("DOMContentLoaded", function () {
    const wavesurfer = WaveSurfer.create({
      container: '#waveform',
      waveColor: '#ddd',
      progressColor: '#1abc9c',
      height: 96,
      responsive: true,
      barWidth: 2,
      cursorColor: '#333'
    });

    // ✅ URL à adapter selon ton contexte
    wavesurfer.load('/BetweenIntelligences/podcasts/IA_War2.mp3');

    const playBtn = document.getElementById('playPause');
    const timeDisplay = document.getElementById('timeDisplay');
    playBtn.disabled = true;

    // Formatage mm:ss ou hh:mm:ss
    function formatTime(seconds) {
      const h = Math.floor(seconds / 3600);
      const m = Math.floor((seconds % 3600) / 60);
      const s = Math.floor(seconds % 60);
      return (h > 0 ? `${h.toString().padStart(2, '0')}:` : '') +
             `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }

    function updateTime() {
      const current = wavesurfer.getCurrentTime();
      const total = wavesurfer.getDuration();
      timeDisplay.textContent = `${formatTime(current)} / ${formatTime(total)}`;
    }

    wavesurfer.on('ready', () => {
      playBtn.disabled = false;
      updateTime();
    });

    wavesurfer.on('audioprocess', updateTime);
    wavesurfer.on('seek', updateTime);
    wavesurfer.on('play', () => {
      playBtn.textContent = '⏸ Pause';
    });

    wavesurfer.on('pause', () => {
      playBtn.textContent = '▶️ Lecture';
    });

    wavesurfer.on('finish', () => {
      playBtn.textContent = '▶️ Lecture';
      updateTime();
    });

    playBtn.addEventListener('click', () => {
      wavesurfer.playPause();
    });
  });
</script>
