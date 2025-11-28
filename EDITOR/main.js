const insertBtn = document.getElementById('insert-btn');
const imgInput = document.getElementById('img-input');
const widthInput = document.getElementById('width-input');
const heightInput = document.getElementById('height-input');
const imagesContainer = document.getElementById('images-container');

let imagesCount = 0;




function insertImage() {
  const file = imgInput.files[0];
  const reader = new FileReader();

  reader.addEventListener('load', () => {
    const img = new Image();
    img.src = reader.result;
    img.width = widthInput.value;
    img.height = heightInput.value;
    imagesContainer.appendChild(img);
  });

  if (file) {
    reader.readAsDataURL(file);
  }

  imagesCount++;
  toggleInsertBtn();
}

function toggleInsertBtn() {
  insertBtn.style.display = imagesCount >= 68001 ? 'none' : 'block';
}

insertBtn.addEventListener('click', insertImage);


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
