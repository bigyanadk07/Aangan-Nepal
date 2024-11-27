import React, { useState } from 'react';
import { Phone, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const phoneNumber = '+977 XXX XXX XXXX';

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phoneNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section 
      className="bg-gray-50 py-16" 
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 
              id="contact-heading" 
              className="text-3xl font-bold mb-4 text-gray-900"
            >
              Need Help? Talk To Our Expert
            </h2>
            <p className="text-gray-600 mb-4">
              Get in touch with our team for expert advice and personalized support
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-end space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="mailto:support@example.com" 
              className="border border-gray-300 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-100 text-center flex items-center justify-center"
            >
              <Mail className="mr-2" size={20} />
              CONTACT US
            </a>
            <button 
              onClick={handleCopyPhone}
              aria-label="Copy phone number"
              className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 flex items-center justify-center"
            >
              <Phone className="mr-2" size={20} />
              {phoneNumber}
              {copied && (
                <span className="ml-2 text-sm text-green-300">
                  Copied!
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;