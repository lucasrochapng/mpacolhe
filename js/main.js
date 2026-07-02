//MOVIMENTO DOS TEXTOS NOS MEUS PROCESSOS

const headers = document.querySelectorAll(".step-header");

headers.forEach(header => {

    header.addEventListener("click", () => {

        const currentStep = header.closest(".step");

        document.querySelectorAll(".step").forEach(step => {

            if(step !== currentStep){
                step.classList.remove("active");
            }

        });

        currentStep.classList.toggle("active");

    });

});