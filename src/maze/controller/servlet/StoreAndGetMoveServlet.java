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
import maze.animal.Player;
import maze.ready.GameRoom;

/**
 * Servlet implementation class StoreMoveServlet
 */
@WebServlet("/StoreMoveServlet")
public class StoreAndGetMoveServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    private ArrayList<Player> playerList;
    
    public StoreAndGetMoveServlet() {
        super();
        playerList = new ArrayList<Player>();
        for(int i=0;i<4;i++)
        	playerList.add(new Player(i));
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		Double px = Double.parseDouble(request.getParameter("px"));
		Double pz = Double.parseDouble(request.getParameter("pz"));
		Double rotation = Double.parseDouble(request.getParameter("rotation"));
		int playerNum = Integer.parseInt(request.getParameter("playerNum"));
		playerList.get(playerNum).setPosition(new Position(px,0,pz));
		playerList.get(playerNum).setRotation(rotation);
		
		//System.out.printf("%.3f %.3f %d\n",px,pz,playerNum);
		String json = new Gson().toJson(playerList);
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
