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

//MOVIMENTO PARA A TIMELINE
const tabStatus = document.getElementById("tab-status");
const tabTimeline = document.getElementById("tab-timeline");

const statusContent = document.getElementById("status-content");
const timelineContent = document.getElementById("timeline-content");

if (tabStatus && tabTimeline) {

    tabStatus.addEventListener("click", () => {

        tabStatus.classList.add("active");
        tabTimeline.classList.remove("active");

        statusContent.style.display = "block";
        timelineContent.style.display = "none";

    });

    tabTimeline.addEventListener("click", () => {

        tabTimeline.classList.add("active");
        tabStatus.classList.remove("active");

        statusContent.style.display = "none";
        timelineContent.style.display = "block";

    });

}

//CHAT IA
const chat = document.getElementById("chat");
const input = document.getElementById("messageInput");
const send = document.getElementById("sendButton");

if (send) {

    send.addEventListener("click", sendMessage);

    input.addEventListener("keypress", e => {

        if(e.key === "Enter"){

            sendMessage();

        }

    });

}

function sendMessage(){

    const text = input.value.trim();

    if(text === "") return;

    chat.innerHTML += `

        <div class="message user">

            <div class="bubble">

                ${text}

            </div>

        </div>

    `;

    input.value="";

    chat.scrollTop = chat.scrollHeight;

    chat.innerHTML += `

        <div class="message ai" id="typingMessage">

            <div class="bubble">

                <span class="sender">

                    🤖 Assistente MP Acolhe

                </span>

                <div class="typing">

                    <span></span>

                    <span></span>

                    <span></span>

                </div>

            </div>

        </div>

    `;

    chat.scrollTop = chat.scrollHeight;

    setTimeout(showResponse,1200);

}

function showResponse(){

    document.getElementById("typingMessage").remove();

    chat.innerHTML += `

        <div class="message ai">

            <div class="bubble">

                <span class="sender">

                    🤖 Assistente MP Acolhe

                </span>

                <p>

                    Entendi sua mensagem.

                </p>

                <p>

                    Identifiquei o assunto:

                </p>

                <p>

                    ✅ <strong>Nova testemunha</strong>

                </p>

                <p>

                    Essa informação será organizada e encaminhada automaticamente para a Promotoria.

                </p>

                <button class="confirm-button">

                    Confirmar envio

                </button>

            </div>

        </div>

    `;

    chat.scrollTop = chat.scrollHeight;

    const confirmButton = chat.querySelector(".confirm-button:last-of-type");

    confirmButton.addEventListener("click", () => {

        confirmButton.disabled = true;

        confirmButton.innerHTML = `
            <i class="fa-solid fa-spinner fa-spin"></i>
            Encaminhando...
        `;

        setTimeout(() => {

            confirmButton.outerHTML = `
                <div class="success-message">

                    <i class="fa-solid fa-circle-check"></i>

                    Informação encaminhada com sucesso.

                </div>
            `;

            addFinalMessage();

        }, 1200);

    });

}

function addFinalMessage(){

    chat.innerHTML += `

        <div class="message ai">

            <div class="bubble">

                <span class="sender">

                    🤖 Assistente MP Acolhe

                </span>

                <p>

                    Sua informação foi encaminhada à Promotoria.

                </p>

                <p>

                    Caso seja necessário, a equipe poderá entrar em contato com você para solicitar mais detalhes.

                </p>

                <p>

                    Obrigado pela sua colaboração. 💙

                </p>

            </div>

        </div>

    `;

    chat.scrollTop = chat.scrollHeight;

}


//botão "+" do chat
const attachButton = document.getElementById("attachButton");
const bottomSheet = document.getElementById("bottomSheet");
const overlay = document.getElementById("overlay");
const closeSheet = document.getElementById("closeSheet");

if (attachButton) {

    attachButton.addEventListener("click", () => {

        bottomSheet.classList.add("show");
        overlay.classList.add("show");

    });

    overlay.addEventListener("click", () => {

        bottomSheet.classList.remove("show");
        overlay.classList.remove("show");

    });

    closeSheet.addEventListener("click", () => {

        bottomSheet.classList.remove("show");
        overlay.classList.remove("show");

    });

}


// LOGIN
// LOGIN

const govButton = document.getElementById("govButton");
const stepGov = document.getElementById("stepGov");
const stepLogin = document.getElementById("stepLogin");

if(govButton){

    govButton.addEventListener("click",()=>{

        stepGov.classList.remove("active");

        stepLogin.classList.add("active");

    });

}



const cpfInput=document.getElementById("cpf");

if(cpfInput){

    cpfInput.addEventListener("input",function(){

        let value=this.value.replace(/\D/g,"");

        value=value.replace(/^(\d{3})(\d)/,"$1.$2");

        value=value.replace(/^(\d{3})\.(\d{3})(\d)/,"$1.$2.$3");

        value=value.replace(/\.(\d{3})(\d)/,".$1-$2");

        this.value=value;

    });

}



const togglePassword=document.getElementById("togglePassword");
const password=document.getElementById("password");

if(togglePassword){

    togglePassword.addEventListener("click",()=>{

        if(password.type==="password"){

            password.type="text";

            togglePassword.innerHTML='<i class="fa-solid fa-eye-slash"></i>';

        }else{

            password.type="password";

            togglePassword.innerHTML='<i class="fa-solid fa-eye"></i>';

        }

    });

}



const enterButton=document.getElementById("enterButton");
const loginStatus=document.getElementById("loginStatus");

if(enterButton){

    enterButton.addEventListener("click",()=>{

        loginStatus.innerHTML=`
            <i class="fa-solid fa-spinner fa-spin"></i>
            Verificando identidade...
        `;

        enterButton.disabled=true;

        setTimeout(()=>{

            loginStatus.innerHTML=`
                <i class="fa-solid fa-circle-check"></i>
                Identidade confirmada
            `;

            setTimeout(()=>{

                window.location.href="index.html";

            },1000);

        },1500);

    });

}