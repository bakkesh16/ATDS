package application.atds.insurance;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
/**
 * Implementation of the InsuranceService interface.
 */
@Service
public class InsuranceServiceImpl implements InsuranceService {
	
	@Autowired(required=true)
	InsuranceRepository insuranceRepositoryRef;
	 /**
     * Adds or modifies an insurance entity.
     *
     * @param insuranceObj The InsuranceEO object representing the insurance details.
     */
	@Override
	public void addInsurance(InsuranceEO InsuranceObj) {
		// TODO Auto-generated method stub
		insuranceRepositoryRef.save(InsuranceObj);
	}
	/**
     * Retrieves an insurance entity by its insurance identifier.
     *
     * @param insuranceid The insurance identifier to search for.
     * @return The InsuranceEO object associated with the provided insurance identifier.
     */
	@Override
	public InsuranceEO findInsuranceById(String insuranceid) {
		// TODO Auto-generated method stub
		return insuranceRepositoryRef.findByInsuranceid(insuranceid);
	}
	/**
     * Changes the status of an insurance entity.
     *
     * @param insuranceObj The InsuranceEO object representing the insurance details to update.
     */
	@Override
	public void changeStatus(InsuranceEO InsuranceObj) {
		// TODO Auto-generated method stub

	}

}
