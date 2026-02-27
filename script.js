document.querySelectorAll(".star-btn").forEach(button => {
    button.addEventListener("click", function(e) {

        for (let i = 0; i < 20; i++) {
            let star = document.createElement("div");
            star.classList.add("star");

            star.style.left = e.offsetX + "px";
            star.style.top = e.offsetY + "px";

            this.appendChild(star);

            setTimeout(() => {
                star.remove();
            }, 1000);
        }
    });
});
/* ================= TYPING EFFECT ================= */

const aboutText = "I am Sandeep Kumar SankaraGuptham, a Computer Science student specializing in Artificial Intelligence and Machine Learning. I am passionate about building modern, responsive and visually appealing web applications. I enjoy solving real-world problems using technology and continuously upgrading my skills.";

let i = 0;

function typingEffect() {
    const typingElement = document.querySelector(".typing-text");
    if (typingElement && i < aboutText.length) {
        typingElement.innerHTML += aboutText.charAt(i);
        i++;
        setTimeout(typingEffect, 40);
    }
}

window.addEventListener("load", typingEffect);