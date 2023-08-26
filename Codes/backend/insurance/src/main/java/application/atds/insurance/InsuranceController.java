package application.atds.insurance;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
/**
 * Controller class for handling insurance-related operations.
 */
@RestController
public class InsuranceController {

	@Autowired(required=true)
	InsuranceService insuranceServiceRef;
	 /**
     * Adds or modifies an insurance record.
     *
     * @param insuranceObj The InsuranceEO object representing the insurance details.
     */
	@PostMapping("/add-modify")
	@CrossOrigin
	public void addModifyInsurance(@RequestBody InsuranceEO insuranceObj ){
		insuranceServiceRef.addInsurance(insuranceObj);
	}
	/**
     * Retrieves an insurance record by its ID.
     *
     * @param insuranceid The ID of the insurance to retrieve.
     * @return The InsuranceEO object associated with the provided ID.
     */
	@GetMapping("/findinsurance/{insuranceid}")
	@CrossOrigin
    public InsuranceEO findInsuranceById(@PathVariable("insuranceid") String insuranceid){
    	return insuranceServiceRef.findInsuranceById(insuranceid);
    }
}
