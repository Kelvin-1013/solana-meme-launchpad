import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Rocket, ArrowRight } from "lucide-react";

const Launchpad = () => {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8">
          Launch Your <span className="text-gradient">Meme Coin</span>
        </h1>
        
        <div className="glass-card p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">1</span>
              </div>
              <h3 className="font-semibold mb-2">Create Token</h3>
              <p className="text-sm text-foreground/70">Design your meme coin with custom parameters</p>
            </div>
            <div className="text-center p-4">
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">2</span>
              </div>
              <h3 className="font-semibold mb-2">Configure Sale</h3>
              <p className="text-sm text-foreground/70">Set your IDO parameters and timeline</p>
            </div>
            <div className="text-center p-4">
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">3</span>
              </div>
              <h3 className="font-semibold mb-2">Launch</h3>
              <p className="text-sm text-foreground/70">Start your IDO and track progress</p>
            </div>
          </div>
        </div>

        <div className="glass-card p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Ready to Launch?</h2>
              <p className="text-foreground/70 mb-6">
                Create your meme coin IDO in minutes with our easy-to-use platform
              </p>
              <Button className="flex items-center gap-2">
                <Rocket className="w-4 h-4" />
                Start Launch Process
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
            <div className="w-full md:w-1/2">
              <img src="/placeholder.svg" alt="Launch Process" className="w-full rounded-lg" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Launchpad;