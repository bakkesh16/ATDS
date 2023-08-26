package application.atds.wards;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
/**
 * Main class to start the Wards application.
 */
@SpringBootApplication
public class WardsApplication {
	 /**
     * The main method that starts the Wards application.
     *
     * @param args Command line arguments.
     */
	public static void main(String[] args) {
		SpringApplication.run(WardsApplication.class, args);
	}

}
