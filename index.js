setInterval(() => {
    const d = new Date();
    const htime = d.getHours();
    const mtime = d.getMinutes();
    const stime = d.getSeconds();
    
    const hrotation = 30 * htime + mtime / 2;
    const mrotation = 6 * mtime;
    const srotation = 6 * stime;

    hours.style.transform = rotate(${hrotation}deg);
    minutes.style.transform = rotate(${mrotation}deg);
    seconds.style.transform = rotate(${srotation}deg);

    // Update the digital clock
    const digitalClock = document.getElementById('digitalClock');
    digitalClock.innerHTML = 
        (htime < 10 ? '0' : '') + htime + ':' + 
        (mtime < 10 ? '0' : '') + mtime + ':' + 
        (stime < 10 ? '0' : '') + stime;

}, 1000);

const audio = document.getElementById('myAudio');

setInterval(() => {
    audio.play();
}, 1000);