package application.atds.messenger;

import java.io.IOException;
import java.util.concurrent.TimeoutException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
/**
 * Controller class to handle messaging operations.
 */
@RestController
public class MessengerController {

	@Autowired
	MessengerServiceImpl messengerServiceImplRef;
	/**
     * Endpoint to send a message to the insurance queue.
     *
     * @param message The message to be sent.
     * @return ResponseEntity indicating the status of the message sending.
     */
	 @PostMapping("/sendMessageToInsurance")
	 @CrossOrigin
	    public ResponseEntity<String> sendMessageToInsurance(@RequestBody MessengerEO message) {
	        try {
	            // Assuming you have an "insuranceQueue" declared in your RabbitMQ configuration
	           boolean send = false;
	           send = messengerServiceImplRef.sendMessage(message.getMessage(), "HTI");
	        if(send){
	        	return ResponseEntity.ok("Message sent to insurance: " + message);
	        }
	        else
	        	 return ResponseEntity.status(500).body("Failed to send message to insurance");
	        } catch (Exception e) {
	            e.printStackTrace();
	            return ResponseEntity.status(500).body("Failed to send message to insurance");
	        }
	    }
	 /**
	     * Endpoint to send a message to the hospital queue.
	     *
	     * @param message The message to be sent.
	     * @return ResponseEntity indicating the status of the message sending.
	     */
	 @PostMapping("/sendMessageToHospital")
	 @CrossOrigin
	    public ResponseEntity<String> sendMessageToHospital(@RequestBody MessengerEO message) {
	        try {
	            // Assuming you have an "hospitalQueue" declared in your RabbitMQ configuration
	           boolean send = false;
	           send = messengerServiceImplRef.sendMessage(message.getMessage(), "ITH");
	        if(send){
	        	return ResponseEntity.ok("Message sent to hospital: " + message);
	        }
	        else
	        	 return ResponseEntity.status(500).body("Failed to send message to hospital");
	        } catch (Exception e) {
	            e.printStackTrace();
	            return ResponseEntity.status(500).body("Failed to send message to hospital");
	        }
	    }
	 /**
	     * Endpoint to receive a message from the hospital queue.
	     *
	     * @return ResponseEntity containing the received message.
	     */
	 
	 
	 @GetMapping("/receiveMessageFromHospital")
	 @CrossOrigin
	    public ResponseEntity<String> receiveMessageFromHospital() {
		 String receivedMessage= null;
		 try {
			receivedMessage = messengerServiceImplRef.recieveMessage("HTI");
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (TimeoutException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		 
	        if (receivedMessage != null) {
	            return ResponseEntity.ok(receivedMessage);
	        } else {
	            return ResponseEntity.status(404).body("No message received from Hospital");
	        }
	    }
	 /**
	     * Endpoint to receive a message from the insurance queue.
	     *
	     * @return ResponseEntity containing the received message.
	     */
	 @GetMapping("/receiveMessageFromInsurance")
	 @CrossOrigin
	    public ResponseEntity<String> receiveMessageFromInsurance() {
		 String receivedMessage= null;
		 try {
			receivedMessage = messengerServiceImplRef.recieveMessage("ITH");
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (TimeoutException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		 
	        if (receivedMessage != null) {
	            return ResponseEntity.ok(receivedMessage);
	        } else {
	            return ResponseEntity.status(404).body("No message received from insurance");
	        }
	    }
}
