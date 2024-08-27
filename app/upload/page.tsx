//page.tsx
"use client";
import React, { FC, useState } from "react";
import Heading from "../utils/Heading";
import { Header } from "../components/Header";
import { UploadComponent } from "../components/UploadComponent";
import { HowItWorksComponent } from "../components/HowItWorksComponent";
import Footer from "../components/Footer";

interface Props {}

const Page: FC<Props> = (props) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Heading
        title="DeepFake Detector"
        description="Securely upload your video file to our platform. We support a variety of formats including MP4, AVI, and MOV, with a maximum file size of 100MB. Your data is protected with industry-standard encryption during the upload process. Our advanced AI algorithms meticulously analyze the video frame by frame. The system looks for signs of tampering, such as facial inconsistencies, unnatural movements, and other anomalies that are commonly found in deep fake videos. Once the analysis is complete, you will receive a comprehensive report detailing the confidence score, identified anomalies, and a final verdict on whether the video is likely a deep fake. This report can be downloaded for your records or further analysis."
        keywords="DeepFake Detector"
      />
      <Header />
      <div className="container mx-auto my-5 flex-grow">
        <UploadComponent />
        <HowItWorksComponent />
        <Footer />
      </div>
    </div>
  );
};

export default Page;
