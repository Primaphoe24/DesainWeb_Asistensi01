let audio;

export function getAudio() {
  if (!audio) {
    audio = new Audio('/music/lagu.mp3');
    audio.loop = true;
  }
  return audio;
}


// HANYA PERCOBAAN, TIDAK DIGUNAKAN