package maze.ready;

public class GameRoom {

	private int roomNumber;
	private int roomPeople;
	private String roomName;
	
	public GameRoom(int roomNumber,int roomPeople,String roomName){
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
	
}
