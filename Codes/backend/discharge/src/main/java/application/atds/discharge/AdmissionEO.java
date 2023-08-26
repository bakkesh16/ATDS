package application.atds.discharge;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
/**
 * Represents an admission entity in the system.
 */
@Document(collection="admission")
public class AdmissionEO {

	@Id
	private String id;
	
	private String patientid;
	private String insuranceid;
	private String name;
	private String age;
	private String gender;
	private String admissiondate;
	private String mobilenumber;
	private String address;
	private String wardnumber;
	private String status;
	/**
     * Constructs a new AdmissionEO object with the provided details.
     *
     * @param id The unique ID of the admission.
     * @param patientid The ID of the patient.
     * @param insuranceid The ID of the insurance associated with the patient.
     * @param name The name of the patient.
     * @param age The age of the patient.
     * @param gender The gender of the patient.
     * @param admissiondate The date of admission.
     * @param mobilenumber The mobile number of the patient.
     * @param address The address of the patient.
     * @param wardnumber The number of the ward the patient is admitted to.
     * @param status The status of the admission (e.g., ADMITTED, REJECTED).
     */
	public AdmissionEO(String id, String patientid, String insuranceid, String name, String age, String gender,
			String admissiondate, String mobilenumber, String address, String wardnumber, String status) {
		super();
		this.id = id;
		this.patientid = patientid;
		this.insuranceid = insuranceid;
		this.name = name;
		this.age = age;
		this.gender = gender;
		this.admissiondate = admissiondate;
		this.mobilenumber = mobilenumber;
		this.address = address;
		this.wardnumber = wardnumber;
		this.status = status;
	}
	
	 /**
     * Default constructor for AdmissionEO.
     */

	public AdmissionEO() {
		super();
		// TODO Auto-generated constructor stub
	}



	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getPatientid() {
		return patientid;
	}

	public void setPatientid(String patientid) {
		this.patientid = patientid;
	}

	public String getInsuranceid() {
		return insuranceid;
	}

	public void setInsuranceid(String insuranceid) {
		this.insuranceid = insuranceid;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAge() {
		return age;
	}

	public void setAge(String age) {
		this.age = age;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getAdmissiondate() {
		return admissiondate;
	}

	public void setAdmissiondate(String admissiondate) {
		this.admissiondate = admissiondate;
	}

	public String getMobilenumber() {
		return mobilenumber;
	}

	public void setMobilenumber(String mobilenumber) {
		this.mobilenumber = mobilenumber;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getWardnumber() {
		return wardnumber;
	}

	public void setWardnumber(String wardnumber) {
		this.wardnumber = wardnumber;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
	
	
	
	
	
}
