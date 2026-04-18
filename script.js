// =====================
// SMOOTH SCROLL
// =====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// smooth scroll tetap
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
    });
});

// toggle project (UX lebih rapi: cuma 1 kebuka)
function toggleProject(card) {
    document.querySelectorAll(".project").forEach(p => {
        if (p !== card) p.classList.remove("active");
    });

    card.classList.toggle("active");
}

function openImage(e, src) {
    e.stopPropagation(); // biar gak trigger expand card
    document.getElementById("imgViewer").style.display = "flex";
    document.getElementById("imgPreview").src = src;
}

function closeImage() {
    document.getElementById("imgViewer").style.display = "none";
}

function moveSlide(btn, direction) {
    const wrapper = btn.parentElement;
    const track = wrapper.querySelector(".slider-track");
    const images = wrapper.querySelectorAll("img");

    let index = wrapper.dataset.index ? parseInt(wrapper.dataset.index) : 0;

    index += direction;

    if (index < 0) index = images.length - 1;
    if (index >= images.length) index = 0;

    const width = images[0].clientWidth;
    track.style.transform = `translateX(-${index * width}px)`;

    wrapper.dataset.index = index;
}

// =====================
// MODAL (for project-item)
// =====================
function openModal(img) {
    document.getElementById("imageModal").style.display = "block";
    document.getElementById("modalImg").src = img.src;
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}

// Close modal when clicking outside the image
document.getElementById("imageModal").addEventListener("click", function(e) {
    if (e.target === this) {
        this.style.display = "none";
    }
});

// Close modal with Escape key
document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
        document.getElementById("imageModal").style.display = "none";
    }
});

function toggleProject(btn) {
    const project = btn.parentElement;
    project.classList.toggle("active");
}