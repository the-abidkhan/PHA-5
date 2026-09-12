import Logo from "../src/assets/logo-text.png";

const Nav = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white py-4">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <img src={Logo} alt="Logo" className="h-8" />

        <ul className="flex gap-8 items-center text-sm font-medium">
          <li className="text-[#d91b70]">Home</li>
          <li>Technologies</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <div className="flex gap-3 items-center">
          <button className="px-3 py-1.5 text-sm">Sign In</button>
          <button className="bg-[#d91b70] text-white px-5 py-2 text-sm rounded-full">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;