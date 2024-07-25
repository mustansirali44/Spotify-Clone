let songindex = 0;
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
let opac = document.getElementById('opac');
let songsitems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songname: "Ek Baar Dekh Lijiye-Heeramandi", filepath: "songs/1.mp3", coverpath: "covers/1.jpg", duration: "03:45" },
    { songname: "Husn-Album", filepath: "songs/2.mp3", coverpath: "covers/2.jpg", duration: "04:12" },
    { songname: "O Sajni Re (Laapataa Ladies)", filepath: "songs/3.mp3", coverpath: "covers/3.jpg", duration: "03:58" },
    { songname: "Dekha Tenu Pehli Pehli Baar Ve", filepath: "songs/4.mp3", coverpath: "covers/4.jpg", duration: "04:07" },
    { songname: "Heeriye- Jasleen Royal, Arijit Singh", filepath: "songs/5.mp3", coverpath: "covers/5.jpg", duration: "03:54" },
    { songname: "Night Changes One Direction", filepath: "songs/6.mp3", coverpath: "covers/6.jpg", duration: "03:46" },
    { songname: "Imagine Dragons-Bad Liar", filepath: "songs/7.mp3", coverpath: "covers/7.jpg", duration: "04:20" },
    { songname: "Henry Moodie-Pickup The Phone", filepath: "songs/8.mp3", coverpath: "covers/8.jpg", duration: "03:59" },
];

let audioElement = new Audio(songs[songindex].filepath);

songsitems.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songname;
    element.getElementsByClassName("time")[0].innerText = songs[i].duration; 

    

});

// Function to make all play buttons display play icon
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    });
};


masterplay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        opac.style.opacity = 1;
    } else {
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        opac.style.opacity = 0;
    }
});


audioElement.addEventListener('timeupdate', () => {
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myprogressbar.value = progress;
});


myprogressbar.addEventListener('change', () => {
    audioElement.currentTime = myprogressbar.value * audioElement.duration / 100;
});
