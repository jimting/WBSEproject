package maze.animal;

import maze.game.Game;

public class Player extends Animal
{
	
	private int playerNum;
	
	public Player(int playerNum){
		setPlayerNum(playerNum);
		setReadyPosition();
		
		
	}

	public int getPlayerNum() {
		return playerNum;
	}

	public void setPlayerNum(int playerNum) {
		this.playerNum = playerNum;
	}
	
	public void setReadyPosition()
	{
		switch(playerNum)
		{
			case 0:
				setSpeed(12000);
				setPosition(new Direction(Game.p1Position,0,Game.p1Position));
				break;
			case 1:
				setSpeed(12000);
				setPosition(new Direction(Game.p2Position,0,Game.p2Position));
				break;
			case 2:
				setSpeed(12000);
				setPosition(new Direction(Game.p3Position,0,Game.p3Position));
				break;
			default :
				setSpeed(12000);
				setPosition(new Direction(Game.p4Position,0,Game.p4Position));
				break;
		}
		
	}
	
	
	
}
