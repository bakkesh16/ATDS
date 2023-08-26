package application.atds.discharge;

import java.util.List;
/**
 * Service interface for managing discharge-related operations.
 */
public interface DischargeService {
	 /**
     * Discharges a patient with the provided discharge details.
     *
     * @param dischargeObj The DischargeEO object representing the discharge details.
     */
	public void dischargePatient(DischargeEO dischargeObj);
	 /**
     * Retrieves a list of all discharged patient details.
     *
     * @return A list of DischargeEO objects representing the discharged patients.
     */
	public List<DischargeEO> allPatientDischarges();
	 /**
     * Retrieves a list of all checked-out patient details.
     *
     * @return A list of DischargeEO objects representing the checked-out patients.
     */
	public List<DischargeEO> allPatientCheckouts();
	  /**
     * Retrieves a list of discharged patients who paid by cash.
     *
     * @return A list of DischargeEO objects representing cash-discharged patients.
     */
	public List<DischargeEO> cashDischarge();
	/**
     * Sends an email to the specified recipient with the provided subject and text.
     *
     * @param to The email recipient.
     * @param subject The email subject.
     * @param text The email text.
     */
	public void sendEmail(String to, String subject, String text);
}
