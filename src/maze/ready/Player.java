package maze.ready;

public class Player 
{
	private String userName;
	private boolean leader;
	Player(String userName,boolean leader)
	{
		this.userName = userName;
		this.leader = leader;
	}
	public String getUserName() 
	{
		return userName;
	}
	public void setUserName(String userName) 
	{
		this.userName = userName;
	}
	public boolean isLeader() 
	{
		return leader;
	}
	public void setLeader(boolean leader) 
	{
		this.leader = leader;
	}
	
}
