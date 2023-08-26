package application.atds.users;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
/**
 * Controller class for managing user-related operations.
 */
@RestController
public class UsersController {

	@Autowired
	private UsersServiceImpl usersServiceImplRef;

    /**
     * Retrieves user information based on the provided user ID.
     *
     * @param userid The ID of the user to retrieve information for.
     * @return A UserDTO containing the user's password, role, and insurance ID.
     */
	@RequestMapping(value = { "/getuser/{userid}" })
	@CrossOrigin
	public UserDTO getRoleByID(@PathVariable("userid") String userid) {
		try {
			UsersEO userobj = usersServiceImplRef.getUserObj(userid);

			UserDTO UsersObjresp = new UserDTO();

			UsersObjresp.setPassword(userobj.getPassword());
			UsersObjresp.setRole(userobj.getRole());
			UsersObjresp.setInsuranceid(userobj.getInsuranceid());

			return UsersObjresp;

		} catch (Exception e) {
			// TODO: handle exception
			return null;
		}
	}
    /**
     * Creates a new user based on the provided user object.
     *
     * @param userObj The UsersEO object containing user information to be added.
     */
	@PostMapping("/adduser")
	@CrossOrigin
	public void createUser(@RequestBody UsersEO userObj) {
		usersServiceImplRef.addUser(userObj);
	}
}
