let btnOrcamentoForm = document.querySelector(".btnOrcamentoForm");

let faseForm = 1;

let formFaseFunction = ()=>{
    switch(faseForm){
        case 1:
            document.querySelector(".nameForm").style.display = "none";
            document.querySelector(".projetoForm").style.display = "flex";
            document.querySelector(".fase2").style.opacity = "1";
            document.querySelector(".fase1").style.opacity = "0.5";
            faseForm = faseForm + 1;

            break;

        case 2:
            document.querySelector(".projetoForm").style.display = "none";
            document.querySelector(".contatoForm").style.display = "flex";
            document.querySelector(".fase3").style.opacity = "1";
            document.querySelector(".fase2").style.opacity = "0.5";

            faseForm = faseForm + 1;
            break;

        case 3:
            document.querySelector(".contatoForm").style.display = "none";
            document.querySelector(".emailForm").style.display = "flex";
            document.querySelector(".fase4").style.opacity = "1";
            document.querySelector(".fase3").style.opacity = "0.5";

            faseForm = faseForm + 1;
            break;

        case 4:
            document.querySelector(".emailForm").style.display = "none";
            document.querySelector(".infoClient").style.display = "flex";
            document.querySelector(".fase5").style.opacity = "1";
            document.querySelector(".fase4").style.opacity = "0.5";

            faseForm = faseForm + 1;
            break;

        case 5:
            document.querySelector(".infoClient").style.display = "none";
            document.querySelector(".fase5").style.opacity = "0.5";
            break;
    }
}

btnOrcamentoForm.addEventListener("click", formFaseFunction);