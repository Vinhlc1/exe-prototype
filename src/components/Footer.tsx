"use client";
export const Footer = () => {
  return (
    <>
      {/* Top Bar */}
      <div className="bg-secondary/20 border-b border-border">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center text-sm text-muted-foreground">
          <div className="flex gap-6">
            <span>📍 Tukad Balian No.19 Denpasar, Bali</span>
            <span>✉️ pandoora@domain.com</span>
            <span>📞 +62-311-89-90-19</span>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition-colors">
              Twitter
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Facebook
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
