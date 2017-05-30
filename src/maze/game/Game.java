package maze.game;

import java.util.ArrayList;

import maze.animal.Player;

public class Game {
	private static final int maxPlayerNum = 2;
	
	private ArrayList<Player> playerList;
	public static final int p1Position = 500;
	public static final int p2Position = 1500;
	public static final int p3Position = 2500;
	public static final int p4Position = 3500;

	
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
