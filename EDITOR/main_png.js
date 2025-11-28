const insertBtn = document.getElementById('insert-btn');
const imgInput = document.getElementById('img-input');
const widthInput = document.getElementById('width-input');
const heightInput = document.getElementById('height-input');
const imagesContainer = document.getElementById('images-container');

let imagesCount = 0;
let isInsertClicked = false;
let isImageInserted = false;




function insertImage() {

if (!isInsertClicked) {
    isInsertClicked = true;
    alert('insira a imagem');
    return;
    }else{
    alert('imagem inserida');  
  }
  const file = imgInput.files[0];
  const reader = new FileReader();
  const keepProportions = document.getElementById('keep-proportions').checked;




  reader.addEventListener('load', () => {
    const img = new Image();
    img.src = reader.result;
    if (keepProportions) {
      // Manter proporções
      img.addEventListener('load', () => {
        const width = widthInput.value;
        const height = heightInput.value;
        if (width && !height) {
          // Definir altura proporcionalmente à largura
          img.height = img.naturalHeight * (width / img.naturalWidth);
        } else if (!width && height) {
          // Definir largura proporcionalmente à altura
          img.width = img.naturalWidth * (height / img.naturalHeight);
        } else {
          // Definir largura e altura proporcionalmente
          const aspectRatio = img.naturalWidth / img.naturalHeight;
          const containerAspectRatio = width / height;
          if (aspectRatio > containerAspectRatio) {
            // Imagem é mais larga que o contêiner
            img.width = width;
            img.height = width / aspectRatio;
          } else {
            // Imagem é mais alta que o contêiner
            img.height = height;
            img.width = height * aspectRatio;
          }
        }
        imagesContainer.appendChild(img);
      });
    } else {
      // Não manter proporções
      img.width = widthInput.value;
      img.height = heightInput.value;
      imagesContainer.appendChild(img);
    }
  });

  if (file) {
    reader.readAsDataURL(file);
  }

  imagesCount++;
  isImageInserted = true;
  toggleInsertBtn();
}

function toggleInsertBtn() {
  insertBtn.style.display = imagesCount >= 68005 ? 'none' : 'block';
  
}

insertBtn.addEventListener('click', insertImage);
alert('Leitor de Imagens:');


const downloadBtn = document.getElementById('download-btn');
downloadBtn.addEventListener('click', () => {
  const images = document.getElementsByTagName('img');
  for (let i = 0; i < images.length; i++) {
    const link = document.createElement('a');
    link.href = images[i].src;
    link.download = `image${i}.png`;
    link.click();
  }
});
