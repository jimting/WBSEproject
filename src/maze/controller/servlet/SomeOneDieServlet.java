package maze.controller.servlet;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import maze.animal.Position;
import maze.game.Game;

/**
 * Servlet implementation class SomeOneDieServlet
 */
@WebServlet("/SomeOneDieServlet")
public class SomeOneDieServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public SomeOneDieServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		int playerNum = Integer.parseInt(request.getParameter("playerNum"));
		int gameNum = Integer.parseInt(request.getParameter("gameNum"));
		
	
		ArrayList<Game> gameList = (ArrayList<Game>)getServletContext().getAttribute("gameList");
		gameList.get(gameNum).getPlayerList().get(playerNum).setAlive(false);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
