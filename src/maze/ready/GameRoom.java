package maze.ready;

import java.util.ArrayList;

public class GameRoom {

	private int roomNumber;
	private int roomPeople;
	private String roomName;
	private ArrayList<Player> Players;
	private ArrayList<String> chat;
	
	public GameRoom(int roomNumber,int roomPeople,String roomName){
		Players = new ArrayList<Player>(5);
		chat = new ArrayList<>();
		setRoomPeople(roomPeople);
		setRoomNumber(roomNumber);
		setRoomName(roomName);
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
}
