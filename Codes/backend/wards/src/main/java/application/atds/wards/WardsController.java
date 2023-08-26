package application.atds.wards;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
/**
 * Controller class for managing ward-related operations.
 */
@RestController
public class WardsController {

	@Autowired
	private WardsService wardsServiceRef;
	
	
	  /**
     * Retrieves a list of vacant wards.
     *
     * @return A list of vacant wards.
     */
	@RequestMapping("/getvacantwards")
	@CrossOrigin
	public List<WardsEO> getVacantWards(){
		return wardsServiceRef.findAllVacantWards();
	}
	 /**
     * Retrieves a set of vacant ward types.
     *
     * @return A set of vacant ward types.
     */
	@RequestMapping("/getvacantwardtypes")
	@CrossOrigin
	public Set<String> getvacantwardtypes(){
		List<WardsEO> vacantWards = wardsServiceRef.findAllVacantWards();
		
		Set<String> wardTypes = new HashSet<>();
		 
		for (WardsEO ward : vacantWards) {
	      
	    	  wardTypes.add(ward.getWardtype());
	      	
		}
		return wardTypes;
	}
	/**
     * Retrieves a list of vacant ward numbers based on the ward type.
     *
     * @param wardType The ward type to filter vacant wards.
     * @return A list of vacant ward numbers of the specified ward type.
     */
	@RequestMapping("/wardnumberson/{wardType}")
	@CrossOrigin
	public List<String> vacantWardNumbersOnWardType(@PathVariable("wardType") String wardType){
		List<WardsEO> vacantWards = wardsServiceRef.findAllVacantWards();
		
		List<String> wardTypeNumbers = new ArrayList<>();
		
		for (WardsEO ward : vacantWards) {
		      if((ward.getWardtype()).equals(wardType)){
		    	  wardTypeNumbers.add(ward.getWardnumber());
		      }		
			}
		return wardTypeNumbers;
	}
}
