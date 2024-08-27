import { motion } from "framer-motion";
import { FaUpload, FaMicrochip, FaChartBar } from "react-icons/fa";

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: FaUpload,
      title: "Upload",
      description:
        "Securely upload your video file. We support various formats up to 500MB in size.",
    },
    {
      icon: FaMicrochip,
      title: "Analyze",
      description:
        "Our advanced AI algorithms process the video, examining each frame for signs of manipulation.",
    },
    {
      icon: FaChartBar,
      title: "Report",
      description:
        "Receive a detailed report with confidence scores and highlighted areas of concern.",
    },
  ];

  return (
    <div className="min-h-screen ">
      <div className="container mx-auto px-4 py-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-extrabold text-purple-900 mb-12 text-center"
        >
          How DeepFake Detector Works
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-xl overflow-hidden"
            >
              <div className="bg-purple-600 p-6">
                <step.icon className="text-white text-5xl mx-auto" />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-purple-900 mb-4">
                  Step {index + 1}: {step.title}
                </h2>
                <p className="text-purple-800">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="bg-purple-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Our Technology
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold mb-4">
                Advanced AI Models
              </h3>
              <p className="mb-4">
                Our deepfake detection leverages state-of-the-art convolutional
                neural networks and recurrent neural networks to analyze both
                spatial and temporal inconsistencies in videos.
              </p>
              <p>
                By training on vast datasets of both authentic and manipulated
                videos, our models have learned to identify even the most subtle
                signs of digital tampering.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-4">
                Continuous Improvement
              </h3>
              <p className="mb-4">
                The world of deepfakes is constantly evolving, and so are we.
                Our systems employ active learning techniques to stay ahead of
                the latest manipulation methods.
              </p>
              <p>
                Regular updates and fine-tuning ensure that DeepFake Detector
                remains at the cutting edge of video authentication technology.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
