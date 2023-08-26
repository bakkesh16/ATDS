package application.atds.discharge;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
/**
 * Implementation of the DischargeService interface for managing discharge-related operations.
 */
@Service
public class DischargeServiceImpl implements DischargeService {

	@Autowired
	private DischargeRepository dischargeRepositoryRef;
	
	@Autowired
	private JavaMailSender javaMailSender;
	 /**
     * Discharges a patient with the provided discharge details.
     *
     * @param dischargeObj The DischargeEO object representing the discharge details.
     */
	public void dischargePatient(DischargeEO dischargeObj){
		dischargeRepositoryRef.save(dischargeObj);
	}

	@Override
	public List<DischargeEO> allPatientDischarges() {
		// TODO Auto-generated method stub
		return dischargeRepositoryRef.findAllByStatus("DISCHARGED");
	}

	@Override
	public List<DischargeEO> allPatientCheckouts() {
		// TODO Auto-generated method stub
		return dischargeRepositoryRef.findAllByStatus("CHECKOUT");
	}

	@Override
	public List<DischargeEO> cashDischarge() {
		// TODO Auto-generated method stub
		return dischargeRepositoryRef.findAllByStatus("INSURANCE DENIED");
	}

	@Override
	public void sendEmail(String to, String subject, String text) {
		// TODO Auto-generated method stub
		SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(to);
        message.setSubject(subject);
        message.setText(text);
        javaMailSender.send(message);
	}
}
