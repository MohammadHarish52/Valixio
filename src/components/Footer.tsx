const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      id="contact"
      className="py-12 px-6 border-t border-border relative overflow-hidden"
    >
      <div className="absolute inset-0 flowing-gradient dark:flowing-gradient-dark opacity-50"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-medium text-foreground">Valixio</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Professional lead filtering and automation
            </p>
          </div>
          <div className="flex gap-8 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Contact
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © {currentYear} Valixio. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
