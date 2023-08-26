package com.example.discoveryserver;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;
/**
 * Spring Boot application class for the Eureka Discovery Server.
 */
@SpringBootApplication
@EnableEurekaServer
public class DiscoveryServerApplication {
	 /**
     * The main method that starts the Eureka Discovery Server.
     *
     * @param args Command-line arguments (not used).
     */
	public static void main(String[] args) {
		SpringApplication.run(DiscoveryServerApplication.class, args);
	}

}
