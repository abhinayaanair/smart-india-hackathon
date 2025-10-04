import React from "react";

const LiveScanMonitor = () => {
  return (
    <div className="relative min-h-screen w-full bg-black text-white overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://api.builder.io/api/v1/image/assets/TEMP/cbc46bb85436f80a5e71269837433f2d01d0b782?width=4030')",
        }}
      />
      <div className="absolute inset-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen px-16 py-8">
        {/* Header */}
        <nav className="flex justify-center items-center px-8 py-2 border border-gray-600 rounded-4xl mx-52 bg-gradient-to-r from-[#18EBFC]/20 to-[#18EBFC]/20 mt-4">
          <h1 className="text-xl font-bold text-[#18EBFC] mr-16">Name</h1>
          <ul className="hidden md:flex gap-6 text-black font-semibold">
            <li className="bg-white cursor-pointer rounded-3xl px-2 py-1">Home</li>
            <li className="bg-white cursor-pointer rounded-3xl px-2 py-1">Dashboard</li>
            <li className="bg-white cursor-pointer rounded-3xl px-2 py-1">New Scan</li>
            <li className="text-cyan-400 cursor-pointer border rounded-3xl px-2 py-1">
              Active Scans
            </li>
            <li className="bg-white cursor-pointer rounded-3xl px-2 py-1">Reports</li>
            <li className="bg-white cursor-pointer rounded-3xl px-2 py-1">Admin Panel</li>
          </ul>
          <button className="bg-[#18EBFC] text-black px-4 py-1 ml-16 rounded-full hover:bg-cyan-400">
            Register
          </button>
        </nav>

        {/* Main Section */}
        <div className="flex flex-col mt-8 gap-8">
          {/* Title */}
          <div className="flex flex-row justify-between">  
        <div>
            <h2 className="text-2xl font-bold text-[#18EBFC]">Live Scan Monitor</h2>
            <p className="text-gray-300">Production Web Servers – Full Scan</p>
          </div>
            <div className="flex justify-end gap-4 mt-6">
            <button className="px-6 py-2 rounded-lg border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black">
              Pause Scan
            </button>
            <button className="px-6 py-2 rounded-lg border border-red-500 text-red-500 hover:bg-red-500 hover:text-black">
              Stop Scan
            </button>
          </div>
          </div>

          {/* Progress Section */}
          <div className="w-full border border-cyan-500 rounded-xl p-6 bg-black/40">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-2xl">⟳</span>
              <span className="text-3xl font-bold">35%</span>
              <span className="text-gray-400">Scanning...</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
              <div className="bg-cyan-400 h-2 rounded-full w-[35%]" />
            </div>
            <div className="flex justify-between text-sm text-gray-400">
              <p>Started: 2:45PM</p>
              <p>Estimated Completion: 3:20PM</p>
            </div>
            {/* Stats */}
            <div className="flex justify-around text-center mt-6">
              <div>
                <p className="text-purple-400 text-2xl font-bold">47</p>
                <p className="text-sm">Hosts Found</p>
              </div>
              <div>
                <p className="text-green-400 text-2xl font-bold">142</p>
                <p className="text-sm">Open Ports</p>
              </div>
              <div>
                <p className="text-pink-400 text-2xl font-bold">23</p>
                <p className="text-sm">Vulnerabilities</p>
              </div>
            </div>
          </div>

          {/* Scanned Hosts + Console */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Hosts */}
            <div className="border border-cyan-500 rounded-xl p-6 bg-black/40">
              <h3 className="text-xl text-cyan-400 mb-4">Scanned Hosts (4)</h3>
              <div className="space-y-4">
                <div className="border border-purple-500 rounded-lg p-3">
                  <p className="text-purple-400 font-bold">Web-Server-01</p>
                  <p className="text-gray-400 text-sm">192.168.1.20</p>
                  <p className="text-sm">Ports: 12 | Vulns: 3</p>
                  <p className="text-yellow-400">⟳ Scanning</p>
                </div>
                <div className="border border-green-500 rounded-lg p-3">
                  <p className="text-green-400 font-bold">Api-Gateway</p>
                  <p className="text-gray-400 text-sm">192.168.1.10</p>
                  <p className="text-sm">Ports: 8 | Vulns: 1</p>
                  <p className="text-yellow-400">⟳ Scanning</p>
                </div>
                <div className="border border-purple-500 rounded-lg p-3">
                  <p className="text-purple-400 font-bold">Db-Primary</p>
                  <p className="text-gray-400 text-sm">192.168.1.30</p>
                  <p className="text-sm">Ports: 5 | Vulns: 0</p>
                  <p className="text-green-400">✔ Completed</p>
                </div>
                <div className="border border-pink-500 rounded-lg p-3">
                  <p className="text-pink-400 font-bold">App-Server-01</p>
                  <p className="text-gray-400 text-sm">192.168.1.25</p>
                  <p className="text-sm">Ports: 0 | Vulns: 0</p>
                  <p className="text-gray-400">Queued</p>
                </div>
              </div>
            </div>

            {/* Console Output */}
            <div className="border border-cyan-500 rounded-xl p-6 bg-black/40">
              <h3 className="text-xl text-cyan-400 mb-4">Console Output</h3>
              <div className="h-64 overflow-y-auto text-sm text-cyan-300 space-y-1">
                <p>[2:45PM] Scanning Production Network...</p>
                <p>[2:46PM] Host 192.168.1.20 discovered</p>
                <p>[2:46PM] Host 192.168.1.10 discovered</p>
                <p>[2:47PM] Port scan started...</p>
                <p>[2:48PM] Vulnerability check running...</p>
                <p>[2:49PM] 3 vulnerabilities found on 192.168.1.20</p>
                <p>[2:50PM] Db-Primary scan completed</p>
                <p>[2:51PM] Queued App-Server-01</p>
              </div>
              <button className="mt-4 px-4 py-2 rounded-lg border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black">
                View Full Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveScanMonitor;
