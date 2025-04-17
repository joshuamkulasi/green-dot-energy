import Image from 'next/image';
import { motion } from 'framer-motion';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  description?: string;
}

export const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative w-full h-64 mb-6">
        <Image
          src={image}
          alt={`${name} - ${role}`}
          fill
          className="object-cover rounded-lg"
          priority
          quality={85}
        />
      </div>
      <div className="text-center space-y-2">
        <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
        <p className="text-gray-600">{role}</p>
        {description && (
          <p className="text-gray-500 mt-2">{description}</p>
        )}
      </div>
    </motion.div>
  );
};

// Example usage
const DewaneGemba = () => (
  <TeamMember
    name="Dewane Gemba"
    role="Managing Director"
    image="/team/dewane-gemba.jpg"
    description="Leader and visionary behind Green Dot Energy's growth and success in PNG"
  />
);
