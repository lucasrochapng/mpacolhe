// ======================================
// LEITOR DE TEXTO
// ======================================

let currentSpeech = null;
let currentButton = null;

document.querySelectorAll(".speak-button").forEach(button => {

    button.addEventListener("click", () => {

        // Se clicar no mesmo botão enquanto está lendo
        if(currentButton === button && speechSynthesis.speaking){

            speechSynthesis.cancel();

            resetButton(button);

            currentButton = null;

            return;

        }

        // Para qualquer leitura anterior
        speechSynthesis.cancel();

        if(currentButton){

            resetButton(currentButton);

        }

        const target = document.getElementById(button.dataset.target);

        if(!target) return;

        currentSpeech = new SpeechSynthesisUtterance(target.innerText);

        currentSpeech.lang = "pt-BR";

        currentSpeech.rate = 1;

        currentSpeech.pitch = 1;

        currentSpeech.volume = 1;

        const voice = speechSynthesis
            .getVoices()
            .find(v => v.lang.startsWith("pt"));

        if(voice){

            currentSpeech.voice = voice;

        }

        currentSpeech.onend = () => {

            resetButton(button);

            currentButton = null;

        };

        button.classList.add("playing");

        button.innerHTML = `
            <i class="fa-solid fa-stop"></i>
        `;

        currentButton = button;

        speechSynthesis.speak(currentSpeech);

    });

});

function resetButton(button){

    button.classList.remove("playing");

    button.innerHTML = `
        <i class="fa-solid fa-volume-high"></i>
    `;

}

window.addEventListener("beforeunload",()=>{

    speechSynthesis.cancel();

});