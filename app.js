
let y = 10; let r = 200; g = 180; b = 0;
let ned = true;
let rystet = 0;
let flyttet = 0;
let pos = 150
let pos2 = 275
let ko = true
let kat = false
let lam = true
let gris = false
let circle = true
let firkant = false
let trekant = false
''

function setup() {
    canvas = createCanvas(300, 550, 'beholder');
    textSize(24);
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
    background(r, g, b);
    strokeWeight(10);
    if (firkant === false && trekant === false && circle === true){
        ellipse(pos, pos2, 50);
    }
 
    else if (firkant === true && trekant === false && circle === false){
        rect(pos, pos2, 50, 50);
    }

    else if(firkant === false && trekant === true && circle === false){
        ellipse(pos, pos2, 300)
    }

    if(accelerationY > 70){
        firkant = true
        circle = false
        trekant = false
    }

    if(accelerationX > 100){
        firkant = false
        circle = false
        trekant = true
    }

    if(accelerationY < 1 && accelerationX < 1){
        circle = true
        firkant = false
        trekant = false
    }


    if (ned)
        y++;
    else
        y--;
    if (y >= height || y <= 0)
        ned = !ned;
    if (accelerationX > 70) {
        r = random(0, 256);
        g = random(0, 256);
        b = random(0, 256);
        if(rystet%2 == 0)
        ned = !ned;
        rystet++;
    }


 
text('rystet: ' + str(rystet), 50, height-100);
text('flyttet: ' + str(flyttet),50, height-50);
}

function deviceMoved(){
    flyttet++;
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
