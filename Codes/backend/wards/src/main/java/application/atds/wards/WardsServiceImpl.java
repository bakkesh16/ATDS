package application.atds.wards;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
/**
 * Implementation class for the WardsService interface.
 */
@Service
public class WardsServiceImpl implements WardsService {

	@Autowired
	private WardsRepository wardsRepositoryRef;
	 /**
     * Retrieves a list of all vacant wards.
     *
     * @return A list of all vacant wards.
     */
	@Override
	public List<WardsEO> findAllVacantWards() {
		// TODO Auto-generated method stub
		return wardsRepositoryRef.findAllByStatus("VACANT");
	}

}
