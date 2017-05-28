package maze.game;

import java.util.ArrayList;

import maze.animal.Player;

public class Game {
	private static final int maxPlayerNum = 2;
	private ArrayList<Player> playerList;

	
	public Game()
	{
		playerList = new ArrayList<Player>();
	}
	
	public void addPlayer(int playerNum)
	{
		playerList.add(new Player(playerNum));
	}
	
	public ArrayList<Player> getPlayerList()
	{
		return playerList;
	}

}
