package application.atds.insurance;
/**
 * Service interface for managing insurance-related operations.
 */
public interface InsuranceService {
	 /**
     * Adds or modifies an insurance entity.
     *
     * @param insuranceObj The InsuranceEO object representing the insurance details.
     */
	public void addInsurance(InsuranceEO InsuranceObj);
	  /**
     * Retrieves an insurance entity by its insurance identifier.
     *
     * @param insuranceid The insurance identifier to search for.
     * @return The InsuranceEO object associated with the provided insurance identifier.
     */
	public InsuranceEO findInsuranceById(String insuranceid);
	 /**
     * Changes the status of an insurance entity.
     *
     * @param insuranceObj The InsuranceEO object representing the insurance details to update.
     */
	public void changeStatus(InsuranceEO InsuranceObj);
	
}
