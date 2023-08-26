package application.atds.discharge;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

/**
 * Controller class responsible for handling discharge-related operations.
 */
@RestController
public class DischargeController {
	
	@Autowired
	private AdmissionRepository admissionRepositoryRef;
	
	@Autowired
	private DischargeService dischargeServiceRef;
	
	@Autowired
	private WardsRepository wardsRepositoryRef;
	
	@Autowired
	private DischargeRepository dischargeRepositoryRef;
	/**
	 * Retrieves admission details for a specific patient ID.
	 *
	 * @param patientid The ID of the patient.
	 * @return The AdmissionEO object representing the admission details, or null if not found.
	 */
	@GetMapping("/getadmissiondetails/{patientid}")
	@CrossOrigin
	public AdmissionEO findAdmissionDetailsById(@PathVariable("patientid") String patientid){
		
		List<AdmissionEO> admissionList = admissionRepositoryRef.findAllByPatientid(patientid);
		
		AdmissionEO admissionObj = null;
		
		for(AdmissionEO obj : admissionList){
			if(obj.getStatus().equals("ADMITTED")){
				admissionObj = obj;
				break;
			}
		}
		
		return admissionObj;
	}
	/**
	 * Discharges a patient.
	 *
	 * @param dischargeObj The DischargeEO object representing the discharge details.
	 */
	@PostMapping("/checkoutPatient")
	@CrossOrigin
	public void dischargePatient(@RequestBody DischargeEO dischargeObj){
		
//		System.out.println(dischargeObj);
		
		//admission deleted
		AdmissionEO adObj = admissionRepositoryRef.findByPatientid(dischargeObj.getPatientid());
		admissionRepositoryRef.delete(adObj);
		
		//discharge created
		dischargeServiceRef.dischargePatient(dischargeObj);
		
		
		//vacate the ward
		WardsEO wardRef = wardsRepositoryRef.findByWardnumber(dischargeObj.getWardnumber());
		wardRef.setStatus("VACANT");
		wardsRepositoryRef.save(wardRef);	
	}
	/**
	 * Retrieves a list of all discharged patient details.
	 *
	 * @return A list of DischargeEO objects representing the discharged patients.
	 */
	@GetMapping("/alldischargedetails")
	@CrossOrigin
	public List<DischargeEO> allDischarges(){
		return dischargeServiceRef.allPatientDischarges();
	}
	/**
	 * Retrieves a list of all checked-out patient details.
	 *
	 * @return A list of DischargeEO objects representing the checked-out patients.
	 */
	@GetMapping("/allcheckoutdetails")
	@CrossOrigin
	public List<DischargeEO> allCheckouts(){
		return dischargeServiceRef.allPatientCheckouts();
	}
	/**
	 * Approves patient discharges for a list of patient IDs.
	 *
	 * @param patientids A list of patient IDs for discharge approvals.
	 */
	@PostMapping("/approvepatientdischarges")
	@CrossOrigin
	public void approveAdmissionRequest(@RequestBody List<String> patientids){
		String subject = "Health Sure Hospital Bill";
		String text = "Hello, \n This is the discharge bill for you treatment at HealthSure hospitals.\n BillAmount : ";
		for (String patientid : patientids) {
			DischargeEO Obj = dischargeRepositoryRef.findByPatientid(patientid);
			Obj.setStatus("DISCHARGED");
			dischargeRepositoryRef.save(Obj);
			text+=Obj.getBillamount();
			//send mail to patientids using mail api
			dischargeServiceRef.sendEmail(patientid, subject, text);
		}
	}	
	/**
	 * Rejects patient discharges for a list of patient IDs.
	 *
	 * @param patientids A list of patient IDs for discharge rejections.
	 */
	@PostMapping("/rejectpatientdischarges")
	@CrossOrigin
	public void rejectAdmissionRequest(@RequestBody List<String> patientids){
		
		for (String patientid : patientids) {
			DischargeEO Obj = dischargeRepositoryRef.findByPatientid(patientid);
			Obj.setStatus("INSURANCE DENIED");
			dischargeRepositoryRef.save(Obj);
			
//			WardsEO wardObj = wardsRepositoryRef.findByWardnumber(admissionObj.getWardnumber());
//			wardObj.setStatus("VACANT");
//			wardsRepositoryRef.save(wardObj);
		}
	}	
	/**
	 * Retrieves a list of discharged patients who paid by cash.
	 *
	 * @return A list of DischargeEO objects representing cash-discharged patients.
	 */
	@GetMapping("/cashDischarge")
	@CrossOrigin
	public List<DischargeEO> cashDischarge(){
		return dischargeServiceRef.cashDischarge();
	}
}
