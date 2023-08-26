package application.atds.messenger;

import java.io.IOException;
import java.util.concurrent.TimeoutException;
/**
 * Interface for sending and receiving messages.
 */
public interface MessnegerService {
	/**
     * Sends a message to the specified queue.
     *
     * @param messageContent The content of the message to be sent.
     * @param queueName      The name of the queue to send the message to.
     * @return True if the message was sent successfully, false otherwise.
     */
	
	public boolean sendMessage(String messageContent, String queueName);
	 /**
     * Receives and retrieves messages from the specified queue.
     *
     * @param queueName The name of the queue to receive messages from.
     * @return The received messages as a concatenated string.
     * @throws IOException      If an I/O error occurs.
     * @throws TimeoutException If a timeout occurs while waiting for the message.
     */
	public String recieveMessage(String queueName) throws IOException, TimeoutException ;
}
