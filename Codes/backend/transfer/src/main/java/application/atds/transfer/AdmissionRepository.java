package application.atds.transfer;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

/**
 * Repository interface for managing admission entities in the database.
 */
@Repository
public interface AdmissionRepository extends MongoRepository<AdmissionEO, String> {
	 /**
     * Finds all admission entities with the specified patient ID.
     *
     * @param patientid The patient ID to search for.
     * @return A list of admission entities associated with the given patient ID.
     */
	public List<AdmissionEO> findAllByPatientid(String patientid);
	/**
     * Finds an admission entity with the specified patient ID.
     *
     * @param patientid The patient ID to search for.
     * @return The admission entity associated with the given patient ID, or null if not found.
     */
	public AdmissionEO findByPatientid(String patientid);
}
