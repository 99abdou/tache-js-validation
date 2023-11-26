const days = document.getElementById("days")
const hours = document.getElementById("hours")
const minute = document.getElementById("minute")
const second = document.getElementById("second")

const anneeCourante = new Date().getFullYear();
const anneePrecedant = anneeCourante + 1;

console.log("anneeCourante", anneeCourante);
console.log("anneePrecedant", anneePrecedant);

setInterval(() => {
    const dateCourante = new Date();
    const nouvelAnnee = new Date(`January 01 ${anneePrecedant} 00:00:00`);
    const totalSeconds = (nouvelAnnee - dateCourante) / 1000;

    const d = Math.floor(totalSeconds / 3600 / 24);
    const h = Math.floor(totalSeconds / 3600) % 24;
    const m = Math.floor(totalSeconds / 60) % 60;
    const s = Math.floor(totalSeconds) % 60;

    days.innerHTML = d;
    hours.innerHTML = h;
    minute.innerHTML = m;
    second.innerHTML = s;
        
}, 1000)