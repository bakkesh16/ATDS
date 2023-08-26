import React from "react";
import Login from "./Login/Login";
import PatientHome from "./Patient/PatientHome";
import HospitalAdminHome from "./HospitalAdmin/HospitalAdminHome";
import InsuranceAdminHome from "./InsuranceAdmin/InsuranceAdminHome";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Bookward from "./Patient/Bookward";
import ViewRequests from "./Patient/ViewRequests";
import RequestWardTransfer from "./Patient/WardTransferRequest";
import AdmissionRequests from "./HospitalAdmin/AdmissionRequests";
import AvailableWards from "./HospitalAdmin/AvailableWards";
import DischargePatient from "./HospitalAdmin/DischargePatient";
import WardTransfers from "./HospitalAdmin/WardTransfers";
import Discharges from "./InsuranceAdmin/Discharges";
import VerifyInsurance from "./InsuranceAdmin/VerifyInsurance";
import Signup from "./Signup/Signup";
import PatientDischarge from "./InsuranceAdmin/DischargePatient";
import NonInsuranceDischarge from "./HospitalAdmin/NonInsuranceDischarge";
import HospitalChatPage from "./HospitalAdmin/HospitalChat";
import InsuranceChatPage from "./InsuranceAdmin/InsuranceChat";

export default function Routing() {

    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Login />}></Route>
                <Route exact path="/signup" element={<Signup />}></Route>
                <Route exact path="/PatientHome" element={<PatientHome />}></Route>
                <Route exact path="/HospitalAdminHome" element={<HospitalAdminHome />}></Route>
                <Route exact path="/InsuranceAdminHome" element={<InsuranceAdminHome />}></Route>
                <Route exact path="/bookward" element={<Bookward />}></Route>
                <Route exact path="/viewrequests" element={<ViewRequests />}></Route>
                <Route exact path="/requestwardtransfer" element={<RequestWardTransfer />}></Route>
                <Route exact path="/admissionrequests" element={<AdmissionRequests />}></Route>
                <Route exact path="/availablewards" element={<AvailableWards />}></Route>
                <Route exact path="/dischargepatient" element={<DischargePatient />}></Route>
                <Route exact path="/wardtransfers" element={<WardTransfers />}></Route>
                <Route exact path="/discharges" element={<Discharges />}></Route>
                <Route exact path="/verifyinsurance" element={<VerifyInsurance />}></Route>
                <Route exact path="/patientdischarge" element={<PatientDischarge />}></Route>
                <Route exact path="/noninsurancedischarge" element={<NonInsuranceDischarge />}></Route>
                <Route exact path="/hospitalchat" element={<HospitalChatPage />}></Route>
                <Route exact path="/insurancechat" element={<InsuranceChatPage />}></Route>
            </Routes>
        </Router>
    )

}