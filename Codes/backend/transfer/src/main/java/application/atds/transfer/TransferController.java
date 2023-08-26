package application.atds.transfer;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
/**
 * Controller class for handling Transfer related endpoints.
 */
@RestController
public class TransferController {

	@Autowired(required=true)
	private WardsRepository wardsRepositoryRef;
	
	@Autowired(required=true)
	private TransferService transferServiceRef; 
	
	@Autowired(required=true)
	private TransferRepository transferRepositoryRef;
	
	@Autowired(required=true)
	private AdmissionRepository admissionRepositoryRef; 
	 /**
     * Adds a new transfer request.
     *
     * @param transferObj The TransferEO object representing the transfer request.
     * @return A message indicating the success or failure of the request.
     */
	@PostMapping("/addtransferrequest")
	@CrossOrigin
	public String addTransfer(@RequestBody TransferEO transferObj){
		
		return transferServiceRef.addTransferRequest(transferObj);
	}
	 /**
     * Retrieves all transfer requests with the status "REQUESTED".
     *
     * @return A list of TransferEO objects representing requested transfers.
     */
	@GetMapping("/findalltransferrequestbystatus")
	@CrossOrigin
	public List<TransferEO> findAllTransferRequestByPatientid(){
		return transferServiceRef.findAllTransferRequestByStatus("REQUESTED");
	}
	 /**
     * Retrieves all transfer requests for a specific patient.
     *
     * @param patientid The ID of the patient.
     * @return A list of TransferEO objects representing transfers for the patient.
     */
	
	@GetMapping("/findalltransferrequestbyid/{patientid}")
	@CrossOrigin
	public List<TransferEO> findAllTransferRequestByPatientid(@PathVariable("patientid") String patientid){
		return transferServiceRef.findAllTransferRequestByPatientid(patientid);
	}
	 /**
     * Approves transfer requests for a list of patient IDs.
     *
     * @param patientids The list of patient IDs whose transfer requests will be approved.
     */
	@PostMapping("/approvetransfers")
	@CrossOrigin
	public void approveTransferRequest(@RequestBody List<String> patientids){
		for(String patientid : patientids){
			//get the transfer object
			TransferEO transferObj = transferRepositoryRef.findByPatientid(patientid);
			
			WardsEO wardObj = wardsRepositoryRef.findByWardnumber(transferObj.getCurrentwardnumber());
			wardObj.setStatus("VACANT");
			wardsRepositoryRef.save(wardObj);
			
			wardObj = wardsRepositoryRef.findByWardnumber(transferObj.getRequestedwardnumber());
			wardObj.setStatus("OCCUPIED");
			wardsRepositoryRef.save(wardObj);
			
			AdmissionEO admissionObj = admissionRepositoryRef.findByPatientid(transferObj.getPatientid());
			admissionObj.setWardnumber(transferObj.getRequestedwardnumber());
			admissionRepositoryRef.save(admissionObj);
			
			transferObj.setStatus("APPROVED");
			transferRepositoryRef.save(transferObj);
		}
	}
	 /**
     * Rejects transfer requests for a list of patient IDs.
     *
     * @param patientids The list of patient IDs whose transfer requests will be rejected.
     */
	@PostMapping("/rejecttransfers")
	@CrossOrigin
	public void rejectTransferRequest(@RequestBody List<String> patientids){
		for(String patientid : patientids){
			//get the transfer object
			TransferEO transferObj = transferRepositoryRef.findByPatientid(patientid);
			transferObj.setStatus("REJECTED");
			transferRepositoryRef.save(transferObj);
		}
	}
	
}
