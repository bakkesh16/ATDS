package application.atds.admission;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
/**
 * Repository interface for managing ward entities in the database.
 */
@Repository
public interface WardsRepository extends MongoRepository<WardsEO, String> {
	 /**
     * Retrieves a list of ward entities with a specific status.
     *
     * @param status The status of ward entities to retrieve.
     * @return A list of WardsEO objects with the specified status.
     */
public List<WardsEO> findAllByStatus(String status);	
/**
 * Retrieves a ward entity for a specific ward number.
 *
 * @param wardnumber The number of the ward.
 * @return The WardsEO object associated with the ward number, or null if not found.
 */
public WardsEO findByWardnumber(String wardnumber);
}
