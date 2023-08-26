package application.atds.users;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
/**
 * Entity class representing user data stored in the database.
 */
@Document(collection="users")
public class UsersEO {

	@Id
	private String _id;
	
	private String userid;
	private String password;
	private String role;
	private String insuranceid;
	 /**
     * Constructor for creating a new instance of UsersEO.
     *
     * @param _id         The ID of the user.
     * @param userid      The user ID of the user.
     * @param password    The password of the user.
     * @param role        The role of the user.
     * @param insuranceid The insurance ID associated with the user.
     */
	public UsersEO(String _id, String userid, String password, String role, String insuranceid) {
		super();
		this._id = _id;
		this.userid = userid;
		this.password = password;
		this.role = role;
		this.insuranceid = insuranceid;
	}
	 /**
     * Retrieves the ID of the user.
     *
     * @return The ID of the user.
     */
    public String get_id() {
        return _id;
    }

    /**
     * Sets the ID of the user.
     *
     * @param _id The ID to set for the user.
     */
    public void set_id(String _id) {
        this._id = _id;
    }

    /**
     * Retrieves the user ID of the user.
     *
     * @return The user ID of the user.
     */
    public String getUserid() {
        return userid;
    }

    /**
     * Sets the user ID of the user.
     *
     * @param userid The user ID to set for the user.
     */
    public void setUserid(String userid) {
        this.userid = userid;
    }

    /**
     * Retrieves the password of the user.
     *
     * @return The password of the user.
     */
    public String getPassword() {
        return password;
    }

    /**
     * Sets the password of the user.
     *
     * @param password The password to set for the user.
     */
    public void setPassword(String password) {
        this.password = password;
    }

    /**
     * Retrieves the role of the user.
     *
     * @return The role of the user.
     */
    public String getRole() {
        return role;
    }

    /**
     * Sets the role of the user.
     *
     * @param role The role to set for the user.
     */
    public void setRole(String role) {
        this.role = role;
    }

    /**
     * Retrieves the insurance ID associated with the user.
     *
     * @return The insurance ID associated with the user.
     */
    public String getInsuranceid() {
        return insuranceid;
    }

    /**
     * Sets the insurance ID associated with the user.
     *
     * @param insuranceid The insurance ID to set for the user.
     */
    public void setInsuranceid(String insuranceid) {
        this.insuranceid = insuranceid;
    }

    /**
     * Default constructor for UsersEO.
     */
    public UsersEO() {
        // Default constructor
    }

    /**
     * Generates a string representation of the UsersEO object.
     *
     * @return A string containing user information.
     */
    @Override
    public String toString() {
        return "UsersEO [_id=" + _id + ", userid=" + userid + ", password=" + password + ", role=" + role
                + ", insuranceid=" + insuranceid + "]";
    }
	
	
}
