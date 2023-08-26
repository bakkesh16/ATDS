package application.atds.insurance;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
/**
 * Repository interface for managing InsuranceEO entities in the database.
 */
@Repository
public interface InsuranceRepository extends MongoRepository<InsuranceEO, String> {
	  /**
     * Retrieves an insurance entity by its insurance identifier.
     *
     * @param insuranceid The insurance identifier to search for.
     * @return The InsuranceEO object associated with the provided insurance identifier.
     */
	public InsuranceEO findByInsuranceid(String insuranceid);
	 /**
     * Retrieves a list of insurance entities with a specific status.
     *
     * @param status The status to filter by.
     * @return A list of InsuranceEO objects with the provided status.
     */
	public List<InsuranceEO> findAllByStatus(String status);
}
