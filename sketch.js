var canvas;
var music;
var block1,block2,block3,block4,ball;

function preload(){
   

}
function setup(){
    canvas = createCanvas(800,600);
    block1=createSprite(0,580,360,30);
    block1.shapeColor="blue";
 
    block2=createSprite(295,580,200,30);
    block2.shapeColor="orange";

    block3=createSprite(515,580,200,30);
    block3.shapeColor="purple";

    block4=createSprite(740,580,220,30);
    block4.shapeColor="red";

    ball=createSprite(random(20,270),100,40,40);
    ball.shapeColor="white";

    ball.velocityY=5
    ball.velocityX=5

    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites()
    ball.bounceOff(edges);
    if(block1.isTouching(ball)&&ball.bounceOff(block1)){
        ball.shapeColur="blue";
    }
    if(block2.isTouching(ball)&&ball.bounceOff(block2)){
        ball.shapeColor="orange";
    }
    if(block3.isTouching(ball)&&ball.bounceOff(block3)){
        ball.shapeColor="purple";
    }
    if(block4.isTouching(ball)&&ball.bounceOff(block4)){
        ball.shapeColor="red";
       
    }

drawSprites();

    //add condition to check if box touching surface and make it box
}
