document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
    });
});

const line1 = "I'm Pipit Lusianawati";
const line2 = "Water Engineer | Hydraulic Analyst | Hydraulic Analysis Enthusiast";

let i = 0;
let j = 0;

function typeLine1() {
    if (i < line1.length) {
        document.getElementById("typing-line1").innerHTML += line1.charAt(i);
        i++;
        setTimeout(typeLine1, 60);
    } else {
        setTimeout(typeLine2, 300);
    }
}

function typeLine2() {
    if (j < line2.length) {
        document.getElementById("typing-line2").innerHTML += line2.charAt(j);
        j++;
        setTimeout(typeLine2, 40);
    }
}

window.onload = function() {
    typeLine1();
};
