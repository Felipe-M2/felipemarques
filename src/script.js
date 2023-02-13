let btnOrcamentoForm = document.querySelector(".btnOrcamentoForm");
let labelForm = document.querySelector(".labelForm");

let faseForm = 1;

let dadosClient = {
    nomeCliente: "",
    projetoClient: "",
    contatoClient: "",
    emailClient: "",
    infoTextoClient: "",
};

let formFaseFunction = ()=>{

    switch(faseForm){

        case 1:
            let nomeForm = document.querySelector("#nomeOrcamento").value;
            
            if(nomeForm.length > 0){
                document.querySelector(".nameForm").style.display = "none";
                document.querySelector(".projetoForm").style.display = "flex";
                document.querySelector(".fase2").style.opacity = "1";
                document.querySelector(".fase1").style.opacity = "0.5";
                dadosClient.nomeCliente = nomeForm;
                labelForm.innerHTML = `Olá ${nomeForm}, Selecione qual tipo de projeto você quer:`;
                faseForm = faseForm + 1;
            }else{
                labelForm.innerHTML = "Preencha seu nome";
            }

            break;

        case 2:
            let selectProjeto = document.querySelector("#selectProjeto").value;

            if(selectProjeto != ""){
                document.querySelector(".projetoForm").style.display = "none";
                document.querySelector(".contatoForm").style.display = "flex";
                document.querySelector(".fase3").style.opacity = "1";
                document.querySelector(".fase2").style.opacity = "0.5";
                labelForm.innerHTML = "Otimo, digita o seu telefone:";
                dadosClient.projetoClient = selectProjeto;

                faseForm = faseForm + 1;
            }else{
                labelForm.innerHTML = "Selecione o projeto";
            }

            break;

        case 3:
            
            let contatoForm = document.querySelector("#contatoForm").value;

            if(contatoForm.length >= 10){
                document.querySelector(".contatoForm").style.display = "none";
                document.querySelector(".emailForm").style.display = "flex";
                document.querySelector(".fase4").style.opacity = "1";
                document.querySelector(".fase3").style.opacity = "0.5";
                labelForm.innerHTML = "Qual o seu email?";
                dadosClient.contatoClient = contatoForm;

                faseForm = faseForm + 1;
            }else{
                labelForm.innerHTML = "Digite um telefone valido!"
            }

            break;

        case 4:
            
            let emailForm = document.querySelector("#emailForm").value;

            if(emailForm.length > 0){
                document.querySelector(".emailForm").style.display = "none";
                document.querySelector(".infoClient").style.display = "flex";
                document.querySelector(".fase5").style.opacity = "1";
                document.querySelector(".fase4").style.opacity = "0.5";
                labelForm.innerHTML = "Me explica como você quer o seu projeto:";

                dadosClient.emailClient = emailForm;

                faseForm = faseForm + 1;
            }else{
                labelForm.innerHTML = "Digite um email valido!"
            }

            break;

        case 5:
            let infoClient = document.querySelector("#infoClient").value;
            
            document.querySelector(".infoClient").style.display = "none";
            document.querySelector(".fase5").style.opacity = "0.5";

            dadosClient.infoTextoClient = infoClient;

            labelForm.innerHTML = "Pronto só aguardar nosso contato!";
            break;

    }
}

btnOrcamentoForm.addEventListener("click", formFaseFunction);