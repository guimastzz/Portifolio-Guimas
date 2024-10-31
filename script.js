// Scroll Suave
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Modal para Projetos
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalImage = document.getElementById("modal-image");
const modalDescription = document.getElementById("modal-description");
const closeModal = document.querySelector(".close");

document.querySelectorAll(".project").forEach(project => {
    project.addEventListener("click", () => {
        modal.style.display = "block";
        modalTitle.innerText = project.querySelector("h3").innerText;
        modalImage.src = project.querySelector("img").src;
        modalDescription.innerText = "Descrição do projeto: " + modalTitle.innerText;
    });
});

closeModal.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
