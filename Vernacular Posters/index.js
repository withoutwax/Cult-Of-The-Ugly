let hoverElements = [document.getElementById('bag'),document.getElementById('basketball'),document.getElementById('bed'),document.getElementById('book'), document.getElementById('car-seat'), document.getElementById('computers'), document.getElementById('dvd'), document.getElementById('hoop'), document.getElementById('mannequin'),
document.getElementById('sneakers'),
document.getElementById('train'),
document.getElementById('vase'),
document.getElementById('will'),
]

for (let i = 0; i < hoverElements.length; i++) {
  let element = hoverElements[i];
  let posX = Math.floor(Math.random() * document.body.clientWidth);
  let posY = Math.floor(Math.random() * document.body.clientHeight);

  console.log(posX);
  console.log(posY);

  element.style.left = posX + 'px';
  element.style.top = posY + 'px';
  element.style.height = '100%';
}
