/**Input Elements */
const V_I_type = document.getElementById("I_type")
const V_I_company = document.getElementById("I_company")
const V_I_date = document.getElementById("I_date")
const V_I_scope = document.getElementById("I_scope")
const V_I_scopeDetails = document.getElementById("I_scope-details")
const V_B_addScope = document.getElementById("B_add-scope");
const V_S_imageTrade = document.getElementById("I_type-values");
const V_I_valuesScope = document.getElementById("I_values-scope")
const V_I_values = document.getElementById("I_values");
const V_B_addValues = document.getElementById("B_add-values");
const V_B_generatePDF = document.getElementById("B_generate-PDF");


/**Preview Elements */
document.getElementById("proposal-type")
document.getElementById("client-name")
document.getElementById("proposal-date")
let titlesScope = document.querySelectorAll("h1.scope-title");
let scopeDetails = document.querySelectorAll(".scope-descript");
let titlesValue =   document.querySelectorAll("h1.Cvalues-title");
let valuesDetails = document.querySelectorAll(".Cvalues-details");

let emmet = document.getElementById("emmetScope");

/**Control Variables */
let topMargin = 44.5;