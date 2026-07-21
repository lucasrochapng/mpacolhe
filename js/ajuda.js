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

                    nome:"CREAS Paranaguá",

                    imagem:"images/creas.jpg",

                    endereco:"Rua Vieira dos Santos - Paranaguá, PR, 83203-050",

                    telefone:"(41) 3420-2928",

                    horario:"Segunda a Sexta • 08h às 18h",

                    mapa:"https://maps.google.com"

                },

                {

                    nome:"CAPS Paranaguá",

                    imagem:"images/caps.jpg",

                    endereco:"Av. Belmiro Sebastião Marques, 1045 - Parque São João, Paranaguá - PR, 83215-090",

                    telefone:"(41) 3420-2972",

                    horario:"Segunda a Sexta • 07h às 18h",

                    mapa:"https://maps.google.com"

                }

            ]

        },

        juridico:{

            titulo:"Orientação Jurídica",

            locais:[

                {

                    nome:"Fórum Criminal Paranaguá",

                    imagem:"images/forum.jpg",

                    endereco:"Av. Gabriel de Lara, 771 - João Gualberto, Paranaguá - PR, 83203-550",

                    telefone:"(41) 3420-5000",

                    horario:"Segunda a Sexta • 12h às 18h",

                    mapa:"https://maps.google.com"

                },

                {

                    nome:"Ministério Público do Estado do Paraná",

                    imagem:"images/ministerio.jpg",

                    endereco:"Alameda Cel. Elizio Pereira, 722 - Estradinha, Paranaguá - PR, 83206-000",

                    telefone:"(41) 3424-0566",

                    horario:"Segunda a Sexta • 08h às 18h",

                    mapa:"https://maps.google.com"

                },

                {

                    nome:"Defensoria Pública de Paranaguá",

                    imagem:"images/defensoria.jpg",

                    endereco:"R. Baronesa do Cerro Azul, 974-1014 - Campo Grande, Paranaguá - PR, 83203-420",

                    telefone:"(41) 3000-0000",

                    horario:"Segunda a Sexta • 13h às 18h",

                    mapa:"https://maps.google.com"

                },

                {

                    nome:"Delegacia Cidadã de Paranaguá",

                    imagem:"images/delegacia.jpg",

                    endereco:"R. Domingos Peneda, 2850 - Vila Itiberê, Paranaguá - PR, 83209-235",

                    telefone:"(41) 3420-3600",

                    horario:"Segunda a Sexta • 09h às 18h",

                    mapa:"https://maps.google.com"

                }

            ]

        },

        criancas:{

            titulo:"Apoio às Crianças",

            locais:[

                {

                    nome:"Secretaria Municipal de Educação",

                    imagem:"images/educacao.jpg",

                    endereco:"João Gualberto, Paranaguá - PR, 83203-600",

                    telefone:"(41) 3271-1770",

                    horario:"Segunda a Segunda • 08h às 18h",

                    mapa:"https://maps.google.com"

                },

                {

                    nome:"Conselho Tutelar",

                    imagem:"images/conselho.jpg",

                    endereco:"R. Júlia da Costa, 420 - Centro Histórico, Paranaguá - PR, 83203-060",

                    telefone:"(41) 3721-1760",

                    horario:"Segunda a Segunda • 08h às 17h",

                    mapa:"https://maps.google.com"

                }

            ]

        },

        social:{

            titulo:"Assistência Social",

            locais:[

                {

                    nome:"Secretaria Municipal de Assistência Social",

                    imagem:"images/assistencia.jpg",

                    endereco:"R. Baronesa do Cerro Azul, 2382 - Palmital, Paranaguá - PR, 83203-420",

                    telefone:"(41) 3420-2897",

                    horario:"Segunda a Sexta • 08h às 17h",

                    mapa:"https://maps.google.com"

                },

                {

                    nome:"Hospital Regional do Litoral do Paraná",

                    imagem:"images/hospital.jpg",

                    endereco:"R. Pres. Getúlio Vargas, 222 - Palmital, Paranaguá - PR, 83206-020",

                    telefone:"(41) 3420-7400",

                    horario:"24 horas",

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