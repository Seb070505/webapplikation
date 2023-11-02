
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
    textSize(4);
    background(255, 255, 255);
    imageMode(CENTER);
    canvas.elt.style.border = '5px solid black';
    canvas.elt.style.boxSizing = 'border-box';
    canvas.elt.style.borderRadius = '20px';

    canvas.parent('#beholder');
    canvas.elt.style.width = '100%';
    canvas.elt.style.height = '100%';

    const parentDiv = select('#beholder').elt;
    const p = select('#test1').elt;
    parentDiv.insertBefore(canvas.elt, p);
}


function draw() {
    background(255,255,255)
    strokeWeight(5);
    
    if (firkant === false && trekant === false && circle === true){
        image(bagel,pos,pos2,100,100)
        if(stille < 1000){
        text('Ændre på bagelen!!',5,height-100)
        }
        else if (stille > 1000 && stille < 10000){
        text('Bevæg dig for at opnå en belønning!!',5,height-100)
        }
        else if (stille > 10000){
        text('Ryk dig forhelvede',5,height-100)
        }
    }
 
    else if (firkant === true && trekant === false && circle === false){
       image(donut,pos,pos2,100,100)
       if(hoppet < 1000){
       text('Få scoren op på 1000 for at opnå en belønning: ' + str(hoppet), 5, height-100);
       }
       else if(hoppet > 1000){
        text('Tag en donut! :D', 5, height-100);
       }
    }   
    

    else if(firkant === false && trekant === true && circle === false){
        image(dorito,pos,pos2,300,300)
        if(løbet < 500){
        text('Få scoren op på 500 for at tage en belønning: ' + str(løbet),5, height-100);
        }
        else if(løbet > 500){
        text('Tag en håndfuld doritos! :D' + str(løbet),5, height-100);
        }
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
