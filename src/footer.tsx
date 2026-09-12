import { useState, useEffect } from 'react';
import Logo from "./assets/logo-text.png";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(2026);
  const [links] = useState({
    product: ["Home", "Technologies", "Projects"],
    company: ["About", "Contact", "Careers"],
    legal: ["Privacy Policy", "Terms of Service"]
  });

  useEffect(() => {
    const year = new Date().getFullYear();
    setCurrentYear(year);
  }, []);

  const handleLinkClick = (linkName: string) => {
    alert(linkName + " clicked!");
  };

  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8 mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-12 pb-12">
          <div className="max-w-sm">
            <img src={Logo} alt="Dev Stack Logo" className="h-8 mb-4" />
            <p className="text-slate-500 text-sm mb-6 leading-relaxed">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            <div className="flex gap-4 text-sm font-semibold text-slate-700">
              <span onClick={() => handleLinkClick("GitHub")} className="cursor-pointer hover:text-[#d91b70]">GitHub</span>
              <span onClick={() => handleLinkClick("Twitter")} className="cursor-pointer hover:text-[#d91b70]">Twitter</span>
              <span onClick={() => handleLinkClick("LinkedIn")} className="cursor-pointer hover:text-[#d91b70]">LinkedIn</span>
            </div>
          </div>

          <div className="flex gap-16 text-sm">
            <div>
              <h4 className="font-bold text-slate-900 mb-4 tracking-wider text-xs">PRODUCT</h4>
              <ul className="space-y-3 text-slate-500">
                {links.product.map((item, index) => (
                  <li key={index} onClick={() => handleLinkClick(item)} className="cursor-pointer hover:text-[#d91b70]">{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-4 tracking-wider text-xs">COMPANY</h4>
              <ul className="space-y-3 text-slate-500">
                {links.company.map((item, index) => (
                  <li key={index} onClick={() => handleLinkClick(item)} className="cursor-pointer hover:text-[#d91b70]">{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-4 tracking-wider text-xs">LEGAL</h4>
              <ul className="space-y-3 text-slate-500">
                {links.legal.map((item, index) => (
                  <li key={index} onClick={() => handleLinkClick(item)} className="cursor-pointer hover:text-[#d91b70]">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400 gap-4">
          <p>© {currentYear} Dev Stack. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="cursor-pointer hover:text-slate-600">Privacy</span>
            <span className="cursor-pointer hover:text-slate-600">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;