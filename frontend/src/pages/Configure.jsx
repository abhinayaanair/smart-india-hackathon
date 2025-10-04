import React from "react";

const Configure = () => {
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
          <div className="flex gap-6 justify-around text-xl font-semibold mb-6 border bg-gray-900 border-cyan-500 p-6 rounded-2xl w-full">
            <div className="flex items-center ">
              <span className="w-8 h-8 p-6 flex items-center justify-center rounded-full mr-2 bg-purple-600 text-white">
                01
              </span> 
              <span>Targets</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 p-6 flex items-center justify-center rounded-full border border-gray-400 text-gray-300 bg-purple-600">
                02
              </span>
              <span>Tools</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 p-6 flex items-center justify-center rounded-full border border-gray-400 text-gray-300 bg-pink-600">
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
              Advanced Configuration
            </h3>
            <div className="flex flex-col gap-2">
                <ul className="flex flex-row gap-4">
                    <input type="checkbox" name="" id=""  className="appearance-none w-5 h-5 border-2 border-cyan-400 rounded bg-transparent checked:bg-cyan-400 checked:border-cyan-400"/>
                    <p className="text-lg">Enable aggressive scanning (may trigger IDS/IPS)</p>
                </ul>
                <ul className="flex flex-row gap-4">
                    <input type="checkbox" name="" id=""  className="appearance-none w-5 h-5 border-2 border-cyan-400 rounded bg-transparent checked:bg-cyan-400 checked:border-cyan-400" />
                    <p className="text-lg">Use stealth mode where possible</p>
                </ul>
                <ul className="flex flex-row gap-4">
                    <input type="checkbox" name="" id=""  className="appearance-none w-5 h-5 border-2 border-cyan-400 rounded bg-transparent checked:bg-cyan-400 checked:border-cyan-400"/>
                    <p className="text-lg">Use authenticated scanning (provide credentials)</p>
                </ul>
            </div>
            <div>
                 <div className="mt-6 border-cyan-500 border pl-2 rounded-xl bg-gray-900">
              <label className="block text-cyan-400 ">Excluded Hosts (Optional)</label>
              <input
                type="text"
                placeholder="Enter"
                className="w-full p-1 rounded  text-white"
              />
            </div>
             <div className="mt-6 border-cyan-500 border pl-2 rounded-xl bg-gray-900">
              <label className="block text-cyan-400 ">Port Range</label>
              <input
                type="text"
                placeholder="1-65535"
                className="w-full p-1 rounded  text-white"
              />
            </div>
            </div>
 
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

export default Configure;
