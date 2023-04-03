const form = document.getElementById('proposalForm');
    const preview = document.getElementById('preview');

    form.addEventListener('input', () => {
      const name = document.getElementById('name').value;
      const date = document.getElementById('date').value;
      const company = document.getElementById('company').value;
      const logo = document.getElementById('logo').value;
      const values = document.getElementById('values').value;
      const services = document.getElementById('services').value;
      const scope = document.getElementById('scope').value;
      const testimonials = document.getElementById('testimonials').value;

<<<<<<< HEAD
function updatePreview() {
  document.getElementById("proposal-type").textContent =
    name || "Estratégia de Marketing";
  document.getElementById("client-name").textContent =
    company || "Residencial Monte Verde";
  document.getElementById("proposal-date").textContent = date
    ? formatDate(date)
    : "24 · 03 · 2023";

    titlesScope[titlesScope.length-1].innerText = scope || "Estratégia de Marketing";

    scopeDetails[scopeDetails.length-1].innerText = scopeD || `Criação da pagina, nome, biografia, destaques e seguidores locais Storyes ilimitados de acordo com o material enviado 8 Postagens Mensais, incluindo reels Storyes ilimitados de acordo com o material enviado`;


  titlesValue[titlesValue.length-1].innerText =
    valuesN || "Criação e Gestão da Rede Social por 6 meses";

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

function addMoreValue() {
  
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
  newScopeDetails.setAttribute("class", "p-longText scope-descript checkable");

  topCheck = newScopeDetails. getBoundingClientRect().top;

  emmet.appendChild(newScopeDetails);
  
  newScopeTitle.innerText = "Funcionou";
  newScopeDetails.innerText = "Funcionou";
  
  currentCheck.style.top = `${topCheck}px`;
  newScopeTitle.style.top = `${topMarginS}px`;
  newScopeDetails.style.top = `${topMarginS}px`;

}

function tradeValues(tag){
  if(tag.value == "Clean"){
  imageTrade.src = "/src/img/Preview6IMG.jpg";
  }else{
    imageTrade.src = "/src/img/Preview4IMG.jpg";
  }
}
=======
      preview.innerHTML = `
        <div class="header">
          <h2>${company}</h2>
          <img src="${logo}" alt="${company} logo" class="logo" style="" />
        </div>
        <p>Nome: ${name}</p>
        <p>Data: ${date}</p>
        <p>Valores: ${values}</p>
        <h3>Serviços:</h3>
        <p>${services}</p>
        <h3>Escopo:</h3>
        <p>${scope}</p>
        <h3>Depoimentos:</h3>
        <p>${testimonials}</p>
      `;
    });
>>>>>>> parent of c316f43 (Update)
