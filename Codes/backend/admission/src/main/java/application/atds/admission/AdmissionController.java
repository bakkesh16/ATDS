package application.atds.admission;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
/**
 * The controller class that handles admission-related requests.
 */
@RestController
public class AdmissionController {

	@Autowired
	AdmissionService admissionServiceRef;
	
	@Autowired
	AdmissionRepository admissionRepositoryRef;
	
	@Autowired
	WardsRepository wardsRepositoryRef;
	 /**
     * Handles a new admission request.
     *
     * @param admissionObj The AdmissionEO object representing the admission request.
     */
	@PostMapping(value={"/requestnewadmission"})
	@CrossOrigin
	public void requestNewAdmission(@RequestBody AdmissionEO admissionObj ){
		admissionServiceRef.requestNewAdmission(admissionObj);
	}
	 /**
     * Retrieves all admission requests for a specific patient.
     *
     * @param patientid The ID of the patient.
     * @return A list of AdmissionEO objects representing the patient's admission requests.
     */
	@GetMapping(value={"/findallrequests/{patientid}"})
	@CrossOrigin
	public List<AdmissionEO> findAllPatientRequests(@PathVariable("patientid") String patientid){
		return admissionServiceRef.findAllPatientRequestsById(patientid);
	}
	 /**
     * Retrieves all admission requests with a specific status.
     *
     * @param status The status of admission requests to retrieve.
     * @return A list of AdmissionEO objects with the specified status.
     */
	@GetMapping(value={"/findallrequestsbystatus/{status}"})
	@CrossOrigin
	public List<AdmissionEO> findAllRequestByStatus(@PathVariable("status") String status){
		return admissionServiceRef.findAllRequestByStatus(status);
	}
	 /**
     * Approves admission requests for a list of patient IDs.
     *
     * @param patientids A list of patient IDs for admission requests to approve.
     */
	@PostMapping("/approvepatientrequests")
	@CrossOrigin
	public void approveAdmissionRequest(@RequestBody List<String> patientids){
		
		for (String patientid : patientids) {
			AdmissionEO admissionObj = admissionRepositoryRef.findByPatientid(patientid);
			admissionObj.setStatus("ADMITTED");
			admissionRepositoryRef.save(admissionObj);
			
			WardsEO wardObj = wardsRepositoryRef.findByWardnumber(admissionObj.getWardnumber());
			wardObj.setStatus("OCCUPIED");
			wardsRepositoryRef.save(wardObj);
		}
	}	
	  /**
     * Rejects admission requests for a list of patient IDs.
     *
     * @param patientids A list of patient IDs for admission requests to reject.
     */
	@PostMapping("/rejectpatientrequests")
	@CrossOrigin
	public void rejectAdmissionRequest(@RequestBody List<String> patientids){
		
		for (String patientid : patientids) {
			AdmissionEO admissionObj = admissionRepositoryRef.findByPatientid(patientid);
			admissionObj.setStatus("REJECTED");
			admissionRepositoryRef.save(admissionObj);
			
//			WardsEO wardObj = wardsRepositoryRef.findByWardnumber(admissionObj.getWardnumber());
//			wardObj.setStatus("VACANT");
//			wardsRepositoryRef.save(wardObj);
		}
	}	
	 /**
     * Retrieves admission details for a specific patient ID.
     *
     * @param patientid The ID of the patient.
     * @return The AdmissionEO object representing the admission details, or null if not found.
     */
	@GetMapping("/getAdmissionById/{patientid}")
	@CrossOrigin
	public AdmissionEO isExistingPatient(@PathVariable("patientid") String patientid){
		AdmissionEO admissionObj = admissionRepositoryRef.findByPatientid(patientid);

		
//		if(admissionObj!=null && admissionObj.getStatus().equals("ADMITTED")){
		if(admissionObj!=null){
			return admissionObj;
		}
		else{
			return null;
		}
	}
}
