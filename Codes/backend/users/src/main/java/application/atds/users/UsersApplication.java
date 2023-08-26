package application.atds.users;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
/**
 * Main class to start the Users application.
 */
@SpringBootApplication
public class UsersApplication {
	/**
     * The main method that starts the Users application.
     *
     * @param args Command line arguments.
     */
	public static void main(String[] args) {
		SpringApplication.run(UsersApplication.class, args);
	}
}
