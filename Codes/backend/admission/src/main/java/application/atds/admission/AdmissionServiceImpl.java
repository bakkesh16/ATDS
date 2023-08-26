package application.atds.admission;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
/**
 * Implementation of the AdmissionService interface for handling admission-related operations.
 */
@Service
public class AdmissionServiceImpl implements AdmissionService {

	@Autowired
	AdmissionRepository admissionRepositoryRef;
	 /**
     * Requests a new admission for a patient.
     *
     * @param admissionObj The AdmissionEO object representing the admission request.
     */
	@Override
	public void requestNewAdmission(AdmissionEO admissionObj) {
		// TODO Auto-generated method stub
		admissionRepositoryRef.save(admissionObj);
	}
	 /**
     * Retrieves all admission requests for a specific patient ID.
     *
     * @param patientid The ID of the patient.
     * @return A list of AdmissionEO objects representing the patient's admission requests.
     */
	@Override
	public List<AdmissionEO> findAllPatientRequestsById(String patientid) {
		// TODO Auto-generated method stub
		return admissionRepositoryRef.findAllByPatientid(patientid);
	}
	 /**
     * Retrieves all admission requests with a specific status.
     *
     * @param status The status of admission requests to retrieve.
     * @return A list of AdmissionEO objects with the specified status.
     */
	@Override
	public List<AdmissionEO> findAllRequestByStatus(String status) {
		// TODO Auto-generated method stub
		return admissionRepositoryRef.findAllByStatus(status);
	}
	  /**
     * Approves admission requests for a list of patient IDs.
     *
     * @param patientids A list of patient IDs for admission requests to approve.
     */
	@Override
	public void approveRequests(List<String> patientids) {
		// TODO Auto-generated method stub
		
	}
}
