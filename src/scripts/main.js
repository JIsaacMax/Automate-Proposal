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