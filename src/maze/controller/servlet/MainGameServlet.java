package maze.controller.servlet;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import maze.game.Game;

/**
 * Servlet implementation class MainGameServlet
 */
@WebServlet("/MainGameServlet")
public class MainGameServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
  
    private int playerNum = 0;
    
    public MainGameServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException 
	{
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		request.setCharacterEncoding("utf-8");
		
		String roomID = request.getParameter("roomID");
		
		HttpSession session = request.getSession();
		String userName = (String)session.getAttribute("userName");
		
		Game game = null;
		RequestDispatcher view;
		ArrayList<Game> gameList = (ArrayList<Game>) getServletContext().getAttribute("gameList");
		
		//先找有沒有人建立過房間了
		if(checkGame(roomID,gameList))
		{
			//如果沒有，就建立房間
			game = new Game(roomID);
			gameList.add(game);
		}
		
		//在房間內建立個人資料
		for(Game tmp: gameList)
		{
			if(tmp.getRoomID().equals(roomID))
			{
				//在房間內確認你有沒有加入過遊戲，而且房間人數低於五人
				if(tmp.checkPlayer(userName) && tmp.checkPlayerNumber())
					tmp.newPlayer(userName);
				else
				{
					//如果加入過了，或是已超過五人，就掰掰，直接轉到房間列表
					view = request.getRequestDispatcher("roomlist.html");
					view.forward(request, response);
					return;
				}
			}
		}
		
		System.out.println(playerNum);
		
		request.setAttribute("gameList",gameList);
		request.setAttribute("gameNum",playerNum/5);
		
		request.setAttribute("playerNum",playerNum%5);
		response.setContentType("text/html");
		response.setCharacterEncoding("utf-8");
		
		playerNum++;
		
		getServletContext().setAttribute("gameList",gameList);
		view = request.getRequestDispatcher("main.jsp");
		view.forward(request, response);
	}
	public boolean checkGame(String roomID,ArrayList<Game> gameList)
	{
		for(Game tmp : gameList)
		{
			if(tmp.getRoomID().equals(roomID))
			{
				return false;
			}
		}
		return true;
	}

}