import React from "react";

const Tools = () => {
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
      <div className="absolute inset-0 " />

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen px-16 py-8">
        {/* Header */}
        {/* <nav className="flex justify-between items-center px-8 py-2 border border-gray-600 rounded-4xl bg-gradient-to-r from-[#18EBFC]/20 to-[#18EBFC]/20 mb-8">
          <h1 className="text-xl font-bold text-[#18EBFC]">Name</h1>
          <ul className="hidden md:flex gap-6 font-semibold">
            <li className="cursor-pointer border rounded-3xl px-3 py-1 text-white hover:text-[#18EBFC]">
              Home
            </li>
            <li className="cursor-pointer border rounded-3xl px-3 py-1 text-white hover:text-[#18EBFC]">
              Dashboard
            </li>
            <li className="cursor-pointer border rounded-3xl px-3 py-1 text-[#18EBFC]">
              New Scan
            </li>
            <li className="cursor-pointer border rounded-3xl px-3 py-1 text-white hover:text-[#18EBFC]">
              Active Scans
            </li>
            <li className="cursor-pointer border rounded-3xl px-3 py-1 text-white hover:text-[#18EBFC]">
              Reports
            </li>
            <li className="cursor-pointer border rounded-3xl px-3 py-1 text-white hover:text-[#18EBFC]">
              Admin Panel
            </li>
          </ul>
          <button className="bg-[#18EBFC] text-black px-4 py-1 rounded-full hover:bg-cyan-400">
            Register
          </button>
        </nav> */}
           <nav className="flex justify-center items-center px-8 py-2 border border-gray-600 rounded-4xl mx-52  bg-gradient-to-r from-[#18EBFC]/20 to-[#18EBFC]/20 mt-4">
          <h1 className="text-xl font-bold text-[#18EBFC] mr-16">Name</h1>
          <ul className="hidden md:flex gap-6 text-black font-semibold">
            <li className="text-cyan-400 cursor-pointer border  rounded-3xl px-2 py-1">
              Home
            </li>
            <li className="bg-white cursor-pointer  rounded-3xl px-2 py-1 ">
              Dashboard
            </li>
            <li className="bg-white cursor-pointer rounded-3xl px-2 py-1">
              New Scan
            </li>
            <li className="bg-white cursor-pointer rounded-3xl px-2 py-1">
              Active Scans
            </li>
            <li className="bg-white cursor-pointer rounded-3xl px-2 py-1">
              Reports
            </li>
            <li className="bg-white cursor-pointer rounded-3xl px-2 py-1">
              Admin Panel
            </li>
          </ul>
          <button className="bg-[#18EBFC] text-black px-4 py-1 ml-16 rounded-full hover:bg-cyan-400">
            Register
          </button>
        </nav>
        

        {/* Main Section */}
        <div className="flex flex-col items-start gap-6 mt-6">
          <div>
            <h2 className="text-2xl font-bold text-[#18EBFC]">
              New Scan Setup
            </h2>
            <p className="text-gray-300">
              Configure And Launch A Comprehensive Vulnerability Scan
            </p>
          </div>

          {/* Steps */}
          <div className="flex gap-6 justify-around text-xl font-semibold mb-6 border bg-[#B2B2B2]/2 border-cyan-500 p-6 rounded-2xl w-full">
            <div className="flex items-center ">
              <span className="w-8 h-8 p-6 flex items-center justify-center rounded-full mr-2 bg-purple-600 text-white">
                01
              </span> 
              <span>Targets</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 p-6 flex items-center justify-center rounded-full border border-gray-400 text-gray-300 bg-pink-400">
                02
              </span>
              <span>Tools</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 p-6 flex items-center justify-center rounded-full border border-gray-400 text-gray-300">
                03
              </span>
              <span>Configure</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 p-6 flex items-center justify-center rounded-full border border-gray-400 text-gray-300">
                04
              </span>
              <span>Review</span>
            </div>
          </div>

          {/* Target Configuration */}
          <div className="flex flex-col items-center w-full">
          <div className="w-full bg-black/50 rounded-xl border border-cyan-600 p-6">
            <h3 className="text-xl text-cyan-400 mb-6">
              Target Configuration
            </h3>

            {/* Scan Options */}
            <div className="grid grid-cols-1 md:grid-cols-4 mb-6 mx-20 h-[200px]">
                {/* <div className="flex flex-row gap-8 mb-6 "> */}
              <div className="p-4 border border-pink-500 rounded-lg cursor-pointer hover:bg-pink-500/20 w-[350px]">
                 <p>⚡</p> 
                <p className="font-bold text-lg text-pink-400">Nmap</p>
                <p className="text-gray-400">Port Scanning and Service Detection</p>
              </div>
              <div className="p-4 border border-green-500 rounded-lg cursor-pointer hover:bg-green-500/20 w-[350px]">
               <p>✔</p> 
                <p className="font-bold text-lg text-green-400">Nessus</p>
                <p className="text-gray-400">Comprehensive vulnerability Scanner</p>
              </div>
              <div className="p-4 border border-purple-500 rounded-lg cursor-pointer hover:bg-purple-500/20 w-[350px]">
                <p>⚙</p> 
                <p className="font-bold text-lg text-purple-400">Metaploit</p>
                <p className="text-gray-400">Exploit Framework and Testing</p>
              </div>
              <div className="p-4 border border-red-500 rounded-lg cursor-pointer hover:bg-purple-500/20 w-[350px]">
                 <p>⚙</p> 
                <p className="font-bold text-lg text-red-400"> OpenVAS</p>
                <p className="text-gray-400">Open-Source Vulnerability Scanner</p>
              </div>
              {/* </div> */}
               {/* <div className="mb-6 ml-20 ">
              <label className="block text-red-400 mb-2">Target Hosts/Networks</label>
              <textarea
                rows="3"
                placeholder="Enter IP Ranges, CIDR Blocks, Or Hostnames (One Per Line)"
                className="w-full  p-3 rounded bg-black border border-red-500 text-white"
              ></textarea>
            </div> */}
            </div>

            {/* Scan Name */}
            {/* <div className="mb-6">
              <label className="block text-cyan-400 mb-2">Scan Name</label>
              <input
                type="text"
                placeholder="Production Web Servers - Q1 2025"
                className="w-full p-2 rounded bg-black border border-cyan-500 text-white"
              />
            </div> */}

            {/* Target Hosts */}
            {/* <div className="mb-6">
              <label className="block text-red-400 mb-2">Target Hosts/Networks</label>
              <textarea
                rows="3"
                placeholder="Enter IP Ranges, CIDR Blocks, Or Hostnames (One Per Line)"
                className="w-full p-2 rounded bg-black border border-red-500 text-white"
              ></textarea>
            </div> */}
          </div>
</div>
          {/* Buttons */}
          <div className="flex justify-between w-full text-lg mt-6">
            <button className="px-6 py-2 rounded-lg border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black">
              ← Cancel
            </button>
            <button className="px-6 py-2 rounded-lg font-bold bg-cyan-400 text-black hover:bg-cyan-500">
              Continue →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
