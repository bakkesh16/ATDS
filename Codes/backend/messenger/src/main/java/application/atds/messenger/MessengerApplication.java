package application.atds.messenger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
/**
 * Main application class for the Messenger application.
 */
@SpringBootApplication
public class MessengerApplication implements CommandLineRunner{

	public static void main(String[] args) {
		SpringApplication.run(MessengerApplication.class, args);
	}

	@Autowired(required=true)
	MessengerServiceImpl messengerServiceImpl;
	/**
     * Entry point of the application.
     *
     * @param args Command line arguments.
     * @throws Exception If an exception occurs during execution.
     */
	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
//		messengerServiceImpl.sendMessage("Hello ", "sendingQueue");
//	  System.out.println(messengerServiceImpl.recieveMessage("sendingQueue"));
	}

}
