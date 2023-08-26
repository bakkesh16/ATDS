package application.atds.transfer;

import java.util.List;
/**
 * Service interface for managing transfer requests.
 */
public interface TransferService {
	  /**
     * Add a transfer request.
     *
     * @param transferObj The transfer request object to be added.
     * @return A message indicating the success or failure of the operation.
     */
 public String addTransferRequest(TransferEO transferObj);
 /**
  * Find all transfer requests associated with a specific patient ID.
  *
  * @param patientid The ID of the patient.
  * @return A list of transfer requests associated with the given patient ID.
  */
 public List<TransferEO> findAllTransferRequestByPatientid(String patientid);
 /**
  * Find all transfer requests with a specific status.
  *
  * @param status The status of the transfer requests.
  * @return A list of transfer requests with the given status.
  */
 public List<TransferEO> findAllTransferRequestByStatus(String status);
}
