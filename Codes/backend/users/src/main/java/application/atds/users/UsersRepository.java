package application.atds.users;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
/**
 * Repository interface for accessing user-related data in the database.
 */
@Repository
public interface UsersRepository extends MongoRepository<UsersEO, String> {
	  /**
     * Retrieves a user based on their user ID.
     *
     * @param userid The user ID to search for.
     * @return The user with the specified user ID.
     */
	public UsersEO findByUserid(String userid);
	
}
