const button = document.querySelector('button');
const h1 = document.querySelector('h1');

button.addEventListener('click', function() {
    const newColor = makeRandomColor()    
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
})

const makeRandomColor = () => { 
    //remember: rgb is from 0 to 255
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// TODO: add CSS on h1, button and center everything
// TODO: add logic to make h1 white when the rgb is close to black (0,0,0)