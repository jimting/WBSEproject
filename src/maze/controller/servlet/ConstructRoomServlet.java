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

import com.google.gson.Gson;

import maze.ready.GameRoom;


/**
 * Servlet implementation class autoRefreshPlayerServlet
 */
@WebServlet("/ConstructRoomServlet")
public class ConstructRoomServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
    private int roomNumber;
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ConstructRoomServlet() {
        super();
        roomNumber = 0;
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		request.setCharacterEncoding("UTF-8");
		
		HttpSession session = request.getSession();
		String userName = (String)session.getAttribute("userName");
		
		String roomName = request.getParameter("name");
		GameRoom g = new GameRoom(roomNumber,1,roomName);
		g.newPlayers(userName,true);
		roomNumber++;
	
		ArrayList<GameRoom> roomList;

		roomList =  (ArrayList<GameRoom>) getServletContext().getAttribute("roomList");

		roomList.add(g);
		
		System.out.println(roomName);
		getServletContext().setAttribute("roomList", roomList);
		response.setContentType("text/html");
		response.setCharacterEncoding("UTF-8");
		response.getWriter().write("<meta http-equiv='refresh' content='0;url=room.html?roomID="+(roomNumber-1)+"' />");
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
