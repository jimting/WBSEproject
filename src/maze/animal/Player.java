package maze.animal;

import maze.game.Game;

public class Player extends Animal
{
	
	private int playerNum;
	
	public Player(int playerNum){
		super.setReadyPosition(playerNum);
		setPlayerNum(playerNum);
		
		
		
	}

	public int getPlayerNum() {
		return playerNum;
	}

	public void setPlayerNum(int playerNum) {
		this.playerNum = playerNum;
	}
	
	
	
	
	
}
