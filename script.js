// =====================================
// 1. CONTROL DE LA MÚSICA
// =====================================

const music = document.getElementById("backgroundMusic");
const musicButton = document.getElementById("musicButton");

musicButton.addEventListener("click", async () => {

    if (music.paused) {
        try {
            await music.play();
            musicButton.textContent = "♫ Pausar música";
        } catch (error) {
            alert("No se pudo reproducir la canción. Revisa el archivo de música.");
        }
    } else {
        music.pause();
        musicButton.textContent = "♫ Música";
    }

});


// =====================================
// 2. CORAZONES FLOTANTES
// =====================================

const heartsContainer = document.getElementById("hearts");

function createHeart() {

    const heart = document.createElement("span");

    heart.classList.add("heart");
    heart.textContent = "♥";

    heart.style.left = Math.random() * 100 + "%";
    heart.style.fontSize = (12 + Math.random() * 20) + "px";
    heart.style.animationDuration = (5 + Math.random() * 6) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 11000);

}

setInterval(createHeart, 800);


// =====================================
// 3. LAS 100 RAZONES
// =====================================

const reasons = [
    "Porque tu sonrisa puede mejorar cualquier día.",
    "Porque tienes una forma única de hacerme feliz.",
    "Porque me encanta tu manera de ser.",
    "Porque contigo los momentos sencillos son especiales.",
    "Porque eres una persona maravillosa.",
    "Porque me encanta escuchar tu voz.",
    "Porque tus abrazos son mi lugar favorito.",
    "Porque siempre tienes algo especial.",
    "Porque me haces sonreír sin darme cuenta.",
    "Porque me encanta pasar tiempo contigo.",
    "Porque eres parte de mis pensamientos.",
    "Porque tienes una sonrisa preciosa.",
    "Porque me gusta cómo miras las cosas.",
    "Porque haces que mis días sean mejores.",
    "Porque me encanta conocerte cada día más.",
    "Porque puedo ser yo mismo contigo.",
    "Porque tienes un corazón hermoso.",
    "Porque cada recuerdo contigo vale mucho.",
    "Porque me gusta escuchar tus historias.",
    "Porque haces especial hasta un día normal.",
    "Porque eres única.",
    "Porque me encanta tu personalidad.",
    "Porque siempre encuentro motivos para sonreír contigo.",
    "Porque me gusta aprender cosas de ti.",
    "Porque tu felicidad también me hace feliz.",
    "Porque me encanta tu forma de reír.",
    "Porque eres una persona importante para mí.",
    "Porque haces que te extrañe cuando no estás.",
    "Porque me encanta compartir mis momentos contigo.",
    "Porque cada día encuentro algo nuevo que admirar de ti.",
    "Porque me gusta cómo eres.",
    "Porque tienes detalles que nunca olvido.",
    "Porque me haces sentir acompañado.",
    "Porque tus mensajes alegran mis días.",
    "Porque me encanta verte feliz.",
    "Porque tienes una belleza especial.",
    "Porque me gusta tu forma de hablar.",
    "Porque contigo el tiempo pasa volando.",
    "Porque me encanta hacerte sonreír.",
    "Porque eres una de mis mayores alegrías.",
    "Porque me gusta cómo me haces sentir.",
    "Porque tus ocurrencias me encantan.",
    "Porque tienes una energía especial.",
    "Porque siempre hay algo bonito que recordar contigo.",
    "Porque me encanta tu compañía.",
    "Porque haces que quiera ser mejor.",
    "Porque me gusta compartir mis sueños contigo.",
    "Porque eres alguien que quiero cuidar.",
    "Porque me encanta sorprenderte.",
    "Porque eres una parte bonita de mi vida.",
    "Porque me gusta celebrar tus logros.",
    "Porque me importa lo que sientes.",
    "Porque me encanta descubrir tus gustos.",
    "Porque disfruto nuestras conversaciones.",
    "Porque me gusta pensar en nuestro futuro.",
    "Porque haces que los pequeños detalles importen.",
    "Porque tienes una mirada especial.",
    "Porque me encanta tu espontaneidad.",
    "Porque me gusta escucharte hablar de lo que amas.",
    "Porque eres una persona que admiro.",
    "Porque me encanta compartir risas contigo.",
    "Porque me haces sentir afortunado.",
    "Porque cada foto contigo guarda algo especial.",
    "Porque me gusta estar pendiente de ti.",
    "Porque me encanta tu ternura.",
    "Porque tus abrazos hacen falta cuando no estás.",
    "Porque eres capaz de alegrarme con un mensaje.",
    "Porque me gusta conocer tus sueños.",
    "Porque quiero verte cumplir tus metas.",
    "Porque me encanta tu forma de pensar.",
    "Porque tienes una manera bonita de ver la vida.",
    "Porque me gusta compartir aventuras contigo.",
    "Porque eres alguien irremplazable en mi historia.",
    "Porque me encanta recordar cómo nos conocimos.",
    "Porque haces que quiera crear más recuerdos.",
    "Porque me gusta celebrar cada momento a tu lado.",
    "Porque tu presencia significa mucho para mí.",
    "Porque me encanta tu dulzura.",
    "Porque me gusta cuando te emocionas.",
    "Porque quiero seguir conociendo cada parte de ti.",
    "Porque eres mi persona especial.",
    "Porque me encanta cuando compartimos una sonrisa.",
    "Porque tienes detalles que te hacen diferente.",
    "Porque me gusta darte cariño.",
    "Porque quiero verte alcanzar todo lo que deseas.",
    "Porque me encanta cuando eres tú misma.",
    "Porque haces más bonitos mis recuerdos.",
    "Porque me gusta imaginar nuevas aventuras contigo.",
    "Porque me encanta tenerte en mi vida.",
    "Porque quiero seguir aprendiendo de ti.",
    "Porque eres una razón para agradecer.",
    "Porque me gusta cuidarte y apoyarte.",
    "Porque me haces creer en los momentos bonitos.",
    "Porque me encanta cada instante compartido.",
    "Porque siempre encuentro algo que admirar de ti.",
    "Porque eres especial de una forma que no puedo explicar.",
    "Porque quiero seguir creando recuerdos contigo.",
    "Porque tu existencia hace este mundo más bonito.",
    "Porque eres tú, y eso es más que suficiente."
];

