const cardElements = document.querySelectorAll('.card');
const player = document.getElementById('player');

// Cek apakah sudah buka hari ini
//const lastVisit = localStorage.getItem('lastVisit');
//const today = new Date().toLocaleDateString();

//if (lastVisit === today) {
  //alert("Kamu hanya bisa membuka sekali sehari. Kembali besok ya!");
  //document.body.innerHTML = "<h2>Silakan kembali besok!</h2>";
//} else {
  //localStorage.setItem('lastVisit', today);
//}

// Fungsi audio
const audios = {
  marah: ['audio/marah/1.mp3', 'audio/marah/2.mp3'],
  sedih: ['audio/sedih/1.mp3', 'audio/sedih/2.mp3'],
  kecewa: ['audio/kecewa/1.mp3', 'audio/kecewa/2.mp3'],
  takut: ['audio/takut/1.mp3', 'audio/takut/2.mp3']
};

cardElements.forEach(card => {
  card.addEventListener('click', () => {
    const emotion = card.getAttribute('data-emotion');
    const sounds = audios[emotion];
    const randomAudio = sounds[Math.floor(Math.random() * sounds.length)];
    player.src = randomAudio;
    player.play();
  });
});

// Blok klik kanan
document.addEventListener('contextmenu', event => event.preventDefault());
