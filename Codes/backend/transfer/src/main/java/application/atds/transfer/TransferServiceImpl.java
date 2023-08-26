package application.atds.transfer;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TransferServiceImpl implements TransferService {

	@Autowired(required=true)
	private TransferRepository transferRepositoryRef;
	
	@Autowired(required=true)
	private AdmissionRepository admissionRepositoryRef;  
	/**
     * Adds a transfer request for a patient.
     *
     * @param transferObj The TransferEO object representing the transfer request.
     * @return A message indicating the success or failure of the transfer request.
     */
	@Override
	public String addTransferRequest(TransferEO transferObj) {
		// TODO Auto-generated method stub
		List<AdmissionEO> admissionList = admissionRepositoryRef.findAllByPatientid(transferObj.getPatientid());
	
		for(AdmissionEO obj : admissionList){
			if(obj.getStatus().equals("ADMITTED")){
				
				System.out.println(obj.getWardnumber());
				
				transferObj.setCurrentwardnumber(obj.getWardnumber());
				break;
			}
		}
		transferObj.getCurrentwardnumber();
		if(transferObj.getCurrentwardnumber().length()>0){
			transferRepositoryRef.save(transferObj);
			return "Successfully requested for transfer.";
		}
		else 
			return "No admission history found.";
	}
	 /**
     * Retrieves all transfer requests associated with a specific patient.
     *
     * @param patientid The ID of the patient.
     * @return A list of TransferEO objects representing the transfer requests.
     */
	@Override
	public List<TransferEO> findAllTransferRequestByPatientid(String patientid) {
		// TODO Auto-generated method stub
		return transferRepositoryRef.findAllByPatientid(patientid);
	}
	/**
     * Retrieves all transfer requests with a specific status.
     *
     * @param status The status of the transfer requests to retrieve.
     * @return A list of TransferEO objects with the specified status.
     */
	@Override
	public List<TransferEO> findAllTransferRequestByStatus(String status) {
		// TODO Auto-generated method stub
		return transferRepositoryRef.findAllByStatus(status);
	}
}
