package maze.game;

import java.util.ArrayList;

import maze.animal.Animal;
import maze.animal.Ghost;
import maze.animal.Player;

public class Game {
	private static final int maxPlayerNum = 2;
	
	private ArrayList<Animal> playerList;
	private String roomID;
	private ArrayList<String> Players;
	
	public static final int p1Position = 500;
	public static final int p2Position = 1500;
	public static final int p3Position = 2500;
	public static final int p4Position = 3500;
	public static final int gPosition = 5000;
	
	public String getRoomID() {
		return roomID;
	}


	public void setRoomID(String roomID) {
		this.roomID = roomID;
	}


	public Game(String roomID)
	{
		playerList = new ArrayList<Animal>();
		for(int i=0;i<5;i++)
			playerList.add(new Player(i));
		this.roomID = roomID;
		Players = new ArrayList<>();
	}
	
	
	public ArrayList<Animal> getPlayerList()
	{
		return playerList;
	}
	public void newPlayer(String userName)
	{
		this.Players.add(userName);
	}
	public boolean checkPlayer(String userName)
	{
		for(String tmp:this.Players)
		{
			if(tmp.equals(userName))
				return false;
		}
		return true;
	}

	public boolean checkPlayerNumber()
	{
		if(Players.size() == 5)
			return false;
		return true;
	}
}
