package application.atds.admission;

import java.util.List;
/**
 * Service interface for handling admission-related operations.
 */
public interface AdmissionService {
	 /**
     * Requests a new admission for a patient.
     *
     * @param admissionObj The AdmissionEO object representing the admission request.
     */
	public void requestNewAdmission(AdmissionEO admissionObj);
	 /**
     * Retrieves all admission requests for a specific patient ID.
     *
     * @param patientid The ID of the patient.
     * @return A list of AdmissionEO objects representing the patient's admission requests.
     */
	public List<AdmissionEO> findAllPatientRequestsById(String patientid);
	 /**
     * Retrieves all admission requests with a specific status.
     *
     * @param status The status of admission requests to retrieve.
     * @return A list of AdmissionEO objects with the specified status.
     */
	public List<AdmissionEO> findAllRequestByStatus(String status);
	 /**
     * Approves admission requests for a list of patient IDs.
     *
     * @param patientids A list of patient IDs for admission requests to approve.
     */
	public void approveRequests(List<String> patientids);
}
