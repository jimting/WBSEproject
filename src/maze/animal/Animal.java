package maze.animal;

import maze.game.Game;

public abstract class Animal 
{
	private Position position;
	private double rotation;
	private int speed;
	
	public void setSpeed(int speed)
	{
		this.speed = speed;
	}
	
	public int getSpeed()
	{
		return speed;
	}

	public Position getPosition() {
		return position;
	}

	public void setPosition(Position position) {
		this.position = position;
	}

	public double getRotation() {
		return rotation;
	}

	public void setRotation(double rotation) {
		this.rotation = rotation;
	}
	
	public void setReadyPosition(int playerNum)
	{
		switch(playerNum)
		{
			case 0:
				setSpeed(12000);
				setPosition(new Position(Game.p1Position,0,Game.p1Position));
				break;
			case 1:
				setSpeed(12000);
				setPosition(new Position(Game.p2Position,0,Game.p2Position));
				break;
			case 2:
				setSpeed(12000);
				setPosition(new Position(Game.p3Position,0,Game.p3Position));
				break;
			case 3:
				setSpeed(12000);
				setPosition(new Position(Game.p4Position,0,Game.p4Position));
				break;
			default :
				setSpeed(12000);
				setPosition(new Position(Game.gPosition,0,Game.gPosition));
				break;
		}
		
	}
	
}
