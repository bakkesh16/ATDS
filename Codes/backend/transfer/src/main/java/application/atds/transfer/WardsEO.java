package application.atds.transfer;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
/**
 * Entity class representing a ward in the application.
 */
@Document(collection="wards")
public class WardsEO {

	@Id
	private String id;
	private String wardnumber;
	private String wardtype;
	private String status;
	 /**
     * Constructor for creating a new instance of WardsEO.
     *
     * @param id         The ID of the ward.
     * @param wardnumber The number of the ward.
     * @param wardtype   The type of the ward.
     * @param status     The status of the ward.
     */
	public WardsEO(String id, String wardnumber, String wardtype, String status) {
		super();
		this.id = id;
		this.wardnumber = wardnumber;
		this.wardtype = wardtype;
		this.status = status;
	}
	 /**
     * Default constructor for WardsEO.
     */
	public WardsEO() {
		super();
		// TODO Auto-generated constructor stub
	}
	/**
     * Retrieves the ID of the ward.
    *
    * @return The ID of the ward.
    */
	public String getId() {
		return id;
	}public void setId(String id) {
        this.id = id;
    }

    /**
     * Retrieves the number of the ward.
     *
     * @return The number of the ward.
     */
    public String getWardnumber() {
        return wardnumber;
    }

    /**
     * Sets the number of the ward.
     *
     * @param wardnumber The number to set for the ward.
     */
    public void setWardnumber(String wardnumber) {
        this.wardnumber = wardnumber;
    }

    /**
     * Retrieves the type of the ward.
     *
     * @return The type of the ward.
     */
    public String getWardtype() {
        return wardtype;
    }

    /**
     * Sets the type of the ward.
     *
     * @param wardtype The type to set for the ward.
     */
    public void setWardtype(String wardtype) {
        this.wardtype = wardtype;
    }

    /**
     * Retrieves the status of the ward.
     *
     * @return The status of the ward.
     */
    public String getStatus() {
        return status;
    }

    /**
     * Sets the status of the ward.
     *
     * @param status The status to set for the ward.
     */
    public void setStatus(String status) {
        this.status = status;
    }
	
	
}
