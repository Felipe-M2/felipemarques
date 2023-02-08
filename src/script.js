let btnOrcamentoForm = document.querySelector(".btnOrcamentoForm");
let labelForm = document.querySelector(".labelForm");

let faseForm = 1;

nomeCliente = "";

let formFaseFunction = ()=>{
    switch(faseForm){
        case 1:
            let nomeForm = document.querySelector("#nomeOrcamento").value;
            document.querySelector(".nameForm").style.display = "none";
            document.querySelector(".projetoForm").style.display = "flex";
            document.querySelector(".fase2").style.opacity = "1";
            document.querySelector(".fase1").style.opacity = "0.5";
            nomeCliente = nomeForm.value;
            labelForm.innerHTML = `Olá ${nomeForm}, Selecione qual tipo de projeto você quer:`;
            faseForm = faseForm + 1;

            break;

        case 2:
            document.querySelector(".projetoForm").style.display = "none";
            document.querySelector(".contatoForm").style.display = "flex";
            document.querySelector(".fase3").style.opacity = "1";
            document.querySelector(".fase2").style.opacity = "0.5";
            labelForm.innerHTML = "Otimo, digita o seu telefone:";

            faseForm = faseForm + 1;
            break;

        case 3:
            document.querySelector(".contatoForm").style.display = "none";
            document.querySelector(".emailForm").style.display = "flex";
            document.querySelector(".fase4").style.opacity = "1";
            document.querySelector(".fase3").style.opacity = "0.5";
            labelForm.innerHTML = "Qual o seu email?";

            faseForm = faseForm + 1;
            break;

        case 4:
            document.querySelector(".emailForm").style.display = "none";
            document.querySelector(".infoClient").style.display = "flex";
            document.querySelector(".fase5").style.opacity = "1";
            document.querySelector(".fase4").style.opacity = "0.5";
            labelForm.innerHTML = "Me explica como você quer o seu projeto:";

            faseForm = faseForm + 1;
            break;

        case 5:
            document.querySelector(".infoClient").style.display = "none";
            document.querySelector(".fase5").style.opacity = "0.5";

            labelForm.innerHTML = "Pronto só aguardar nosso contato!";
            break;
    }
}

btnOrcamentoForm.addEventListener("click", formFaseFunction);