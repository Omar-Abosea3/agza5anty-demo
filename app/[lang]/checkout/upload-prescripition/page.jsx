import UploadPrescripition from "@/components/CheckoutPage/UploadPrescripitionPage/UploadPrescripition";
import Container from "@/components/Container/Container";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import React from "react";

const UploadPrescriptionPage = () => {
  return (
    <div>
      <div className="bg-pattern">
        <Container>
            <div className="page-container">
                <SectionTitle title="UPLOAD PRESCRIPTION" position="start" />
                <UploadPrescripition />
            </div>
        </Container>
      </div>
    </div>
  );
};

export default UploadPrescriptionPage;
