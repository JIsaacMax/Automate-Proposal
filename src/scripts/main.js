function formatDate(dateString) {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day} · ${month} · ${year}`;
}

function formatCurrency(value) {
  return `R$${parseFloat(value).toFixed(2).replace(".", ",")}`;
}

function updatePreview() {
  const name = document.getElementById("name").value;
  const company = document.getElementById("company").value;
  const date = document.getElementById("date").value;
  const scope = document.getElementById("scope").value;
  const scopeD = document.getElementById("scope-details").value;
  const valuesN = document.getElementById("values-name").value;
  const values = document.getElementById("values").value;

  document.getElementById("proposal-type").textContent =
    name || "Estratégia de Marketing";
  document.getElementById("client-name").textContent =
    company || "Residencial Monte Verde";
  document.getElementById("proposal-date").textContent = date
    ? formatDate(date)
    : "24 · 03 · 2023";
  
    let titlesScope = document.querySelectorAll("h1.scope-title");
    titlesScope[titlesScope.length-1].innerText = scope || "Estratégia de Marketing";


    let scopeDetails = document.querySelectorAll(".scope-descript");

    scopeDetails[scopeDetails.length-1].innerText = scopeD || `Criação da pagina, nome, biografia, destaques e seguidores locais Storyes ilimitados de acordo com o material enviado 8 Postagens Mensais, incluindo reels Storyes ilimitados de acordo com o material enviado`;


  
    
  let titlesValue =   document.querySelectorAll("h1.Cvalues-title");

  titlesValue[titlesValue.length-1].innerText =
    valuesN || "Criação e Gestão da Rede Social por 6 meses";
  let valuesDetails = document.querySelectorAll(".Cvalues-details");
  valuesDetails[valuesDetails.length-1].innerText = values
    ? formatCurrency(values)
    : "R$3.900,00";
}

// Adiciona event listeners para atualizar a visualização quando os dados do formulário forem alterados
document.getElementById("name").addEventListener("input", updatePreview);
document.getElementById("company").addEventListener("input", updatePreview);
document.getElementById("date").addEventListener("input", updatePreview);
document.getElementById("scope").addEventListener("input", updatePreview);
document
  .getElementById("scope-details")
  .addEventListener("input", updatePreview);
document.getElementById("values-name").addEventListener("input", updatePreview);
document.getElementById("values").addEventListener("input", updatePreview);

// Previne o comportamento padrão do botão submit e chama a função generatePDF
document.getElementById("proposalForm").addEventListener("submit", (e) => {
  e.preventDefault();
  generatePDF();
});

let topMargin = 44.5;
function addMoreValue() {
  //44.5 valor base do topMargin
  
  let newValuesTitle = document.createElement("h1");
  newValuesTitle.setAttribute("class", "Cvalues-title");
  
  let newValuesDetails = document.createElement("p");
  newValuesDetails.setAttribute("class", "Cvalues-details");
  
  let emmet = document.getElementById("emmetValues");
  
  emmet.appendChild(newValuesTitle);
  emmet.appendChild(newValuesDetails);
  
  newValuesTitle.innerText = "Funcionou";
  newValuesDetails.innerText = "Funcionou";
  
  newValuesTitle.style.top = `${topMargin}px`;
  newValuesDetails.style.top = `${topMargin}px`;

  topMargin += 7.25;
}

let topMarginS = 44.5;
function addMoreScope(){
  let newScopeTitle = document.createElement("h1");
  newScopeTitle.setAttribute("class", "p-mainText scope-title");
  let newScopeDetails = document.createElement("p");
  newScopeDetails.setAttribute("class", "p-longText scope-descript");


  let emmet = document.getElementById("emmetScope");
  let imgCheck = document.createElement("img");

  imgCheck.setAttribute("src", "/src/img/check.png");
  imgCheck.setAttribute("class", "scope-check");

  // emmet.appendChild(document.createElement("img", {
  //   src: "/src/img/check.png",
  //   class: "scope-check"
  // }));
  emmet.appendChild(imgCheck);
  emmet.appendChild(newScopeDetails);


  newScopeTitle.innerText = "Funcionou";
  newScopeDetails.innerText = "Funcionou";

  newScopeTitle.style.top = `${topMarginS}px`;
  newScopeDetails.style.top = `${topMarginS}px`;


  // topMarginS += 3.75;
}