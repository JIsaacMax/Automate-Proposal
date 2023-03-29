// async function generatePDF() {
//     const preview = document.getElementById("preview");
  
//     // Renderiza o conteúdo do elemento "preview" como um canvas
//     const canvas = await html2canvas(preview, {
//       scale: 2, // Aumente o valor de "scale" para melhorar a qualidade
//       useCORS: true, // Adicione esta opção para evitar problemas com CORS
//     });
  
//     // Converte o canvas em uma imagem
//     const imgData = canvas.toDataURL("image/png");
  
//     // Cria uma instância do jsPDF
//     const pdf = new jsPDF("p", "mm", "a4");
  
//     // Adiciona a imagem ao PDF
//     pdf.addImage(imgData, "PNG", 0, 0, 210, 297);
  
//     // Salva o arquivo PDF
//     pdf.save("preview.pdf");
//   }

  
  var jsPDF = window.jspdf.jsPDF;

function generatePDF() {
    preview.style.transform = `scale(1)`;
    preview.style.boxShadow = ` 0px 0px 0px 0px rgba(0,0,0,0)`
    // Define a altura do PDF como a altura da janela do navegador
    const pdfHeight = preview.offsetHeight;

    // Captura o elemento "preview" em uma imagem com html2canvas
    html2canvas(document.getElementById("preview")).then(function (canvas) {
        var imgData = canvas.toDataURL("image/png");

        // Calcula a largura do PDF proporcional à altura e largura da imagem
        var pdfWidth = (pdfHeight * canvas.width) / canvas.height;

        // Cria um novo objeto jsPDF com a largura e altura calculadas
        var doc = new jsPDF("p", "px", [pdfWidth, pdfHeight]);

        // Adiciona a imagem capturada no PDF e salva o arquivo
        doc.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        
        let archiveName = String(pNome.innerText).replaceAll(" ","-")
        doc.save(`CARTÃO-VIRTUAL-${archiveName}.pdf`);
    });
}