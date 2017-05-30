package maze.animal;

public class Direction 
{
	private double x;
	private double y;
	private double z;
	
	private static final double maxAngle = 360;
	
	public Direction()
	{
		setDirection(0,0,0);
	}
	
	public Direction(double x ,double y,double z)
	{
		setDirection(x,y,z);
	}
	
	public void setDirection(double x,double y,double z)
	{
		this.x = x;
		this.y = y;
		this.z = z;
	}
	
	public double getX(){
		return x;
	}
	
	public double getY(){
		return y;
	}
	
	public double getZ(){
		return z;
	}
	
}
