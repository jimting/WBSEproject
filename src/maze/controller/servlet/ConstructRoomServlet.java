package maze.controller.servlet;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

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
		
		String roomName = request.getParameter("roomName");
		GameRoom g = new GameRoom(roomNumber,1,roomName);
		roomNumber++;
		
		ArrayList<GameRoom> roomList;
		
		if(getServletContext().getAttribute("roomList")!= null)
		{
			roomList =  (ArrayList<GameRoom>) getServletContext().getAttribute("roomList");
		}
		else
		{
			roomList = new ArrayList<GameRoom>();
		}
		
		roomList.add(g);
		System.out.println(roomList.size());
		getServletContext().setAttribute("roomList", roomList);
		response.setContentType("text/html");
		response.setCharacterEncoding("utf-8");
		RequestDispatcher view = request.getRequestDispatcher("room.html?ID="+roomNumber);
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
