import { motion } from 'framer-motion';

interface IDOProject {
  name: string;
  symbol: string;
  image: string;
  description: string;
  totalRaise: string;
  price: string;
  progress: number;
  startTime: string;
}

const IDOCard = ({ project }: { project: IDOProject }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="glass-card p-6 rounded-xl hover:scale-[1.02] transition-transform duration-300"
    >
      <div className="flex items-center gap-4 mb-4">
        <img
          src={project.image}
          alt={project.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h3 className="text-xl font-semibold">{project.name}</h3>
          <span className="text-sm text-gray-400">${project.symbol}</span>
        </div>
      </div>
      
      <p className="text-sm text-gray-300 mb-4 line-clamp-2">
        {project.description}
      </p>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-sm text-gray-400">Total Raise</p>
          <p className="font-semibold">{project.totalRaise}</p>
        </div>
        <div>
          <p className="text-sm text-gray-400">Token Price</p>
          <p className="font-semibold">{project.price}</p>
        </div>
      </div>
      
      <div className="mb-4">
        <div className="flex justify-between text-sm mb-1">
          <span>Progress</span>
          <span>{project.progress}%</span>
        </div>
        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${project.progress}%` }}
          />
        </div>
      </div>
      
      <div className="text-center">
        <button className="w-full bg-primary hover:bg-primary-hover text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300">
          View Details
        </button>
      </div>
    </motion.div>
  );
};

export default IDOCard;