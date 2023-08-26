import logo from './logo.svg';
import './App.css';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import PatientHome from './Patient/PatientHome';
import HospitalAdminHome from './HospitalAdmin/HospitalAdminHome';
import InsuranceAdminHome from './InsuranceAdmin/InsuranceAdminHome';
import Bookward from './Patient/Bookward';
import WardTransfer from './Patient/WardTransferRequest';
import ViewRequests from './Patient/ViewRequests';
import VerifyInsurance from './InsuranceAdmin/VerifyInsurance';
import Routing from './routing';
import AdmissionRequestsById from './Patient/admissionRequests';
import RomeChangeRequests from './Patient/RoomChangeRequests';
import ImageUpload from './HospitalAdmin/imageupload';





function App() {
  return (
  //  <Login></Login>
  //  <Signup></Signup>
  //  <PatientHome></PatientHome>
  //  <Bookward></Bookward> 
  //  <WardTransfer></WardTransfer> 
  //  <HospitalAdminHome></HospitalAdminHome>
  //  <InsuranceAdminHome></InsuranceAdminHome>
  // <ViewRequests></ViewRequests>
  // <VerifyInsurance></VerifyInsurance>
  <Routing></Routing>
  // <AdmissionRequestsById></AdmissionRequestsById>
  // <RomeChangeRequests></RomeChangeRequests>
  // <ImageUpload></ImageUpload>
  );
}

export default App;
