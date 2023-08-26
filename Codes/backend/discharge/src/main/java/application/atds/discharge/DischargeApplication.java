package application.atds.discharge;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
/**
 * The main class to start the Discharge Application.
 * This class initializes the Spring Boot application.
 */
@SpringBootApplication
public class DischargeApplication {
	 /**
     * The main method to start the Discharge Application.
     * Initializes the Spring Boot application.
     *
     * @param args Command line arguments (if any).
     */
	public static void main(String[] args) {
		SpringApplication.run(DischargeApplication.class, args);
	}

}
