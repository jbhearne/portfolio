const growKC = document.getElementById('grow_KC');
const kc = document.getElementById('kc');

growKC.addEventListener('mouseover', event => {
    
    event.preventDefault();
    
    
    const compStyleKC = getComputedStyle(kc) //needed to get actual CSS values
    //let canc = event.cancelable; // used for preventDefault() test. not really sure what I am doing here.
    let hspace = compStyleKC.height; //referenced actual hight in px string value
    
    
    //console.log('woof' + hspace); //tests value of height from computed style
    //console.log(hspace.length);
    let pixel = '';
    for (let j = 0; j < hspace.length - 2; j++) {
        pixel = pixel + hspace[j] //removes px from string
        }
    //console.log(pixel) //checks to see if px has been removed
    let i = Number(pixel)
    
    const timeLoop = () => {
        setTimeout(() => {
            //console.log('check' + i + hspace) //test loop values
            kc.style.height = i + 'px';
            i -= 1;
            if (i > -1) {
                timeLoop() //iterative function based loop to get setTimeout to run consectutively for each iteration instead of concurrently as it would in a for loop.
            }

        }, 10);
    } 
    timeLoop()

    
})