import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Wallet, Settings, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const { setTheme, theme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-card-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-2xl font-bold text-gradient">
              SolMeme
            </Link>
            <div className="hidden md:flex space-x-6">
              <Link to="/launchpad" className="text-foreground/80 hover:text-foreground">
                {t('launchpad')}
              </Link>
              <Link to="/assets" className="text-foreground/80 hover:text-foreground">
                {t('assets')}
              </Link>
              <Link to="/dashboard" className="text-foreground/80 hover:text-foreground">
                {t('dashboard')}
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Settings className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                  {theme === 'dark' ? <Sun className="mr-2 h-4 w-4" /> : <Moon className="mr-2 h-4 w-4" />}
                  {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('en')}>English</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('es')}>Español</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('zh')}>中文</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="outline" className="hidden sm:flex">
              <Wallet className="mr-2 h-4 w-4" />
              {t('connectWallet')}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;