package maze.controller.servlet;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

import maze.animal.Position;
import maze.game.Game;
import maze.animal.Animal;
import maze.animal.Ghost;
import maze.animal.Player;
import maze.ready.GameRoom;

/**
 * Servlet implementation class StoreMoveServlet
 */
@WebServlet("/StoreMoveServlet")
public class StoreAndGetMoveServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       

    
    public StoreAndGetMoveServlet() {
  
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		Double px = Double.parseDouble(request.getParameter("px"));
		Double pz = Double.parseDouble(request.getParameter("pz"));
		Double rotation = Double.parseDouble(request.getParameter("rotation"));
		int playerNum = Integer.parseInt(request.getParameter("playerNum"));
		int gameNum = Integer.parseInt(request.getParameter("gameNum"));
		
	
		ArrayList<Game> gameList = (ArrayList<Game>)getServletContext().getAttribute("gameList");
	
		gameList.get(gameNum).getPlayerList().get(playerNum).setPosition(new Position(px,0,pz));
		gameList.get(gameNum).getPlayerList().get(playerNum).setRotation(rotation);
		
		//System.out.printf("%.3f %.3f %d\n",px,pz,playerNum);
		String json = new Gson().toJson(gameList.get(gameNum).getPlayerList());
	    response.setContentType("application/json");
	    response.setCharacterEncoding("UTF-8");
	    response.getWriter().write(json);
		
		
	}

	/**
	 * @see HttpServlet#doPost(HttpSerletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
