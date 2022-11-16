function setup() {
  createCanvas(windowWidth, windowHeight);
}
  
function draw() {
  background(220);
  textSize(30)
  text("X:"+mouseX+"Y:"+mouseY,100,100)
  
 
{
push()
  translate(width/2,height/2)
  
  fill(255)
  ellipse(0,0,200)//頭
  fill(255)
  ellipse(-40,-30,50)
  ellipse(+40,-30,50)//左右眼眶

  ellipse(+100,+55,40)//尾巴

  fill(255,0,0)
  ellipse(-40+mouseX/100,-30,30)
  ellipse(+40+mouseX/100,-30,30)//左右眼珠

  fill(255)
  ellipse(-60,-125+mouseY/100,35,100)
  ellipse(+60,-125+mouseY/100,35,100)//左右耳

  fill("#FFECF5")
  ellipse(-60,-107+mouseY/100,30,60)
  ellipse(+60,-107+mouseY/100,30,60)//左右耳

  fill(255)
  noStroke()
  ellipse(-42+mouseX/100,-32,15)
  ellipse(+42+mouseX/100,-32,15)

  ellipse(-50+mouseX/100,-25,10)
  ellipse(+50+mouseX/100,-25,10)//左右眼白

  
  fill("#FFB5B5")
  ellipse(-60,-10,25,15)
  ellipse(+60,-10,25,15)//腮紅

pop()  
}

{
push()
  translate(width/3,height/3)
  fill("#FF8000")
  ellipse(-20,+150,50,90)
  fill("#009100")

  ellipse(-30,+100,20,30)
  ellipse(-10,+100,20,30)
  ellipse(-20,+100,20,30)

pop()
}

}