import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-600 text-white py-6 mt-12 text-center">
      <p>© {new Date().getFullYear()} FarmWise. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
