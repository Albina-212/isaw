const images = document.querySelectorAll('img');

images.forEach((image) => {
  image.addEventListener('mouseover', () => {
    image.style.transform = 'scale(1.3)';
  });

  image.addEventListener('mouseout', () => {
    image.style.transform = 'scale(1)';
  });
});

