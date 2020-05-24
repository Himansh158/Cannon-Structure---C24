// You could have multiple flags like: start, launch to indicate the state of the game.
var engine, world 
const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as 
const Engine = Matter.Engine

*/

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    var canvas = createCanvas(800,400)
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(400,370,800,10);
    tank1 = new Tanker(60,370,50,60)
}

function draw() {
// Remember to update the Matter Engine and set the background.
Engine.update(engine);
background("White");
ground.display();
tank1.display();

}


function keyReleased() {
    // Call the shoot method for the cannon.
}