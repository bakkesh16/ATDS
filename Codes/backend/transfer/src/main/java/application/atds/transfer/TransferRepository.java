package application.atds.transfer;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
/**
 * Repository interface for managing transfer requests in the database.
 */
@Repository
public interface TransferRepository extends MongoRepository<TransferEO, String> {
	  /**
     * Find all transfer requests associated with a specific patient ID.
     *
     * @param patientid The ID of the patient.
     * @return A list of transfer requests associated with the given patient ID.
     */
	public List<TransferEO> findAllByPatientid(String patientid);
	 /**
     * Find all transfer requests with a specific status.
     *
     * @param status The status of the transfer requests.
     * @return A list of transfer requests with the given status.
     */
	public List<TransferEO> findAllByStatus(String status);
	/**
     * Find a transfer request by its associated patient ID.
     *
     * @param patientid The ID of the patient.
     * @return The transfer request associated with the given patient ID.
     */
	public TransferEO findByPatientid(String patientid);
}
