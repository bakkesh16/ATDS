package application.atds.users;
/**
 * Data Transfer Object (DTO) class representing user information.
 */
public class UserDTO {

	private String password;
	private String role;
	private String insuranceid;
	  /**
     * Constructor for creating a new instance of UserDTO.
     *
     * @param password    The password of the user.
     * @param role        The role of the user.
     * @param insuranceid The insurance ID associated with the user.
     */
	public UserDTO(String password, String role, String insuranceid) {
		super();
		this.password = password;
		this.role = role;
		this.insuranceid = insuranceid;
	} /**
     * Default constructor for UserDTO.
     */
	public UserDTO() {
		super();
		// TODO Auto-generated constructor stub
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
	
}
