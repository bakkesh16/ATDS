package application.atds.messenger;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.TimeoutException;

import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.stereotype.Service;

import com.rabbitmq.client.Channel;
import com.rabbitmq.client.Connection;
import com.rabbitmq.client.ConnectionFactory;
import com.rabbitmq.client.DeliverCallback;

@Service
public class MessengerServiceImpl implements MessnegerService {
	   /**
     * Sends a message to the specified queue.
     *
     * @param messageContent The content of the message to be sent.
     * @param queueName      The name of the queue to send the message to.
     * @return True if the message was sent successfully, false otherwise.
     */
	@Override
	public boolean sendMessage(String messageContent, String queueName) {
		// TODO Auto-generated method stub
		
		LocalDateTime timestamp = LocalDateTime.now();
        LocalTime currentTime = LocalTime.now();

        // Format the current time as [hh:mm]
        String formattedTime = currentTime.format(DateTimeFormatter.ofPattern("[HH:mm]"));

        // Modify message content to include formatted time
        String updatedMessageContent = formattedTime + " " + messageContent + "\n"; // Append new line

        ConnectionFactory factory = new ConnectionFactory();
        factory.setHost("localhost");
        try (Connection connection = factory.newConnection();
             Channel channel = connection.createChannel()) {
            channel.queueDeclare(queueName, false, false, false, null);//Prakshandbakesh///hi brohh

            channel.basicPublish("", queueName, null, updatedMessageContent.getBytes());

            return true; // Return true since the message was sent successfully
        } catch (Exception e) {
            e.printStackTrace();
            return false; // Return false if an exception occurred and the message wasn't sent
        }
	}
	 /**
     * Receives and retrieves messages from the specified queue.
     *
     * @param queueName The name of the queue to receive messages from.
     * @return The received messages as a concatenated string.
     * @throws IOException      If an I/O error occurs.
     * @throws TimeoutException If a timeout occurs while waiting for the message.
     */
	@Override
	public String recieveMessage(String queueName) throws IOException, TimeoutException {
		ConnectionFactory factory = new ConnectionFactory();

        factory.setHost("localhost");
        Connection connection = factory.newConnection();

 

        int NUM_CONSUMERS = 6;
        CountDownLatch latch = new CountDownLatch(NUM_CONSUMERS);

 

        List<String> receivedMessages = Collections.synchronizedList(new ArrayList<>());

 

        for (int i = 0; i < NUM_CONSUMERS; i++) {
            new Thread(() -> {
                try {
                    Channel channel = connection.createChannel();
                    channel.queueDeclare(queueName, false, false, false, null);

                    DeliverCallback deliverCallback = (consumerTag, delivery) -> {
                        String message = new String(delivery.getBody(), StandardCharsets.UTF_8);
                        // Add each message separately to the list, with a newline character
                        receivedMessages.add(message + "\n");
                    };

                    channel.basicConsume(queueName, true, deliverCallback, consumerTag -> {});

                    latch.countDown();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }).start();
        }

        try {
            latch.await();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        connection.close();

        // Join received messages into a single string with each message on a separate line
        return String.join("\n", receivedMessages);
	}


}
