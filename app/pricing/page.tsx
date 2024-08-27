"use client";
import React from "react";
import { Header } from "../components/Header";
import Heading from "../utils/Heading";
import Pricing from "../components/headernavs/pricing";
import Footer from "../components/Footer";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <Heading
        title="Pricing"
        description="Securely upload your video file to our platform. We support a variety of formats including MP4, AVI, and MOV, with a maximum file size of 100MB. Your data is protected with industry-standard encryption during the upload process. Our advanced AI algorithms meticulously analyze the video frame by frame. The system looks for signs of tampering, such as facial inconsistencies, unnatural movements, and other anomalies that are commonly found in deep fake videos. Once the analysis is complete, you will receive a comprehensive report detailing the confidence score, identified anomalies, and a final verdict on whether the video is likely a deep fake. This report can be downloaded for your records or further analysis."
        keywords="DeepFake Detector"
      />
      <Header />
      <Pricing />
      <Footer />
    </div>
  );
};

export default page;
