package application.atds.users;
/**
 * Service interface for managing user-related operations.
 */
public interface UsersService {
	 /**
     * Adds a new user.
     *
     * @param userObj The UsersEO object containing user information to be added.
     */
	public void addUser(UsersEO userObj);
	/**
     * Retrieves a user object based on the provided user ID.
     *
     * @param userid The user ID of the user to retrieve.
     * @return The UsersEO object representing the user.
     */
	public UsersEO getUserObj(String userid);
}
