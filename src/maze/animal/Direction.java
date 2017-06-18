package maze.animal;

public class Direction 
{
	private int x;
	private int y;
	private int z;
	
	private static final int maxAngle = 360;
	
	public Direction()
	{
		x = 0;
		y = 0;
		z = 0;
	}
	
	public void setDirection(int x,int y,int z)
	{
		this.x = x;
		this.y = y;
		this.z = z;
	}
	
}
