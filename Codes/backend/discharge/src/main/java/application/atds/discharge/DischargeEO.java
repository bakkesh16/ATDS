package application.atds.discharge;

import java.util.Arrays;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
/**
 * Represents a discharge entity in the system.
 */
@Document(collection="admission")
public class DischargeEO {

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
	private String dischargedate;
	private String billamount;
	private Byte[] billimage;
	
	/**
     * Constructs a new DischargeEO object with the provided details.
     *
     * @param id The unique ID of the discharge.
     * @param patientid The ID of the patient associated with the discharge.
     * @param insuranceid The ID of the insurance associated with the discharge.
     * @param name The name of the patient.
     * @param age The age of the patient.
     * @param gender The gender of the patient.
     * @param admissiondate The admission date of the patient.
     * @param mobilenumber The mobile number of the patient.
     * @param address The address of the patient.
     * @param wardnumber The number of the ward the patient was admitted to.
     * @param status The status of the discharge.
     * @param dischargedate The date of discharge.
     * @param billamount The bill amount for the discharge.
     * @param billimage The image of the bill (as a Byte array).
     */
	public DischargeEO(String id, String patientid, String insuranceid, String name, String age, String gender,
			String admissiondate, String mobilenumber, String address, String wardnumber, String status,
			String dischargedate, String billamount, Byte[] billimage) {
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
		this.dischargedate = dischargedate;
		this.billamount = billamount;
		this.billimage = billimage;
	}
	 /**
     * Default constructor for DischargeEO.
     */
	public DischargeEO() {
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


	public String getDischargedate() {
		return dischargedate;
	}


	public void setDischargedate(String dischargedate) {
		this.dischargedate = dischargedate;
	}


	public String getBillamount() {
		return billamount;
	}


	public void setBillamount(String billamount) {
		this.billamount = billamount;
	}


	public Byte[] getBillimage() {
		return billimage;
	}


	public void setBillimage(Byte[] billimage) {
		this.billimage = billimage;
	}

	@Override
	public String toString() {
		return "DischargeEO [id=" + id + ", patientid=" + patientid + ", insuranceid=" + insuranceid + ", name=" + name
				+ ", age=" + age + ", gender=" + gender + ", admissiondate=" + admissiondate + ", mobilenumber="
				+ mobilenumber + ", address=" + address + ", wardnumber=" + wardnumber + ", status=" + status
				+ ", dischargedate=" + dischargedate + ", billamount=" + billamount + ", billimage="
				+ Arrays.toString(billimage) + "]";
	}
	
}
