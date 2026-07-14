// ===============================
// TESTEMUNHA
// ===============================

const witnessPhone = document.getElementById("witnessPhone");

if(witnessPhone){

    witnessPhone.addEventListener("input",function(){

        let value=this.value.replace(/\D/g,"");

        value=value.replace(/^(\d{2})(\d)/,"($1) $2");

        value=value.replace(/(\d{5})(\d)/,"$1-$2");

        this.value=value;

    });

}

document.querySelectorAll(".choice-group").forEach(group=>{

    const cards=group.querySelectorAll(".choice-card");

    cards.forEach(card=>{

        card.addEventListener("click",(e)=>{

            e.preventDefault();

            cards.forEach(c=>c.classList.remove("active"));

            card.classList.add("active");

        });

    });

});

const sendWitness=document.getElementById("sendWitness");
const witnessStatus=document.getElementById("witnessStatus");

if(sendWitness){

    sendWitness.addEventListener("click",()=>{

        sendWitness.disabled=true;

        sendWitness.innerHTML=`
            <i class="fa-solid fa-spinner fa-spin"></i>
            Encaminhando...
        `;

        setTimeout(()=>{

            sendWitness.innerHTML=`
                <i class="fa-solid fa-circle-check"></i>
                Encaminhado
            `;

            witnessStatus.innerHTML=`

                <div class="success-message">

                    <i class="fa-solid fa-circle-check"></i>

                    As informações foram encaminhadas para análise da Promotoria.

                </div>

            `;

        },1500);

    });

}