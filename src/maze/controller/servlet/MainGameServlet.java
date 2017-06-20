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
		RequestDispatcher view;
		ArrayList<Game> gameList = (ArrayList<Game>) getServletContext().getAttribute("gameList");
		
		if(playerNum % 5 == 0)
		{
			game = new Game();
			gameList.add(game);
			
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

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}