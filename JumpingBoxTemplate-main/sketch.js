var canvas;
var music;
var surface1, surface2, surface3, surface4;
var ball;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    surface1 = createSprite(0,580,360,30);
    surface1.shapeColor = "blue";

    surface2 = createSprite(295,580,200,30);
    surface2.shapeColor = "orange";

    surface3 = createSprite(515,580,200,30);
    surface3.shapeColor = "red";

    surface4 = createSprite(740,580,220,30);
    surface4.shapeColor = "green";

    ball = createSprite(random(20,750),100,40,40);
    ball.shapeColor = "white";
    ball.velocityX = 6;
    ball.velocityY = 6;

    edges = createEdgeSprites()


    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));

    ball.bounceOff(edges);

    if(surface1.isTouching(ball) && ball.bounceOff(surface1)){
        ball.shapeColor = "blue";
    }

    
    if(surface2.isTouching(ball) && ball.bounceOff(surface2)){
        ball.shapeColor = "orange";
    }

    
    if(surface3.isTouching(ball) && ball.bounceOff(surface3)){
        ball.shapeColor = "red";
    }

    
    if(surface4.isTouching(ball) && ball.bounceOff(surface4)){
        ball.shapeColor = "green";
    }



    drawSprites();

}
