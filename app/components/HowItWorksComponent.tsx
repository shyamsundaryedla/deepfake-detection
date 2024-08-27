// howitworkscomponent.tsx
import { useState } from "react";
import { FiUploadCloud, FiBarChart2, FiFileText } from "react-icons/fi";

interface TabContent {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const tabContents: Record<string, TabContent> = {
  upload: {
    icon: <FiUploadCloud className="w-6 h-6" />,
    title: "Upload",
    description:
      "Securely upload your video file to our platform. We support a variety of formats including MP4, AVI, and MOV, with a maximum file size of 100MB. Your data is protected with industry-standard encryption during the upload process.",
  },
  analyze: {
    icon: <FiBarChart2 className="w-6 h-6" />,
    title: "Analyze",
    description:
      "Our advanced AI algorithms meticulously analyze the video frame by frame. The system looks for signs of tampering, such as facial inconsistencies, unnatural movements, and other anomalies that are commonly found in deep fake videos.",
  },
  report: {
    icon: <FiFileText className="w-6 h-6" />,
    title: "Report",
    description:
      "Once the analysis is complete, you will receive a comprehensive report detailing the confidence score, identified anomalies, and a final verdict on whether the video is likely a deep fake. This report can be downloaded for your records or further analysis.",
  },
};

export const HowItWorksComponent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("upload");

  return (
    <section className="my-12">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold text-gray-800 mb-8">How It Works</h3>
        <div className="flex border-b border-gray-200 mb-8">
          {Object.keys(tabContents).map((tab) => (
            <button
              key={tab}
              className={`py-4 px-6 font-medium text-sm focus:outline-none transition-colors duration-200 ${
                activeTab === tab
                  ? "border-b-2 border-indigo-500 text-indigo-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tabContents[tab].title}
            </button>
          ))}
        </div>
        <div className="mt-6">
          <div className="flex items-start">
            <span className="flex-shrink-0 p-4 bg-indigo-100 rounded-full">
              {tabContents[activeTab].icon}
            </span>
            <div className="ml-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                {tabContents[activeTab].title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {tabContents[activeTab].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
