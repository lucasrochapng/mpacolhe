// ======================================
// MEMÓRIA DA VÍTIMA
// ======================================

const saveMemory = document.getElementById("saveMemory");
const memoryStatus = document.getElementById("memoryStatus");

if (saveMemory && memoryStatus) {

    saveMemory.addEventListener("click", () => {

        saveMemory.disabled = true;

        saveMemory.innerHTML = `
            <i class="fa-solid fa-spinner fa-spin"></i>
            Preservando memória...
        `;

        setTimeout(() => {

            saveMemory.innerHTML = `
                <i class="fa-solid fa-circle-check"></i>
                Memória preservada
            `;

            memoryStatus.innerHTML = `

                <div class="memory-success">

                    <i class="fa-solid fa-heart"></i>

                    <h3>
                        Memória preservada
                    </h3>

                    <p>
                        Obrigado por compartilhar um pouco da história dessa pessoa.
                    </p>

                    <p>
                        Sua memória ficará registrada como uma forma de preservar quem ela foi além do processo.
                    </p>

                </div>


                <p class="memory-quote" style="margin-bottom: 50px;">

                    "A memória preserva nossos entes queridos dentro dos nossos corações."

                </p>

            `;

        }, 1800);

    });

}

// GALERIA DE FOTOS

const openGallery = document.getElementById("openGallery");
const galleryOverlay = document.getElementById("galleryOverlay");
const closeGallery = document.getElementById("closeGallery");
const victimPhoto = document.getElementById("victimPhoto");


if(openGallery){


    openGallery.addEventListener("click",()=>{

        galleryOverlay.classList.add("show");

    });


}


if(closeGallery){


    closeGallery.addEventListener("click",()=>{

        galleryOverlay.classList.remove("show");

    });


}


document.querySelectorAll(".gallery-grid img").forEach(photo=>{


    photo.addEventListener("click",()=>{


        victimPhoto.src = photo.src;


        document
        .querySelector(".memory-photo")
        .classList.add("has-image");


        galleryOverlay.classList.remove("show");


    });


});