class Paper{ 
    constructor(x,y,width,height)
{
 varoptions={
    isStatic:false,
    restitution:0.3,
    fraction:0.5,
    density:1.2
 }
 this.body = Bodies.rectangle(x,y,width,height,options);
 this.width = width;
 this.height = height;
 World.add(world,this.body);
} 
display()
    {
        ellipseMode(circle)
        ellipse(56, 46, 55, 55);
    }
}