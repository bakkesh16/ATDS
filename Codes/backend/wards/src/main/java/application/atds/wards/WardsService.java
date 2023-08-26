package application.atds.wards;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
/**
 * Service interface for managing ward-related operations.
 */
public interface WardsService {
	  /**
     * Retrieves a list of all vacant wards.
     *
     * @return A list of all vacant wards.
     */
	public List<WardsEO> findAllVacantWards();
	
}
