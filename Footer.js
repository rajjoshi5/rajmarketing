import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold mb-2">Raj Marketing</h3>
          <p>Connecting textile excellence since 1997</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <ul>
            <li><a href="/" className="hover:text-blue-300">Home</a></li>
            <li><a href="/about" className="hover:text-blue-300">About</a></li>
            <li><a href="/services" className="hover:text-blue-300">Services</a></li>
            <li><a href="/contact" className="hover:text-blue-300">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
          <p>3rd Floor, 21, Godown Street, Chennai, India</p>
          <p>Email: chennairajmarketing@gmail.com</p>
          <p>Phone: +91 9884853354</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
