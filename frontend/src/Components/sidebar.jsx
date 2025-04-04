import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);

  const handleNavigation = (path) => {
    setActivePath(path);
    navigate(path);
  };

  return (
    <div
      className="w-44 h-screen shadow-xl fixed left-0 top-0 bottom-0 bg-gradient-to-b from-blue-600 to-blue-800 text-white rounded-r-3xl transition-all duration-500 ease-in-out flex flex-col justify-start items-center"
    >
      {/* Menu Icon */}
      <div className="w-full flex justify-end px-4 mt-4">
        <FaBars className="text-xl cursor-pointer hover:scale-110 transition-transform duration-300" />
      </div>

      {/* Sidebar Header */}
      <div className="text-2xl font-bold border-b border-white/30 pb-3 tracking-wider text-center w-full">
        ARCHIVE
      </div>

      {/* Sidebar Menu Items */}
      <div className="flex flex-col w-full mt-4">
        {[
          { text: "Library", path: "/library" },
          { text: "Wishlist", path: "/wishlist" },
          { text: "My Library", path: "/my-library" },
          { text: "Settings", path: "/settings" },
          { text: "Contact Us", path: "/contact" },
          { text: "Support", path: "/support" },
          { text: "Logout", path: "/logout" },
        ].map(({ text, path }, index, arr) => (
          <div key={path} className="w-full">
            {/* Full-Width Line */}
            {index > 0 && <hr className="border-t border-white/50 w-full mx-auto" />}

            {/* Text in PERFECT CENTER */}
            <div
              className={`w-full flex justify-center items-center text-center text-lg font-medium py-4 cursor-pointer transition-all duration-300 hover:scale-105
                ${
                  activePath === path
                    ? "bg-white text-blue-600 shadow-md"
                    : "bg-white/10 hover:bg-white/20 text-white"
                }`}
              style={{ display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center" }}
              onClick={() => handleNavigation(path)}
            >
              {text}
            </div>

            {/* Last line fix (Ensuring no extra lines) */}
            {index === arr.length - 1 && <hr className="border-t border-white/50 w-full mx-auto" />}
          </div>
        ))}
      </div>
    </div>
  );
}
