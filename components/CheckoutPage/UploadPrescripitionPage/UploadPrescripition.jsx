import React from "react";

import uploadIcon from "@/assets/icons/upload-green.svg"
import Image from "next/image";

import "./UploadPrescription.scss"
import Button from "@/components/Button/Button";

const UploadPrescripition = () => {
  return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[37px]">
        <div className="px-[20px] component-wrapper ">
            <div className="flex flex-col gap-[23px] items-center justify-center ">
                <div className="bg-white py-[40px] px-[25px] w-[200px] h-[200px] relative custom-shadow rounded-[10px]">
                    <Image src={uploadIcon} alt="upload" width={145} height={121} className="object-contain" />
                </div>
                <div className="text-center">
                    <p className="text-[15px] font-[700] mb-[10px]">Drag and drop or click here to upload prescription</p>
                    <p className="text-[#000000B2] font-[500]">JPEG, JPG, PNG & PDF supported. Maximum file size – 6MB</p>
                </div>

            </div>
                <div className="upload-form mt-[35px]">
                    <form className="space-y-[12px]">
                        <input className="" placeholder="Name" />
                        <input className="" placeholder="Phone" />
                        <input className="" placeholder="Email" />
                        <input className="" placeholder="City" />
                        <input className="" placeholder="Address" />
                        <textarea className="" placeholder="Message" />

                        <div className="flex justify-center items-center">
                            <div className="w-[284px] ">
                                <Button text="Upload Prescription" color="second" />
                            </div>
                        </div>
                    </form>
                </div>
        </div>

        <div className="px-[20px] component-wrapper">
            <p className="font-[600] text-[20px] mb-[20px]">Guide to Upload Prescription</p>
            <p className="step-details mb-[20px]"><span className="step-text">Step 1:</span> Click on the image Upload prescriptions and select a picture of your prescription from your computer.</p>
            
            <div className="flex items-center justify-center mb-[20px]">
                <div className="bg-white py-[22px] px-[15px] w-[113px] h-[113px] relative custom-shadow rounded-[10px]">
                    <Image src={uploadIcon} alt="upload" width={145} height={121} className="object-contain" />
                </div>
            </div>

            <p className="step-details">
                <span className="step-text">Step 2:</span> Complete the information in the box Your name and Your phone number. This will make it easier for the pharmacy consultant to get back to you and provide more detailed information.
                After completing the above two steps, the system will return a notice confirming successful file upload. Please wait a short time until the pharmacy staff call and advise you more details
            </p>

            <p className="font-[600] mt-[44px] mb-[18px]">Note for valid prescription</p>

            <ul className="valid-list space-y-[10px] ps-[40px]">
                <li>Don’t crop out any part of the image</li>
                <li>Avoid blurred image</li>
                <li>Include details of doctor and patient + clinic visit date</li>
                <li>Medicines will be dispensed as per prescription</li>
                <li>Supported files type: jpeg , jpg , png , pdf</li>
                <li>Maximum allowed file size: 6MB</li>
            </ul>

            <p className="font-[600] mt-[50px]">AGZAKHANTY – Simplifying Healthcare, Impacting Lives</p>
        </div>
      </div>
  );
};

export default UploadPrescripition;
