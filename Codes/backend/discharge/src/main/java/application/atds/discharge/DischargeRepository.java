package application.atds.discharge;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
/**
 * Repository interface for managing discharge entities in the system.
 */
@Repository
public interface DischargeRepository extends MongoRepository<DischargeEO, String> {
	/**
     * Retrieves a list of discharge entities with a specific status.
     *
     * @param status The status of discharge entities to retrieve.
     * @return A list of DischargeEO objects with the specified status.
     */
	public List<DischargeEO> findAllByStatus(String status);
    /**
     * Retrieves a discharge entity for a specific patient ID.
     *
     * @param patientid The ID of the patient.
     * @return The DischargeEO object associated with the patient ID, or null if not found.
     */
	public DischargeEO findByPatientid(String patientid);
}
