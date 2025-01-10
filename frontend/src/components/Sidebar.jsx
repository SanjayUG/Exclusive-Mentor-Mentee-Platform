import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/appLogo.svg";
import logout from "../assets/images/logout.png";
import {
  FaClipboardList,
  FaTrophy,
  FaUserAlt,
  FaChalkboardTeacher,
  FaSignOutAlt,
  FaUsers,
  FaHome,
  FaCode,
} from "react-icons/fa";

const Sidebar = ({ role }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    navigate("/login");
  };

  return (
    <div className="w-64 bg-zinc-800 h-screen flex flex-col justify-between p-4">
      {/* Logo and Title */}
      <div>
        <div className="flex items-center mb-10">
          <img src={logo} alt="App Logo" className="w-12 h-12 mr-3" />
          <h2 className="text-2xl font-bold text-purple-400">MENTOR LINK</h2>
        </div>
        
        {/* Navigation Links */}
        <ul className="space-y-6">
          {/* Dashboard */}
          <li>
            <Link
              to={`/${role}/dashboard`}
              className="flex items-center text-white p-2 rounded-lg hover:bg-purple-600 transition"
            >
              <FaHome className="text-xl mr-3" />
              <span>Dashboard</span>
            </Link>
          </li>

          {/* Select Mentee (Mentor only) */}
          {role === "mentor" && (
            <li>
              <Link
                to="/mentor/selectMentee"
                className="flex items-center text-white p-2 rounded-lg hover:bg-green-600 transition"
              >
                <FaUsers className="text-xl mr-3" />
                <span>Select Mentee</span>
              </Link>
            </li>
          )}

          {/* Your Mentee (Mentor only) */}
          {role === "mentor" && (
            <li>
              <Link
                to="/mentor/yourMentee"
                className="flex items-center text-white p-2 rounded-lg hover:bg-yellow-600 transition"
              >
                <FaChalkboardTeacher className="text-xl mr-3" />
                <span>Your Mentee</span>
              </Link>
            </li>
          )}

          {/* Appointments */}
          <li>
            <Link
              to={`/${role}/appointments`}
              className="flex items-center text-white p-2 rounded-lg hover:bg-blue-600 transition"
            >
              <FaClipboardList className="text-xl mr-3" />
              <span>Appointments</span>
            </Link>
          </li>

          {/* Achievements */}
          <li>
            <Link
              to={`/${role}/achievements`}
              className="flex items-center text-white p-2 rounded-lg hover:bg-pink-600 transition"
            >
              <FaTrophy className="text-xl mr-3" />
              <span>Achievements</span>
            </Link>
          </li>

          {/* Code Up */}
          <li>
            <Link
              to={`/${role}/codeup`}
              className="flex items-center text-white p-2 rounded-lg hover:bg-indigo-600 transition"
            >
              <FaCode className="text-xl mr-3" />
              <span>CODE_UP</span>
            </Link>
          </li>
          
          {/* Feedback */}
          <li>
            <Link
              to={`/${role}/feedback`}
              className="flex items-center text-white p-2 rounded-lg hover:bg-teal-600 transition"
            >
              <FaUserAlt className="text-xl mr-3" />
              <span>Feedback</span>
            </Link>
          </li>

        </ul>
      </div>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="flex items-center w-full p-2 text-white bg-red-600 rounded-lg hover:bg-red-700 transition"
      >
        <img src={logout} alt="Logout" className="w-12 h-12 mr-3" />
        <FaSignOutAlt className="text-xl mr-3" />
        <span>Logout</span>
      </button>
    </div>
  );
};

export default Sidebar;
