package application.atds.insurance;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * Represents an insurance entity in the system.
 */
@Document(collection = "insurance")
public class InsuranceEO {

	@Id
	private String id;
	private String insuranceid;
	private String status;

	/**
	 * Constructs a new InsuranceEO object with the provided details.
	 *
	 * @param id
	 *            The unique ID of the insurance.
	 * @param insuranceid
	 *            The identifier associated with the insurance.
	 * @param status
	 *            The status of the insurance.
	 */
	public InsuranceEO(String id, String insuranceid, String status) {
		super();
		this.id = id;
		this.insuranceid = insuranceid;
		this.status = status;
	}
	 /**
     * Retrieves the unique ID of the insurance.
     *
     * @return The ID of the insurance.
     */
	public String getId() {
		return id;
	}
	/**
     * Sets the unique ID of the insurance.
     *
     * @param id The ID of the insurance.
     */
	public void setId(String id) {
		this.id = id;
	}
	 /**
     * Retrieves the identifier associated with the insurance.
     *
     * @return The insurance identifier.
     */
	public String getInsuranceid() {
		return insuranceid;
	}
	 /**
     * Sets the identifier associated with the insurance.
     *
     * @param insuranceid The insurance identifier.
     */
	public void setInsuranceid(String insuranceid) {
		this.insuranceid = insuranceid;
	}
	/**
     * Retrieves the status of the insurance.
     *
     * @return The status of the insurance.
     */
	public String getStatus() {
		return status;
	}
	  /**
     * Sets the status of the insurance.
     *
     * @param status The status of the insurance.
     */
	public void setStatus(String status) {
		this.status = status;
	}
	 /**
     * Default constructor for InsuranceEO.
     */
	public InsuranceEO() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "InsuranceEO [id=" + id + ", insuranceid=" + insuranceid + ", status=" + status + "]";
	}

}
