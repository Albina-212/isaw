(function() {
    const text1 = document.getElementById('text1');    
    const text2 = document.getElementById('text2');

  
    function podskazka(element, tooltipText) {
      const tooltip = document.createElement('div');
      tooltip.classList.add('tooltip');
      tooltip.innerHTML = tooltipText;
  
      document.body.appendChild(tooltip);
  
      const rect = element.getBoundingClientRect();
      tooltip.style.left = `${rect.left + rect.width / 5}px`;
      tooltip.style.top = `${rect.bottom + 35}px`;
  
  
      element.addEventListener('mouseover', () => {
        tooltip.classList.add('active');
      });
  
      element.addEventListener('mouseout', () => {
        tooltip.classList.remove('active');
      });
    }
  
    podskazka(text1, 'Подписывайтесь!!!');
    podskazka(text2, 'А сюда тем более подписывайтесь!!!');


    const element = document.getElementById("k1");

    let angle = 0;    
    const interval = setInterval(() => {
      angle += 1;
      element.style.transform = `rotate(${angle}deg)`;
    }, 10);

  })();


const elements = document.querySelectorAll(".nav_link");

elements.forEach((element) => {
  element.addEventListener("mouseover", () => {
    element.style.transform = "scale(1.3)";
  });

  element.addEventListener("mouseout", () => {
    element.style.transform = "scale(1)";
  });
});


const textElements = document.querySelectorAll('.dr-text');

textElements.forEach((element) => {
  element.addEventListener('mouseover', () => {
    let opacity = 0;

    const interval = setInterval(() => {
      if (opacity >= 1) {
        clearInterval(interval);
      } else {
        opacity += 0.01;
        element.style.backgroundColor = `rgba(176, 229, 63, ${opacity})`;
      }
    }, 10);
  });

  element.addEventListener('mouseout', () => {
    let opacity = 1;

    const interval = setInterval(() => {
      if (opacity <= 0) {
        clearInterval(interval);
      } else {
        opacity -= 0.01;
        element.style.backgroundColor = `rgba(176, 229, 63, ${opacity})`;
      }
    }, 10);
  });
});

const numberFrames = document.querySelectorAll('.advantage');

numberFrames.forEach((frame) => {
  frame.addEventListener('mouseover', () => {
    frame.classList.add('active');
  });

  frame.addEventListener('mouseout', () => {
    frame.classList.remove('active');
  });
});

  