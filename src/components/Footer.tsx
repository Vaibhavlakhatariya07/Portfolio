
import React from 'react';
import { Github, Link as LinkIcon, Heart, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900 border-t border-gray-700/50 backdrop-blur-sm relative overflow-hidden">
  
        <div className="text-center pb-4">

          <div className="border-t border-gray-700/50 pt-6">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <p className="text-gray-400 flex items-center gap-2">
                &copy; {currentYear}  Vaibhav Lakhatariya. All Rights Reserved.
                {/* <Code className="w-4 h-4 text-purple-400" /> */}
              </p>
            </div>
          </div>
        </div>
  
    </footer>
  );
};

export default Footer;
