import { useLanguage } from "@/contexts/LanguageContext";
import { Github, Twitter } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-card/50 border-t border-card-border mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.about')}</h3>
            <p className="text-sm text-foreground/70">
              The premier launchpad for Solana meme coins, providing a secure and efficient platform for token launches.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/terms" className="text-sm text-foreground/70 hover:text-foreground">
                  {t('footer.terms')}
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-sm text-foreground/70 hover:text-foreground">
                  {t('footer.privacy')}
                </a>
              </li>
              <li>
                <a href="/contact" className="text-sm text-foreground/70 hover:text-foreground">
                  {t('footer.contact')}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Community</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground/70 hover:text-foreground">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/70 hover:text-foreground">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-foreground/70 mb-4">
              Subscribe to get updates about new launches and features.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-background border border-card-border rounded-l px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-r">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-card-border text-center text-sm text-foreground/70">
          <p>© 2024 SolMeme. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;