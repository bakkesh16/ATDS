package application.atds.messenger;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
/**
 * Repository interface for managing MessengerEO entities in the database.
 */
@Repository
public interface MessengerRepository extends MongoRepository< MessengerEO, String> {

}
