
import React, { useState, useCallback } from 'react';

// --- Modal Component ---
interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ title, isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 transition-opacity duration-300"
      onClick={onClose}
    >
      <div 
        className="bg-gray-900/70 backdrop-blur-lg border border-indigo-500/30 rounded-lg shadow-2xl shadow-indigo-500/20 w-11/12 md:w-2/3 lg:w-1/2 max-h-[80vh] overflow-y-auto p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold font-orbitron text-indigo-300 mb-4">{title}</h2>
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors text-2xl"
          aria-label="Close modal"
        >
          &times;
        </button>
        <div className="text-gray-300 space-y-4 prose prose-invert max-w-none">
          {children}
        </div>
      </div>
    </div>
  );
};

// --- Background Component ---
const GalaxyBackground = () => (
  <div className="absolute inset-0 z-0 overflow-hidden bg-[#0c0a18]">
    <style jsx global>{`
      @keyframes move-up {
        100% { transform: translateY(-100vh); }
      }
      .particle {
        position: absolute;
        border-radius: 50%;
        background: white;
        animation: move-up linear infinite;
      }
    `}</style>
    {Array.from({ length: 150 }).map((_, i) => {
      const size = Math.random() * 2 + 1;
      const duration = Math.random() * 20 + 10;
      const delay = Math.random() * -30;
      const left = Math.random() * 100;
      const initialY = Math.random() * 100;
      return (
        <div
          key={i}
          className="particle"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left: `${left}vw`,
            top: `${initialY}vh`,
            opacity: Math.random(),
            animationDuration: `${duration}s`,
            animationDelay: `${delay}s`,
          }}
        />
      );
    })}
  </div>
);


// --- Layout Component ---
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const openModal = useCallback((modalId: string) => setActiveModal(modalId), []);
  const closeModal = useCallback(() => setActiveModal(null), []);

  const modalLinks = [
    { id: 'about', title: 'About' },
    { id: 'contact', title: 'Contact' },
    { id: 'guide', title: 'Guide' },
    { id: 'privacy', title: 'Privacy Policy' },
    { id: 'tos', title: 'Terms of Service' },
    { id: 'dmca', title: 'DMCA' },
  ];

  return (
    <div className="min-h-screen relative">
      <GalaxyBackground />
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <header className="py-4 px-4 md:px-8 border-b border-indigo-900/50 bg-black/30 backdrop-blur-sm sticky top-0 z-30">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl md:text-2xl font-bold text-white font-orbitron tracking-widest">
              DOWN<span className="text-indigo-400">DETECTOR</span>
            </h1>
            <nav className="hidden md:flex space-x-6">
              {modalLinks.map(link => (
                <button 
                  key={link.id}
                  onClick={() => openModal(link.id)}
                  className="text-gray-300 hover:text-indigo-400 transition-colors duration-200"
                >
                  {link.title}
                </button>
              ))}
            </nav>
            <div className="md:hidden">
              <select onChange={(e) => e.target.value && openModal(e.target.value)} className="bg-gray-800 text-white border border-indigo-700 rounded p-1">
                <option value="">Menu</option>
                {modalLinks.map(link => <option key={link.id} value={link.id}>{link.title}</option>)}
              </select>
            </div>
          </div>
        </header>

        <div className="flex-grow">
          {children}
        </div>

        <footer className="py-6 px-4 md:px-8 border-t border-indigo-900/50 bg-black/30 backdrop-blur-sm text-center text-gray-400">
          <div className="container mx-auto">
            <p className="mb-2">
              <a href="https://github.com/hsinidev" target="_blank" rel="noopener noreferrer" className="font-bold hover:underline transition-colors" style={{color: '#FFD700'}}>
                Powered by HSINI MOHAMED
              </a>
            </p>
            <p className="text-sm">
              doodax.com | hsini.web@gmail.com
            </p>
          </div>
        </footer>
      </div>

      {/* Modals */}
      <Modal title="About Us" isOpen={activeModal === 'about'} onClose={closeModal}>
        <p>This Website Down Detector is a free tool designed to provide instant, reliable status checks for any website. We understand how frustrating it is when a site you need is unavailable, and it's hard to tell if the problem is on your end or theirs. Our tool simulates requests from a server, bypassing local network issues to give you an accurate picture of a website's true status.</p>
        <p>Built with modern technology by HSINI MOHAMED, this tool is fast, responsive, and easy to use.</p>
      </Modal>
      <Modal title="Contact" isOpen={activeModal === 'contact'} onClose={closeModal}>
        <p>For inquiries, feedback, or support, please reach out to us:</p>
        <p><strong>Email:</strong> hsini.web@gmail.com</p>
        <p><strong>Website:</strong> doodax.com</p>
      </Modal>
      <Modal title="How to Use This Guide" isOpen={activeModal === 'guide'} onClose={closeModal}>
        <ol className="list-decimal list-inside space-y-2">
          <li><strong>Enter a URL:</strong> Type or paste the full website address (e.g., example.com) into the input field.</li>
          <li><strong>Click Check:</strong> Hit the "Check Website Status" button.</li>
          <li><strong>Review Results:</strong> The tool will instantly display the results:</li>
          <ul className="list-disc list-inside ml-4">
            <li><strong>UP:</strong> The website is online and responding correctly.</li>
            <li><strong>DOWN:</strong> The website's server is returning an error or is not responding.</li>
            <li><strong>Status Code:</strong> The specific HTTP code returned by the server.</li>
            <li><strong>Response Time:</strong> How quickly the server responded to our request.</li>
          </ul>
        </ol>
      </Modal>
      <Modal title="Privacy Policy" isOpen={activeModal === 'privacy'} onClose={closeModal}>
        <p>We respect your privacy. We do not store, share, or sell any of the URLs you check on our site. All checks are performed anonymously. We may use non-identifiable analytics to monitor our tool's performance and usage statistics, but this data is aggregated and contains no personal information.</p>
      </Modal>
      <Modal title="Terms of Service" isOpen={activeModal === 'tos'} onClose={closeModal}>
        <p>By using this service, you agree not to use it for any malicious purposes, such as overloading servers with excessive requests. This tool is provided "as is" without any warranties. While we strive for accuracy, we cannot guarantee the results will be 100% correct in all scenarios due to the complex nature of the internet.</p>
      </Modal>
      <Modal title="DMCA" isOpen={activeModal === 'dmca'} onClose={closeModal}>
        <p>We respect the intellectual property of others. If you believe that any content on this site infringes upon your copyright, please contact us at hsini.web@gmail.com with the required information for a DMCA takedown request.</p>
      </Modal>
    </div>
  );
};

export default Layout;
