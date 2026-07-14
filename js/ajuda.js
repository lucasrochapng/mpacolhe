// ===============================
// REDE DE APOIO
// ===============================

const helpHome = document.getElementById("helpHome");
const helpResults = document.getElementById("helpResults");
const resultTitle = document.getElementById("resultTitle");
const resultCards = document.getElementById("resultCards");
const backResults = document.getElementById("backResults");

const helpButtons = document.querySelectorAll(".help-button");

if(helpButtons.length){

    const supportData = {

        psicologico:{

            titulo:"Atendimento Psicológico",

            locais:[

                {

                    nome:"CAPS Centro",

                    imagem:"images/caps.jpg",

                    endereco:"Rua Exemplo, 123",

                    telefone:"(41) 3333-3333",

                    horario:"Segunda a Sexta • 08h às 18h",

                    mapa:"https://maps.google.com"

                },

                {

                    nome:"Hospital Municipal",

                    imagem:"images/hospital.jpg",

                    endereco:"Av. Exemplo, 450",

                    telefone:"(41) 3222-1111",

                    horario:"24 horas",

                    mapa:"https://maps.google.com"

                }

            ]

        },

        juridico:{

            titulo:"Orientação Jurídica",

            locais:[

                {

                    nome:"Defensoria Pública",

                    imagem:"images/defensoria.jpg",

                    endereco:"Rua Exemplo, 500",

                    telefone:"(41) 3000-0000",

                    horario:"Segunda a Sexta • 12h às 18h",

                    mapa:"https://maps.google.com"

                }

            ]

        },

        criancas:{

            titulo:"Apoio às Crianças",

            locais:[

                {

                    nome:"Conselho Tutelar",

                    imagem:"images/conselho.jpg",

                    endereco:"Rua Exemplo, 999",

                    telefone:"(41) 3111-1111",

                    horario:"24 horas",

                    mapa:"https://maps.google.com"

                }

            ]

        },

        social:{

            titulo:"Assistência Social",

            locais:[

                {

                    nome:"CRAS Centro",

                    imagem:"images/cras.jpg",

                    endereco:"Rua Exemplo, 250",

                    telefone:"(41) 3555-5555",

                    horario:"Segunda a Sexta • 08h às 17h",

                    mapa:"https://maps.google.com"

                }

            ]

        }

    };

    const categories = [

        "psicologico",

        "juridico",

        "criancas",

        "social"

    ];

    helpButtons.forEach((button,index)=>{

        button.addEventListener("click",()=>{

            loadCategory(categories[index]);

        });

    });

    function loadCategory(category){

        const data = supportData[category];

        resultTitle.innerHTML = data.titulo;

        resultCards.innerHTML = "";

        data.locais.forEach(local=>{

            resultCards.innerHTML += `

                <div class="help-card">

                    <img src="${local.imagem}">

                    <div class="help-card-content">

                        <h3>${local.nome}</h3>

                        <div class="help-info">

                            <i class="fa-solid fa-location-dot"></i>

                            ${local.endereco}

                        </div>

                        <div class="help-info">

                            <i class="fa-solid fa-phone"></i>

                            ${local.telefone}

                        </div>

                        <div class="help-info">

                            <i class="fa-solid fa-clock"></i>

                            ${local.horario}

                        </div>

                        <button
                            class="map-button"
                            onclick="window.open('${local.mapa}')">

                            Ver no mapa

                        </button>

                    </div>

                </div>

            `;

        });

        helpHome.style.display="none";

        helpResults.style.display="block";

    }

    backResults.addEventListener("click",()=>{

        helpResults.style.display="none";

        helpHome.style.display="block";

    });

}