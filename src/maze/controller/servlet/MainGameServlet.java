package maze.controller.servlet;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import maze.game.Game;

/**
 * Servlet implementation class MainGameServlet
 */
@WebServlet("/MainGameServlet")
public class MainGameServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    private ArrayList<Game> gameList = null;
    private int playerNum = 0;
    
    public MainGameServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		Game game = null;
		if(gameList == null)
		{
			gameList = new ArrayList<Game>();
			game = new Game();
			gameList.add(game);
		}
		gameList.get(0).addPlayer(playerNum);
		playerNum++;
		System.out.println("my Number is "+playerNum);
		request.setAttribute("game",gameList);
		request.setAttribute("gameNum",0);
		request.setAttribute("playerNum",playerNum);
		
		response.setContentType("text/html");
		response.setCharacterEncoding("utf-8");
		RequestDispatcher view = request.getRequestDispatcher("main.jsp");
		view.forward(request, response);
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}