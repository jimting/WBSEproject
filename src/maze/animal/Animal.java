package maze.animal;

public abstract class Animal 
{
	private Direction position;
	private int speed;
	
	public void setSpeed(int speed)
	{
		this.speed = speed;
	}
	
	public int getSpeed()
	{
		return speed;
	}

	public Direction getPosition() {
		return position;
	}

	public void setPosition(Direction position) {
		this.position = position;
	}
	
}
