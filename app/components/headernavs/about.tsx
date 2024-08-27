import Link from "next/link";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <div className="min-h-screen ">
      <div className="container mx-auto px-4 py-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-extrabold text-purple-900 mb-8 text-center"
        >
          About DeepFake Detector
        </motion.h1>
        <div className="flex flex-col items-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <p className="text-xl text-purple-800 mb-6">
              DeepFake Detector is at the forefront of combating digital
              misinformation. Our cutting-edge AI technology analyzes videos
              with unparalleled accuracy, identifying even the most
              sophisticated deepfakes.
            </p>
            <p className="text-xl text-purple-800 mb-6">
              In an era where visual deception can have far-reaching
              consequences, we provide a robust solution for individuals,
              organizations, and media outlets to verify the authenticity of
              video content.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link href="/upload" passHref>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-500 transition shadow-lg"
              >
                Start Detecting Now
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>
      <div className="bg-purple-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Why Choose DeepFake Detector?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "99.9% Accuracy",
                description:
                  "Our AI models are trained on millions of videos, ensuring the highest detection accuracy in the industry.",
              },
              {
                title: "Real-time Analysis",
                description:
                  "Get results in seconds, not hours. Our optimized algorithms work at lightning speed.",
              },
              {
                title: "Continuous Learning",
                description:
                  "Our systems are constantly updated to detect the latest deepfake techniques and technologies.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
                className="bg-purple-800 p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
