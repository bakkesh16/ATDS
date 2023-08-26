package application.atds.discharge;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
/**
 * Represents a ward entity in the system.
 */
@Document(collection="wards")
public class WardsEO {

	@Id
	private String id;
	private String wardnumber;
	private String wardtype;
	private String status;
	 /**
     * Constructs a new WardsEO object with the provided details.
     *
     * @param id The unique ID of the ward.
     * @param wardnumber The number of the ward.
     * @param wardtype The type of the ward.
     * @param status The status of the ward.
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
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getWardnumber() {
		return wardnumber;
	}
	public void setWardnumber(String wardnumber) {
		this.wardnumber = wardnumber;
	}
	public String getWardtype() {
		return wardtype;
	}
	public void setWardtype(String wardtype) {
		this.wardtype = wardtype;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	
	
}
