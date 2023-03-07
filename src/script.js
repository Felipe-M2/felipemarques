const menuItems = document.querySelectorAll('.menuTopo>li>a[href^="#"]');

function getScrollTopByHref(element) {
	const id = element.getAttribute('href');
	return document.querySelector(id).offsetTop;
}

function scrollToPosition(to) {
  smoothScrollTo(0, to);
}

function scrollToIdOnClick(event) {
	event.preventDefault();
	const to = getScrollTopByHref(event.currentTarget)- 80;
	scrollToPosition(to);
}

menuItems.forEach(item => {
	item.addEventListener('click', scrollToIdOnClick);
});

function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== 'undefined' ? duration : 600;

  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
    return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60);
};


// ORCAMENTO
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