import React from "react";
import {
  FaServer,
  FaExclamationTriangle,
  FaChartPie,
  FaShieldAlt,
} from "react-icons/fa";

const SecurityDashboard = () => {
  return (
    <div className="relative min-h-screen w-full bg-black text-white overflow-hidden">
      {/* Background Effect */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://api.builder.io/api/v1/image/assets/TEMP/cbc46bb85436f80a5e71269837433f2d01d0b782?width=4030')",
        }}
      />
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <nav className="flex justify-center items-center px-8 py-2 border border-gray-600 rounded-4xl mx-52  bg-gradient-to-r from-[#18EBFC]/20 to-[#18EBFC]/20 mt-4">
          <h1 className="text-xl font-bold text-[#18EBFC] mr-16">Name</h1>
          <ul className="hidden md:flex gap-6 text-black font-semibold">
            <li className="text-cyan-400 cursor-pointer border  rounded-3xl px-2 py-1">
              Home
            </li>
            <li className="bg-white cursor-pointer border rounded-3xl px-2 py-1 ">
              Dashboard
            </li>
            <li className="bg-white cursor-pointer border rounded-3xl px-2 py-1">
              New Scan
            </li>
            <li className="bg-white cursor-pointer border rounded-3xl px-2 py-1">
              Active Scans
            </li>
            <li className="bg-white cursor-pointer border rounded-3xl px-2 py-1">
              Reports
            </li>
            <li className="bg-white cursor-pointer border rounded-3xl px-2 py-1">
              Admin Panel
            </li>
          </ul>
          <button className="bg-[#18EBFC] text-black px-4 py-1 ml-16 rounded-full hover:bg-cyan-400">
            Register
          </button>
        </nav>

        {/* Hero Section */}

        <div className="min-h-screen  text-white p-6 px-20">
          <div className="flex justify-between flex-row">
            <div className=" mb-8">
              <h1 className="text-2xl text-[#18EBFC] font-bold">
                Security Dashboard
              </h1>
              <p className="text-gray-400">
                Real-Time Vulnerability Monitoring And Threat Intelligence
              </p>
            </div>
            <button className="text-base rounded-lg mb-4 px-3 text-cyan-400 border-1">
              Upload Document
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
            <div className="bg-gray-800 p-4 rounded-lg border-1 border-[#BF18FC] max-w-[320px] min-h-[160px] pl-6">
              <FaServer className="text-[#BF18FC] mr-2 mb-3 h-6 w-6" />
              <div className="flex items-center">
                <div>
                  {/* <p className="text-[#BF18FC]">Total Hosts Monitored</p> */}
                  <h2 className="bg-gradient-to-r mb-1 text-lg from-[#BF18FC] to-pink-50 bg-clip-text text-transparent font-semibold">
                    Total Hosts Monitored
                  </h2>
                  <p className="text-2xl font-bold">247</p>
                  <p className="text-[#BF18FC] text-sm">+12 This Week</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg border-1 border-green-500 max-w-[320px] min-h-[160px] pl-6">
              <FaExclamationTriangle className="text-green-500 mr-2 h-6 w-6 mb-3" />
              <div className="flex items-center">
                <div>
                  <p className="bg-gradient-to-r mb-1 text-lg from-green-500 to-green-200 bg-clip-text text-transparent font-semibold">
                    Critical Vulnerabilities
                  </p>
                  <p className="text-2xl font-bold">12</p>
                  <p className="text-green-400 text-sm">-3 Since Last Scan</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg border-1 border-pink-500 max-w-[320px] min-h-[160px] pl-6">
              <FaChartPie className="text-pink-500 mr-2 h-6 w-6 mb-3" />
              <div className="flex items-center">
                <div>
                  <h2 className="text-pink-400 text-lg">Avg CVSS Score</h2>
                  <p className="text-2xl font-bold">6.8</p>
                  <p className="text-pink-400 text-sm">-0.4 Improvement</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg border-1 border-orange-500 max-w-[320px] min-h-[160px] pl-6">
              <FaShieldAlt className="text-red-500 mr-2 mb-3 h-6 w-6" />
              <div className="flex items-center">
                <div>
                  <h2 className="text-red-400 text-lg">Security Score</h2>
                  <p className="text-2xl font-bold">78%</p>
                  <p className="text-red-400">+5% This Month</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[400px]">
            <div className="bg-gray-800 p-4 rounded-lg border-1 max-w-3xl border-cyan-500">
              <h2 className="text-xl font-bold mb-4 text-cyan-400">
                Severity Distribution
              </h2>
              <div className="flex justify-center">
                <div className="relative w-80 h-80 bg-gray-900">
                  <div className="absolute inset-0 p-8 flex items-center justify-center">
                    <svg viewBox="0 0 36 36" className="w-full h-full">
                      {/* Pie chart segments can be added here with SVG paths */}
                      <circle
                        cx="18"
                        cy="18"
                        r="15.9"
                        fill="none"
                        stroke="#ef4444"
                        strokeWidth="3.6"
                        strokeDasharray="12 100"
                        transform="rotate(-90 18 18)"
                      />
                      <circle
                        cx="18"
                        cy="18"
                        r="15.9"
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="3.6"
                        strokeDasharray="28 100"
                        transform="rotate(-162 18 18)"
                      />
                      <circle
                        cx="18"
                        cy="18"
                        r="15.9"
                        fill="none"
                        stroke="#22c55e"
                        strokeWidth="3.6"
                        strokeDasharray="63 100"
                        transform="rotate(-234 18 18)"
                      />
                      <circle
                        cx="18"
                        cy="18"
                        r="15.9"
                        fill="none"
                        stroke="#facc15"
                        strokeWidth="3.6"
                        strokeDasharray="45 100"
                        transform="rotate(-297 18 18)"
                      />
                    </svg>
                  </div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-sm">
                    <p>Critical: 12</p>
                    <p>High: 28</p>
                    <p>Low: 63</p>
                    <p>Medium: 45</p>
                  </div>
                </div>
              </div>
            </div>
 
            <div className="bg-gray-800 p-4 rounded-lg border-1 border-cyan-500 max-w-4xl">
              <div className="flex justify-between flex-row mb-4">
                <h2 className="text-xl font-bold mb-4 text-cyan-400">
                  Recent Scans
                </h2>
                <button className="text-base rounded-lg mb-4 px-3 text-cyan-400 border-1 p-2">
                  View All
                </button>
              </div>
              <div className="space-y-4">
                <div className="flex flex-col p-2 rounded-lg border-1 border-purple-500">
                  <div className="flex justify-between items-center ">
                    <span className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                      Production Web Servers
                    </span>
                    <span className="text-cyan-400"> 23 Vulnerabilities</span>
                  </div>
                  <span className="text-gray-400 mb-2">2 Hours Ago</span>
                  <div className="bg-purple-500 h-2.5 rounded-full"></div>
                </div>
                <div className="flex flex-col p-2 rounded-lg border-1 border-green-500">
                  <div className="flex justify-between items-center ">
                    <span className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Database Cluster
                    </span>
                    {/* <span className='text-cyan-400'>In Progress</span> */}
                  </div>
                  <span className="text-gray-400 mb-2">In Progress</span>
                  <div className="bg-green-500 h-2.5 rounded-full"></div>
                </div>

                <div className="flex flex-col p-2 rounded-lg border-1 border-pink-500">
                  <div className="flex justify-between items-center ">
                    <span className="flex items-center">
                      <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
                      API Gateway
                    </span>
                    <span className="text-cyan-400">8 Vulnerabilities</span>
                  </div>
                  <span className="text-gray-400 mb-2">1 Day Ago</span>
                  <div className="bg-pink-500 h-2.5 rounded-full"></div>
                </div>
              </div>
              {/* <button className="mt-4 bg-blue-600 p-2 rounded hover:bg-blue-700 w-full text-white">View All</button> */}
            </div>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default SecurityDashboard;
