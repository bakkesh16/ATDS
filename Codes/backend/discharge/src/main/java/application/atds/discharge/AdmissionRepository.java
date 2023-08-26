package application.atds.discharge;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
/**
 * Repository interface for managing admission entities in the discharge package.
 */
@Repository
public interface AdmissionRepository extends MongoRepository<AdmissionEO, String> {
	 /**
     * Retrieves a list of admission entities for a specific patient ID.
     *
     * @param patientid The ID of the patient.
     * @return A list of AdmissionEO objects associated with the patient ID.
     */
	public List<AdmissionEO> findAllByPatientid(String patientid);
	 /**
     * Retrieves an admission entity for a specific patient ID.
     *
     * @param patientid The ID of the patient.
     * @return The AdmissionEO object associated with the patient ID, or null if not found.
     */
	public AdmissionEO findByPatientid(String patientid);
}
