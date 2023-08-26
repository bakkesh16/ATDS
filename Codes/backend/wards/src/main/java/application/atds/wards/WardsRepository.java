package application.atds.wards;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
/**
 * Repository interface for accessing ward-related data in the database.
 */
@Repository
public interface WardsRepository extends MongoRepository<WardsEO, String> {
	 /**
     * Retrieves a list of wards with a specific status.
     *
     * @param status The status of the wards to retrieve.
     * @return A list of wards with the specified status.
     */
public List<WardsEO> findAllByStatus(String status);	

}
