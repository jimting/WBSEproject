package maze.animal;

import maze.game.Game;

public class Player extends Animal
{
	
	private int playerNum;
	private static final int DEAD = 0;
	private static final int ALIVE = 1;
	
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
