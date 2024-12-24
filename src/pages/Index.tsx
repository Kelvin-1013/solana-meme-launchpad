import { motion } from 'framer-motion';
import ParticleBackground from '../components/ParticleBackground';
import IDOCard from '../components/IDOCard';
import CountdownTimer from '../components/CountdownTimer';

const mockProjects = [
  {
    name: "PepeSOL",
    symbol: "PSOL",
    image: "/placeholder.svg",
    description: "The most memeable token on Solana",
    totalRaise: "500,000 USDC",
    price: "0.00001 SOL",
    progress: 75,
    startTime: "2024-03-01T00:00:00",
  },
  {
    name: "SolDoge",
    symbol: "SDOGE",
    image: "/placeholder.svg",
    description: "Much wow, very Solana",
    totalRaise: "250,000 USDC",
    price: "0.00002 SOL",
    progress: 45,
    startTime: "2024-03-15T00:00:00",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <ParticleBackground />
      
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Launch Your Meme Coin on
            <span className="text-gradient"> Solana</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            The premier launchpad for the next generation of meme coins
          </p>
        </motion.div>

        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold mb-2">Next IDO Starting In</h2>
            <CountdownTimer targetDate="2024-03-01T00:00:00" />
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-8">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {mockProjects.map((project, index) => (
              <IDOCard key={index} project={project} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;