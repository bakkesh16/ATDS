package application.atds.users;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
/**
 * Implementation class for the UsersService interface.
 */
@Service
public class UsersServiceImpl implements UsersService {
    
	@Autowired
	private UsersRepository usersRepositoryRef;
	/**
     * Adds a new user to the database.
     *
     * @param userObj The UsersEO object containing user information to be added.
     */
	@Override
	public void addUser(UsersEO userObj) {
		// TODO Auto-generated method stub
		usersRepositoryRef.save(userObj);
	}
	 /**
     * Retrieves a user object based on the provided user ID.
     *
     * @param userid The user ID of the user to retrieve.
     * @return The UsersEO object representing the user.
     */
	@Override
	public UsersEO getUserObj(String userid) {
		// TODO Auto-generated method stub
		return usersRepositoryRef.findByUserid(userid);
	}

	

}
