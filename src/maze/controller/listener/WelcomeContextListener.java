package maze.controller.listener;

import java.util.ArrayList;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.servlet.annotation.WebListener;

import maze.game.Game;
import maze.ready.GameRoom;

/**
 * Application Lifecycle Listener implementation class WelcomeContextListener
 *
 */
@WebListener
public class WelcomeContextListener implements ServletContextListener {

    
    public WelcomeContextListener() {
        
    }

	/**
     * @see ServletContextListener#contextDestroyed(ServletContextEvent)
     */
    public void contextDestroyed(ServletContextEvent arg0)  { 
         // TODO Auto-generated method stub
    }

	/**
     * @see ServletContextListener#contextInitialized(ServletContextEvent)
     */
    public void contextInitialized(ServletContextEvent arg0)  { 
    	arg0.getServletContext().setAttribute("gameList",new ArrayList<Game>());
    	arg0.getServletContext().setAttribute("roomList",new ArrayList<GameRoom>());
		
    	
    }
	
}
