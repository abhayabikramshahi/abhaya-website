import React from 'react';

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-6">
      <div className="container mx-auto px-4">
        {/* Contact and Location */}
        <div className="flex justify-center mb-4">
          <div className="text-center">
            <p className="text-gray-500">
              <span className="mr-6">📧 abhayabikramshahiofficial@gmail.com</span>
              <span>📍 Kalikot , Nepal</span>
            </p>
          </div>
        </div>

        {/* Simple copyright text with tagline */}
        <div className="text-center">
          <p className="text-gray-400 text-sm mb-2">Building digital experiences with passion</p>
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Abhaya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;