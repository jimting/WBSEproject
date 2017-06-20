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
 * Servlet implementation class SettingNameServlet
 */
@WebServlet("/SettingNameServlet")
public class SettingNameServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public SettingNameServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		//這邊要開始設定名字，如果成功就進入房間列表，沒成功就跳回進入頁面
		request.setCharacterEncoding("utf-8");
		String userName= request.getParameter("userName");
		System.out.println("歡迎"+userName+"開始暢玩逃出絕命陣");
		response.setCharacterEncoding("utf-8");
		
		//這邊要把名字存到session中，讓自己的電腦讀的到自己的名字
		HttpSession session = request.getSession();
		session.setAttribute("userName", userName);
		
		response.setContentType("text/html");
		response.setCharacterEncoding("UTF-8");
		response.getWriter().write("<meta http-equiv='refresh' content='0;url=roomlist.html' />");
	
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
