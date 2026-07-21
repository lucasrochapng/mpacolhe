// ======================================
// LEITOR DE TELA
// ======================================

const readButton = document.getElementById("readPageButton");

let speech = null;
let reading = false;

if (readButton) {

    readButton.addEventListener("click", toggleReading);

}

function getSpeechText() {

    const page = document.getElementById("pageContent");

    if (!page)
        return document.body.innerText;

    return page.dataset.speech || page.innerText;

}

function toggleReading() {

    if (reading) {

        speechSynthesis.cancel();

        finishReading();

        return;

    }

    speech = new SpeechSynthesisUtterance(getSpeechText());

    speech.lang = "pt-BR";

    speech.rate = 1;

    speech.pitch = 1;

    speech.volume = 1;

    // tenta utilizar uma voz em português
    const voices = speechSynthesis.getVoices();

    const ptVoice = voices.find(v => v.lang.startsWith("pt"));

    if (ptVoice) {

        speech.voice = ptVoice;

    }

    speech.onstart = () => {

        reading = true;

        readButton.classList.add("playing");

        readButton.innerHTML = `
            <i class="fa-solid fa-stop"></i>
        `;

    };

    speech.onend = finishReading;

    speech.onerror = finishReading;

    speechSynthesis.speak(speech);

}

function finishReading() {

    reading = false;

    readButton.classList.remove("playing");

    readButton.innerHTML = `
        <i class="fa-solid fa-volume-high"></i>
    `;

}

window.addEventListener("beforeunload", () => {

    speechSynthesis.cancel();

});