let currentReason = 0;

const reasonNumber = document.getElementById("reasonNumber");
const reasonText = document.getElementById("reasonText");
const nextReason = document.getElementById("nextReason");

nextReason.addEventListener("click", () => {

    currentReason++;

    if (currentReason >= reasons.length) {
        currentReason = 0;
    }

    reasonNumber.textContent =
        `Razón ${String(currentReason + 1).padStart(2, "0")} de 100`;

    reasonText.style.opacity = 0;

    setTimeout(() => {
        reasonText.textContent = reasons[currentReason];
        reasonText.style.opacity = 1;
    }, 250);

});


// =====================================
// 4. SORPRESA FINAL
// =====================================

const surpriseButton = document.getElementById("surpriseButton");
const surpriseMessage = document.getElementById("surpriseMessage");

surpriseButton.addEventListener("click", () => {

    surpriseMessage.classList.remove("hidden");

    surpriseButton.textContent = "Mi regalo para ti ♥";
    surpriseButton.disabled = true;

    // Crear corazones adicionales
    for (let i = 0; i < 20; i++) {
        setTimeout(createHeart, i * 150);
    }

    surpriseMessage.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

});


// =====================================
// 5. ANIMACIONES AL DESPLAZARSE
// =====================================

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.animate(
                [
                    { opacity: 0, transform: "translateY(25px)" },
                    { opacity: 1, transform: "translateY(0)" }
                ],
                {
                    duration: 900,
                    easing: "ease-out",
                    fill: "both"
                }
            );

            observer.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.12
});

sections.forEach(section => {
    observer.observe(section);
});