package application.atds.messenger;

import org.springframework.data.mongodb.core.mapping.Document;

/**
 * Entity class representing a message for the messenger service.
 */
public class MessengerEO {
   
	private String message;
	 /**
     * Constructor to initialize the message.
     *
     * @param message The message content.
     */
	public MessengerEO(String message) {
		super();
		this.message = message;
	}
	 /**
     * Get the message content.
     *
     * @return The message content.
     */
	public String getMessage() {
		return message;
	}
	  /**
     * Set the message content.
     *
     * @param message The message content to set.
     */
	public void setMessage(String message) {
		this.message = message;
	}
	/**
     * Default constructor.
     */
	public MessengerEO() {
		super();
		// TODO Auto-generated constructor stub
	}
}
