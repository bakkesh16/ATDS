package application.atds.admission;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * The main class to start the Admission Application.
 * This class initializes the Spring Boot application.
 */
@SpringBootApplication
public class AdmissionApplication {

    /**
     * The main method to start the Admission Application.
     * Initializes the Spring Boot application.
     *
     * @param args Command line arguments (if any).
     */
    public static void main(String[] args) {
        SpringApplication.run(AdmissionApplication.class, args);
    }
}
