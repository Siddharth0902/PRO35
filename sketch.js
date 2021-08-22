var hypnotichypnoticBall;
var database;
var hypnoticBallposition,position;

function setup()
{
    database=firebase.database();
    console.log(database);
    createCanvas(500,500);
    hypnoticBall = createSprite(250,250,10,10);
    hypnoticBall.shapeColor = "red";

    hypnoticBallposition=database.ref('ball/position');
    hypnoticBallposition.on("value",readPosition,showError);
}

function draw()
{
    background("white");
    if(position!==undefined)
    {
    if(keyDown(LEFT_ARROW))
    {
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW))
    {
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW))
    {
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW))
    {
        changePosition(0,+1);
    }

    drawSprites();
}
}
0
function changePosition(x,y)
{
    hypnoticBall.x = hypnoticBall.x + x;
    hypnoticBall.y = hypnoticBall.y + y;
}

function readPosition(data)
{
   position=data.val();
   console.log(position.x);
   hypnoticball.x=position.x
   hypnoticball.y=position.y

}

function showError()
{
   console.log("data not received from database")

}

function writePosition(x,y)
{
    database.ref('ball/position').set({
    'x': position.x+x,
    'y': position.y+y
    })
}