## 🎧 Podcasts AI War – épisodes 1/8 & 3/8

### Episode 1/8
<div id="wf1" style="width:100%; height:96px; margin-bottom:8px; background:#f4f4f4;"></div>
<div style="display:flex; align-items:center; gap:1em; margin-bottom:16px;">
  <button id="btn1" style="padding:8px 16px;background:#1abc9c;color:white;border:none;border-radius:4px;cursor:pointer;">▶️ Lecture</button>
  <span id="time1" style="font-family:monospace;color:#555;">00:00 / 00:00</span>
</div>

### Episode 3/8
<div id="wf3" style="width:100%; height:96px; margin-bottom:8px; background:#f4f4f4;"></div>
<div style="display:flex; align-items:center; gap:1em; margin-bottom:16px;">
  <button id="btn3" style="padding:8px 16px;background:#1abc9c;color:white;border:none;border-radius:4px;cursor:pointer;">▶️ Lecture</button>
  <span id="time3" style="font-family:monospace;color:#555;">00:00 / 00:00</span>
</div>

<script>
document.addEventListener("DOMContentLoaded", function() {

  // fonction générique
  function setupPlayer(containerID, btnID, timeID, audioPath) {
    const wf = WaveSurfer.create({
      container: '#' + containerID,
      waveColor: '#ddd',
      progressColor: '#1abc9c',
      height: 96,
      responsive: true,
      barWidth: 2,
      cursorColor: '#333'
    });
    wf.load(audioPath);

    const btn = document.getElementById(btnID);
    const timeElem = document.getElementById(timeID);
    btn.disabled = true;

    function formatTime(sec) {
      const h = Math.floor(sec / 3600),
            m = Math.floor((sec % 3600) / 60),
            s = Math.floor(sec % 60);
      return (h > 0 ? `${h.toString().padStart(2,'0')}:` : '') +
             `${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
    }
    function update() {
      timeElem.textContent = `${formatTime(wf.getCurrentTime())} / ${formatTime(wf.getDuration())}`;
    }

    wf.on('ready', () => {
      btn.disabled = false;
      update();
    });
    wf.on('audioprocess', update);
    wf.on('seek', update);
    wf.on('play', () => btn.textContent = '⏸ Pause');
    wf.on('pause', () => btn.textContent = '▶️ Lecture');
    wf.on('finish', () => {
      btn.textContent = '▶️ Lecture';
      update();
    });

    btn.addEventListener('click', () => wf.playPause());
    return wf;
  }

  // initialisation
  setupPlayer('wf1', 'btn1', 'time1', '/BetweenIntelligences/podcasts/IA_War1.mp3');
  setupPlayer('wf3', 'btn3', 'time3', '/BetweenIntelligences/podcasts/IA_War3.mp3');
});
</script>
