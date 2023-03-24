document.getElementById('applyStyles').addEventListener('click', () => {
    const selectedElement = document.getElementById('element').value;
    let targetElement;

    switch (selectedElement) {
      case 'header':
        targetElement = preview.querySelector('.header');
        break;
      case 'logo':
        targetElement = preview.querySelector('.logo');
        break;
      default:
        targetElement = preview;
    }

    const width = document.getElementById('width').value;
    const height = document.getElementById('height').value;
    const fontSize = document.getElementById('fontSize').value;
    const textColor = document.getElementById('textColor').value;
    const bgColor = document.getElementById('bgColor').value;

    targetElement.style.width = width ? `${width}px` : '';
    targetElement.style.height = height ? `${height}px` : '';
    targetElement.style.fontSize = fontSize ? `${fontSize}px` : '';
    targetElement.style.color = textColor;
    targetElement.style.backgroundColor = bgColor;
  });

  const draggableElements = document.querySelectorAll('.header, p');
    let draggedElement = null;

    for (const element of draggableElements) {
      element.setAttribute('draggable', 'true');
      element.addEventListener('dragstart', (e) => {
        draggedElement = e.target;
        e.dataTransfer.setData('text/plain', '');
      });
    }

    preview.addEventListener('dragover', (e) => {
      e.preventDefault();
      const clientRect = preview.getBoundingClientRect();
      const x = e.clientX - clientRect.left;
      const y = e.clientY - clientRect.top;
      draggedElement.style.left = `${x - draggedElement.offsetWidth / 2}px`;
      draggedElement.style.top = `${y - draggedElement.offsetHeight / 2}px`;
    });

    preview.addEventListener('drop', (e) => {
      e.preventDefault();
      draggedElement = null;
    });

    