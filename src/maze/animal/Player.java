package maze.animal;

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
				setPosition(new Direction(2500,0,2500));
				break;
			case 1:
				setSpeed(12000);
				setPosition(new Direction(1500,0,1500));
				break;
			default :
				setSpeed(12000);
				setPosition(new Direction(500,0,500));
				break;
		}
		
	}
	
	
	
}
