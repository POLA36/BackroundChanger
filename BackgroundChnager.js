const imageBackground = document.querySelector('.image-background');
const image = imageBackground.querySelector('img');

const colorThief = new ColorThief();

// Make sure the image is finished loading
if (image.complete) {
  setDominantColor();
} else {
  image.addEventListener('load', setDominantColor);
}

function setDominantColor() {
  // Extract the dominant color
  const dominantColor = colorThief.getColor(image);

  // Convert the RGB values to a CSS color string
  const bgColor = `rgb(${dominantColor[0]}, ${dominantColor[1]}, ${dominantColor[2]})`;

  // Set the background color of the .image-background div
  imageBackground.style.backgroundColor = bgColor;
}
    