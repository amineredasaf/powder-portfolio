import React, { useState } from 'react';
import { FaEnvelope, FaCopy, FaCheck } from 'react-icons/fa';

const ContactSection = () => {
  const email = 'rsaf.works@gmail.com';
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    });
  };

  return (
    <section className="w-full py-16 md:py-24">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Get In Touch</h2>
          <p className="mt-4 text-sm md:text-base text-light/70 max-w-xl mx-auto">
            I&apos;m currently open to new opportunities and collaborations. 
            If you have a project in mind or just want to connect, feel free to reach out!
          </p>
        </div>

        <div className="max-w-md mx-auto text-blue-200">
          <div className="background_1 border border-light/10 rounded-lg overflow-hidden shadow-lg hover:border-blue-200/30 transition-all duration-300">
            <div className="p-6 flex flex-col items-center text-center">
              <div className="h-14 w-14 bg-blue-200/20 text-blue-200 rounded-full flex items-center justify-center mb-4">
                <FaEnvelope size={24} />
              </div>
              
              <h3 className="text-lg md:text-xl font-semibold mb-2">Email Me</h3>
              
              <p className="text-sm md:text-base text-light/70 mb-6">
                Click below to copy my email address to your clipboard
              </p>
            </div>
            
            <button
              onClick={copyToClipboard}
              className="w-full flex items-center border-t border-blue-200 text-blue-200 justify-between bg-[#122e3a] hover:bg-blue-200/20 px-6 py-4 transition-colors duration-200 group"
            >
              <span className="font-mono text-sm sm:text-base truncate">{email}</span>
              <span className="flex items-center bg-blue-200/20 rounded-full p-2 ml-2 group-hover:bg-blue-200/30 transition-colors">
                {copied ? <FaCheck className="text-green-400" /> : <FaCopy className="text-blue-200" />}
              </span>
            </button>
          </div>
        </div>

        <div className="text-center mt-10">
          <p className="text-sm text-light/50">
            Based in Tangier and khouribga, but available for remote work worldwide or on-site opportunities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;