package application.atds.transfer;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
/**
 * Entity class representing a transfer request.
 */
@Document(collection="transfer")
public class TransferEO {

	@Id
	private String id;
	
	private String patientid;
	private String currentwardnumber;
	private String requestedwardnumber;
	private String status;
	
	public TransferEO(String id, String patientid, String currentwardnumber, String requestedwardnumber,
			String status) {
		super();
		this.id = id;
		this.patientid = patientid;
		this.currentwardnumber = currentwardnumber;
		this.requestedwardnumber = requestedwardnumber;
		this.status = status;
	}
	/**
     * Constructor to create a TransferEO object.
     *
     * @param id                The ID of the transfer request.
     * @param patientid         The ID of the patient requesting the transfer.
     * @param currentwardnumber The ward number from which the patient is transferring.
     * @param requestedwardnumber The ward number to which the patient is requesting a transfer.
     * @param status            The status of the transfer request.
     */
	public TransferEO() {
		super();
		// TODO Auto-generated constructor stub
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getPatientid() {
		return patientid;
	}

	public void setPatientid(String patientid) {
		this.patientid = patientid;
	}

	public String getCurrentwardnumber() {
		return currentwardnumber;
	}

	public void setCurrentwardnumber(String currentwardnumber) {
		this.currentwardnumber = currentwardnumber;
	}

	public String getRequestedwardnumber() {
		return requestedwardnumber;
	}

	public void setRequestedwardnumber(String requestedwardnumber) {
		this.requestedwardnumber = requestedwardnumber;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "TransferEO [id=" + id + ", patientid=" + patientid + ", currentwardnumber=" + currentwardnumber
				+ ", requestedwardnumber=" + requestedwardnumber + ", status=" + status + "]";
	}
	
	
}
