package maze.controller.listener;

import javax.servlet.annotation.WebListener;
import javax.servlet.http.HttpSession;
import javax.servlet.http.HttpSessionEvent;
import javax.servlet.http.HttpSessionListener;

/**
 * Application Lifecycle Listener implementation class PlayerSessionListener
 *
 */
@WebListener
public class PlayerSessionListener implements HttpSessionListener {

    /**
     * Default constructor. 
     */
    public PlayerSessionListener() {
        // TODO Auto-generated constructor stub
    }

	/**
     * @see HttpSessionListener#sessionCreated(HttpSessionEvent)
     */
    public void sessionCreated(HttpSessionEvent arg0)  { 
    	HttpSession s = arg0.getSession();
    	System.out.println("coming");
    	synchronized(s){
    		int playerNum = (int)s.getServletContext().getAttribute("playerNum");
    		playerNum++;
    		s.getServletContext().setAttribute("playerNum",playerNum);
    	}
    }

	/**
     * @see HttpSessionListener#sessionDestroyed(HttpSessionEvent)
     */
    public void sessionDestroyed(HttpSessionEvent arg0)  { 
    	HttpSession s = arg0.getSession();
    	System.out.println("gone");
    	synchronized(s){
    		int playerNum = (int)s.getServletContext().getAttribute("playerNum");
    		playerNum--;
    		s.getServletContext().setAttribute("playerNum",playerNum);
    	}
    }
	
}
