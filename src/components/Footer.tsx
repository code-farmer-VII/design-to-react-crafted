import { Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-12 px-6 mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                <span className="text-foreground font-bold text-sm">Y</span>
              </div>
            </div>
          </div>

          {[...Array(4)].map((_, index) => (
            <div key={index}>
              <h4 className="text-foreground font-semibold mb-4">Lorem</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    Lorem
                  </a>
                </li>
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/10">
          <p className="text-muted-foreground text-sm">
            © Copyright 2025. All Rights Reserved by Yonite
          </p>
          
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-secondary/30 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-secondary/30 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-secondary/30 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-secondary/30 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
