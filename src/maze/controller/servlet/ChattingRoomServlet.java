package maze.controller.servlet;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import maze.ready.GameRoom;

/**
 * Servlet implementation class ChattingRoomServlet
 */
@WebServlet("/ChattingRoomServlet")
public class ChattingRoomServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ChattingRoomServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		request.setCharacterEncoding("utf-8");
		response.setCharacterEncoding("utf-8");
		
		int roomID = Integer.parseInt(request.getParameter("roomID"));
		String chat = (String)request.getParameter("chat");
		
		
		HttpSession session = request.getSession();
		String userName = (String)session.getAttribute("userName");
		
		System.out.println(userName + "在房間" + roomID + "說" + chat);
		ArrayList<GameRoom> tmpGameRoom = (ArrayList<GameRoom>)getServletContext().getAttribute("roomList");
		for(GameRoom tmp:tmpGameRoom)
		{
			if(tmp.getRoomNumber() == roomID)
			{
				tmp.newChat(userName, chat);
			}
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
