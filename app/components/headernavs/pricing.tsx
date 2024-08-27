import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

const PricingTier: React.FC<{
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}> = ({ title, price, features, isPopular }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className={`bg-white rounded-xl shadow-xl overflow-hidden ${
      isPopular ? "border-4 border-purple-500" : "border-1 border-black"
    }`}
  >
    {isPopular && (
      <div className="bg-purple-500 text-white text-center py-2 font-semibold">
        Most Popular
      </div>
    )}
    <div className="p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
      <p className="text-4xl font-bold text-gray-900 mb-6">{price}</p>
      <ul className="mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center mb-2 text-gray-800">
            <FaCheck className="text-purple-500 mr-2" />
            {feature}
          </li>
        ))}
      </ul>
      <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-purple-500 transition shadow-lg">
        Get Started
      </button>
    </div>
  </motion.div>
);

const Pricing: React.FC = () => {
  return (
    <div className="min-h-screen ">
      <div className="container mx-auto px-4 py-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-extrabold text-purple-900 mb-12 text-center"
        >
          Choose Your Plan
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              title: "Basic",
              price: "$19/month",
              features: [
                "Up to 10 video analyses",
                "Basic AI model",
                "Standard support",
              ],
            },
            {
              title: "Pro",
              price: "$49/month",
              features: [
                "Up to 100 video analyses",
                "Advanced AI model",
                "Priority support",
              ],
              isPopular: true,
            },
            {
              title: "Enterprise",
              price: "$99/month",
              features: [
                "Unlimited video analyses",
                "Custom AI model",
                "Dedicated support",
              ],
            },
          ].map((tier, index) => (
            <PricingTier
              key={index}
              title={tier.title}
              price={tier.price}
              features={tier.features}
              isPopular={tier.isPopular}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
