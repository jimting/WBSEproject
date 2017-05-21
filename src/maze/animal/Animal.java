package maze.animal;

public abstract class Animal 
{
	private Direction face;
	private int speed;
	
	public void setFace(Direction face)
	{
		this.face = face;
	}
	
	public void setSpeed(int speed)
	{
		this.speed = speed;
	}
	
	public Direction getFace()
	{
		return face;
	}
	
	public int getSpeed()
	{
		return speed;
	}
	
}
