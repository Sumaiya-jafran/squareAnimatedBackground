const colors = [
    '#DFFF00',
    '#FFBF00',
    '#FF7F50',
    '#6495ED',
    '#40E0D0',
    '#00FF00'
]
function createSquare(){
    const section = document.querySelector('section');
    const square = document.createElement('span');

    var size = Math.random() * 50;
    
  //  section.appendChild(square);
    square.style.width= 20 + size + 'px';
    square.style.height = 20 + size + 'px';

    square.style.top = Math.random() * innerHeight + 'px';
    square.style.left = Math.random() * innerWidth + 'px';
    
    const bg = colors[Math.floor(Math.random() * colors.length)];
    square.style.background = bg;
    
    section.appendChild(square);
    
    setTimeout(() =>{
        square.remove()

    },5000)

}
setInterval(createSquare , 150)