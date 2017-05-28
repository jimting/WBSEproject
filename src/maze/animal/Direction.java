package maze.animal;

public class Direction 
{
	private int x;
	private int y;
	private int z;
	
	private static final int maxAngle = 360;
	
	public Direction()
	{
		setDirection(0,0,0);
	}
	
	public Direction(int x ,int y,int z)
	{
		setDirection(x,y,z);
	}
	
	public void setDirection(int x,int y,int z)
	{
		this.x = x;
		this.y = y;
		this.z = z;
	}
	
	public int getX(){
		return x;
	}
	
	public int getY(){
		return y;
	}
	
	public int getZ(){
		return z;
	}
	
}
