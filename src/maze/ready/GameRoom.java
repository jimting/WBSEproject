package maze.ready;

import java.util.ArrayList;

public class GameRoom {

	private int roomNumber;
	private int roomPeople;
	private String roomName;
	private ArrayList<Player> Players;
	private ArrayList<String> chat;
	private int gameStatus; // 0為未開始/1為開始
	
	public GameRoom(int roomNumber,int roomPeople,String roomName){
		Players = new ArrayList<Player>(5);
		chat = new ArrayList<>();
		gameStatus = 0;
		setRoomPeople(roomPeople);
		setRoomNumber(roomNumber);
		setRoomName(roomName);
	}
	
	
	public int getGameStatus() {
		return gameStatus;
	}


	public void setGameStatus(int gameStatus) {
		this.gameStatus = gameStatus;
	}


	public int getRoomPeople() {
		return roomPeople;
	}
	public void setRoomPeople(int roomPeople) {
		this.roomPeople = roomPeople;
	}
	public int getRoomNumber() {
		return roomNumber;
	}
	public void setRoomNumber(int roomNumber) {
		this.roomNumber = roomNumber;
	}
	public String getRoomName() {
		return roomName;
	}
	public void setRoomName(String roomName) {
		this.roomName = roomName;
	}
	public void newPlayers(String userName,boolean leader)
	{
		Player newPlayer = new Player(userName,leader);
		this.Players.add(newPlayer);
	}
	public void deletePlayers(String userName)
	{
		for(int i = 0;i < this.Players.size();i++)
		{
			Player tmp = this.Players.get(i);
			if(tmp.getUserName().equals(userName))
			{
				if(tmp.isLeader())
				{
					//把市長給下一個人
					this.Players.get(i+1).setLeader(true);
					this.Players.remove(i);
				}
				else
				{
					this.Players.remove(i);
				}
			}
		}
	}
	public void newChat(String userName,String chat)
	{
		String result = userName + ":" + chat;
		this.chat.add(result);
	}
	public String getLeader()
	{
		for(Player k : this.Players)
		{
			if(k.isLeader())
			{
				return k.getUserName();
			}
		}
		return null;
	}
}
