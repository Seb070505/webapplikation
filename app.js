
let pos = 150
let pos2 = 275
let ko = true
let kat = false
let lam = true
let gris = false
let circle = true
let firkant = false
let trekant = false
let løbet = 0;
let hoppet = 0;
let stille = 0;
let bagel;
let donut;
let dorito;


function preload(){
bagel = loadImage('assets/Bagel.png');
donut = loadImage('assets/Donut.png');
dorito = loadImage('assets/dorito.png')
}


function setup() {
    canvas = createCanvas(300, 550, 'beholder');
    textSize(10);
    background(255, 255, 255);
    imageMode(CENTER);
    // giver canvas border på 2 pixel, 
    // og sørger derefter for at kanten tælles med i width
    canvas.elt.style.border = '5px solid black';
    canvas.elt.style.boxSizing = 'border-box';
    canvas.elt.style.borderRadius = '20px';

    canvas.parent('#beholder');
    // gør canvas-elementet responsivt til skærmbredden
    canvas.elt.style.width = '100%';
    canvas.elt.style.height = '100%';

    //bemærk at noden skal pakkes ud via .elt
    const parentDiv = select('#beholder').elt;
    const p = select('#test1').elt;
    // indsæt canvas i ny position i rækkefølgen af elementer i div'en beholder
    parentDiv.insertBefore(canvas.elt, p);
}

function draw() {
    background(255,255,255)
    strokeWeight(5);
    
    if (firkant === false && trekant === false && circle === true){
       // ellipse(pos, pos2, 50);
        image(bagel,pos,pos2,50,50)
    }
 
    else if (firkant === true && trekant === false && circle === false){
       // rect(pos, pos2, 50, 50);
       image(donut,pos,pos2,100,100)
    }

    else if(firkant === false && trekant === true && circle === false){
        //ellipse(pos, pos2, 300)
        image(dorito,pos,pos2,300,300)
    }

    if(accelerationY > 70){
        firkant = true
        circle = false
        trekant = false
        hoppet++;
    }

    if(accelerationX > 100){
        firkant = false
        circle = false
        trekant = true
        løbet++;
    }

    if(accelerationX === 0 && accelerationY === 0){
        firkant = false
        circle = true
        trekant = false 
        stille++;
    }

text('Hoppet: ' + str(hoppet), 5, height-100);
text('Løbet: ' + str(løbet),5, height-50);
text('Bevæg dig tyksak: ' + str(stille),5,height-150)
}

function deviceMoved(){
    if(ko == true){
        pos++;
      }
    
    if(kat == true){
        pos--;
    }
    
    if(pos > 300){
        kat = true
        ko = false
    }
    
    if(pos < 0){
        ko = true
        kat = false
    }
    if(lam == true){
        pos2++;
      }
    
    if(gris == true){
        pos2--;
    }
    
    if(pos2 > 550){
        gris = true
        lam = false
    }
    
    if(pos2 < 0){
        lam = true
        gris = false
    }


}
