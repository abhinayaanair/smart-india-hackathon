// Hero.jsx
import React from "react";
import ShieldImage from "../assets/shield.png"; // replace with your image path
import { Shield, Database, AlertTriangle, FileText, Share2, MessageCircle } from "lucide-react";
import 'reactflow/dist/style.css';
import ReactFlow, { Background, Controls } from "reactflow";
import image from "../assets/image.png"

const nodes = [
  {
    id: "1",
    position: { x: 50, y: 100 },
    data: { label: "EP" },
    style: {
      border: "2px solid #7c3aed",
      background: "#1a1a2e",
      color: "#a78bfa",
      borderRadius: "50%",
      padding: 10,
    },
  },
  {
    id: "2",
    position: { x: 200, y: 50 },
    data: { label: "INT" },
    style: {
      border: "2px solid #06b6d4",
      background: "#1a1a2e",
      color: "#67e8f9",
      borderRadius: "50%",
      padding: 10,
    },
  },
  {
    id: "3",
    position: { x: 200, y: 150 },
    data: { label: "INT" },
    style: {
      border: "2px solid #06b6d4",
      background: "#1a1a2e",
      color: "#67e8f9",
      borderRadius: "50%",
      padding: 10,
    },
  },
  {
    id: "4",
    position: { x: 350, y: 50 },
    data: { label: "INT" },
    style: {
      border: "2px solid #7c3aed",
      background: "#1a1a2e",
      color: "#a78bfa",
      borderRadius: "50%",
      padding: 10,
    },
  },
  {
    id: "5",
    position: { x: 350, y: 150 },
    data: { label: "INT" },
    style: {
      border: "2px solid #06b6d4",
      background: "#1a1a2e",
      color: "#67e8f9",
      borderRadius: "50%",
      padding: 10,
    },
  },
  {
    id: "6",
    position: { x: 500, y: 100 },
    data: { label: "Critical" },
    style: {
      border: "2px solid #ec4899",
      background: "#1a1a2e",
      color: "#f472b6",
      borderRadius: "50%",
      padding: 10,
    },
  },
];

const edges = [
  { id: "e1-2", source: "1", target: "2", animated: true, style: { stroke: "#06b6d4" } },
  { id: "e1-3", source: "1", target: "3", animated: true, style: { stroke: "#ec4899" } },
  { id: "e2-4", source: "2", target: "4", animated: true, style: { stroke: "#7c3aed" } },
  { id: "e3-5", source: "3", target: "5", animated: true, style: { stroke: "#06b6d4" } },
  { id: "e4-6", source: "4", target: "6", animated: true, style: { stroke: "#06b6d4" } },
  { id: "e5-6", source: "5", target: "6", animated: true, style: { stroke: "#ec4899" } },
];
const vulnerabilities = [
  {
    severity: "Critical",
    cve: "CVE-2024-1234",
    score: 9.8,
    component: "OpenSSL 1.1.1",
    color: "bg-pink-500/20 text-pink-400 border-pink-500",
  },
  {
    severity: "High",
    cve: "CVE-2024-5678",
    score: 8.2,
    component: "Apache Tomcat 9.0",
    color: "bg-red-500/20 text-red-400 border-red-500",
  },
  {
    severity: "Medium",
    cve: "CVE-2024-9012",
    score: 6.5,
    component: "Node.js 16.x",
    color: "bg-yellow-500/20 text-yellow-400 border-yellow-500",
  },
  {
    severity: "High",
    cve: "CVE-2024-4566",
    score: 7.9,
    component: "PostgreSQL 13.x",
    color: "bg-red-500/20 text-red-400 border-red-500",
  },
  {
    severity: "Low",
    cve: "CVE-2024-7890",
    score: 3.2,
    component: "jQuery 3.5.1",
    color: "bg-green-500/20 text-green-400 border-green-500",
  },
];

const challenges = [
  {
    title: "Too Many Tools",
    description:
      "Juggling multiple solutions creates inefficiencies, risks, and redundancy.",
    icon: <Shield className="w-12 h-12 text-[#BF18FC]" />,
    border: "border-[#BF18FC]",
    bg: "bg-pink-500/10",
    // text: "bg-gradient-to-r from-[#BF18FC] to-[#F5D9FF]"
    text: "bg-gradient-to-r from-[#BF18FC] to-pink-50"
  },
  {
    title: "Data Overload",
    description:
      "Drowning in scattered reports without actionable insights.",
    icon: <Database className="w-8 h-8 text-green-400" />,
    border: "border-green-400",
    bg: "bg-green-500/10",
    text: "bg-green-400"
  },
  {
    title: "Missed Vulnerabilities",
    description:
      "Critical threats slip through the cracks during analysis.",
    icon: <AlertTriangle className="w-8 h-8 text-pink-600" />,
    border: "border-fuchsia-400",
    bg: "bg-pink-500/10",
    text: "bg-gradient-to-r from-pink-600 to-pink-50"
  },
];

const features = [
  {
    title: "Consolidated Reports",
    description:
      "Unified vulnerability reports from multiple scanning engines with intelligent deduplication and prioritization.",
    icon: <FileText className="w-8 h-8 text-purple-400" />,
    border: "border-purple-400",
    bg: "bg-purple-500/10",
    text: "bg-gradient-to-r from-[#BF18FC] to-pink-50"
  },
  {
    title: "Attack Path Visualizer",
    description:
      "Interactive graph visualization showing how vulnerabilities chain together.",
    icon: <Share2 className="w-8 h-8 text-green-400" />,
    border: "border-green-400",
    bg: "bg-green-500/10",
    text: "bg-green-400"
  },
  {
    title: "RAG Chat Assistant",
    description:
      "AI-powered assistant for answering security queries in real-time using contextual awareness.",
    icon: <MessageCircle className="w-8 h-8 text-pink-400" />,
    border: "border-pink-400",
    bg: "bg-pink-500/10",
    text: "bg-gradient-to-r from-pink-600 to-pink-50"
  },
];

const Card = ({ title, description, icon, border, bg , text, className }) => (
  <div
    className={`rounded-2xl p-10  border ${border} ${bg} shadow-md hover:shadow-lg transition ${className}`}
  >
    <div className="mb-10 ">{icon}</div>
     <h3 className={`text-2xl font-semibold bg-clip-text text-transparent mb-10  ${text}`}>
      {title}
    </h3>
    <p className="text-lg text-gray-300 mt-2">{description}</p>
  </div>
);
export default function Hero() {
  return (
    <div>
    <div className="min-h-screen bg-gradient-to-b from-[#0a0f1f] to-[#081019] text-white font-sans pt-6">
      {/* Glow Effects */}
  <div className="absolute top-10 left-0 w-80 h-80 bg-cyan-400/30 rounded-full filter blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
  <div className="absolute bottom-10 right-0 w-80 h-80 bg-cyan-400/30 rounded-full filter blur-3xl opacity-50 translate-x-1/2 translate-y-1/2"></div>

      {/* Navbar */}
      <nav className="flex justify-center items-center px-8 py-2 border border-gray-600 rounded-4xl mx-52  bg-gradient-to-r from-[#18EBFC]/20 to-[#18EBFC]/20">
        <h1 className="text-xl font-bold text-[#18EBFC] mr-16">Name</h1>
        <ul className="hidden md:flex gap-6 text-black font-semibold">
          <li className="text-cyan-400 cursor-pointer border  rounded-3xl px-2 py-1">Home</li>
          <li className="bg-white cursor-pointer border rounded-3xl px-2 py-1 ">Dashboard</li>
          <li className="bg-white cursor-pointer border rounded-3xl px-2 py-1">New Scan</li >
          <li className="bg-white cursor-pointer border rounded-3xl px-2 py-1">Active Scans</li>
          <li className="bg-white cursor-pointer border rounded-3xl px-2 py-1">Reports</li>
          <li className="bg-white cursor-pointer border rounded-3xl px-2 py-1">Admin Panel</li>
        </ul>
        <button className="bg-[#18EBFC] text-black px-4 py-1 ml-16 rounded-full hover:bg-cyan-400">
          Register
        </button>
      </nav>
      

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-16 md:py-24">
        {/* Left Text */}
        <div className="max-w-5xl">
          <h2 className="sm:text-5xl lg:text-8xl font-extrabold leading-tight text-cyan-400 ">
            Detect. <span className="text-cyan-400">Understand. Defend.</span>
            {/* <span className="text-cyan-400">Defend.</span> */}
          </h2>
          <p className="text-white text-lg mt-10 leading-relaxed font-bold">
            Centralized Vulnerability Scanning With Intelligent 
            <br />
            Analysis. Powered By RAG-Based AI Assistant For Instant 
            <br />
            Security Insights And Attack Path Visualization.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex gap-4">
            <button className="bg-[#18EBFC] text-black font-semibold px-6 py-1 rounded-xl hover:bg-cyan-400 transition">
              Register
            </button>
            <button className="bg-gray-800 border border-[#18EBFC] text-cyan-400 font-semibold px-6 py-1 rounded-xl hover:bg-gray-700 transition">
              Scan Now
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="mt-12 md:mt-0 md:w-1/2 flex justify-center">
          <img
            src={ShieldImage}
            alt="Shield Security"
            className="w-[500px] md:w-[600px] drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
    <div className="bg-[#0a0f1e] min-h-screen text-white px-8 py-12">
           {/* Glow Effects */}
  <div className="absolute top-250 left-0 w-80 h-80 bg-cyan-400/30 rounded-full filter blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
  <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-400/30 rounded-full filter blur-3xl opacity-50 translate-x-1/2 translate-y-1/2"></div>

      {/* Challenges Section */}
      <section className="mb-16">
        <h2 className="text-3xl text-[#18EBFC] font-bold mb-2 ml-20">The Challenge</h2>
        <p className="text-gray-400 mb-8 text-sm ml-20">
          Security Teams Face Overwhelming Complexity in Modern Vulnerability Management
        </p>
        <div className="grid md:grid-cols-3 gap-16 justify-center mx-40">
          {challenges.map((c, idx) => (
            <Card key={idx} {...c} className="max-w-[350px] h-[370px]"/>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section>
        <h2 className="text-3xl text-[#18EBFC] font-bold mb-2 ml-20">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8 mx-40 ">
          {features.map((f, idx) => (
            <Card key={idx} {...f} className="max-w-[350px] h-[370px]"/>
          ))}
        </div>
      </section>
    </div>

     <div className="bg-[#0a0f1e] min-h-screen text-white px-8 py-12">
           {/* Glow Effects */}
  <div className="absolute top-510 left-0 w-80 h-80 bg-cyan-400/30 rounded-full filter blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
  <div className="absolute bottom-10 right-0 w-80 h-80 bg-cyan-400/30 rounded-full filter blur-3xl opacity-50 translate-x-1/2 translate-y-1/2"></div>

      <h2 className="ml-20 font-bold mb-2 bg-gradient-to-r text-3xl text-[#18EBFC] to-blue-400 bg-clip-text">
        Consolidated Report Preview
      </h2>
      <p className="text-gray-400 text-sm mb-16 ml-20">
        All Vulnerabilities in One Unified Dashboard
      </p>

      {/* Table */}
      <div className=" mx-20 rounded-xl shadow-lg overflow-hidden flex items-center flex-col">
        <table className="w-4/5 text-left text-sm">
          {/* <thead className="bg-[#1c2236] text-gray-300"> */}
          <thead className="bg-gray-800 text-gray-300">
            <tr>
              <th className="px-16 py-6">Severity</th>
              <th className="px-16 py-6">CVE ID</th>
              <th className="px-16 py-6">CVSS Score</th>
              <th className="px-16 py-6">Affected Component</th>
            </tr>
          </thead>
          <tbody>
            {vulnerabilities.map((v, idx) => (
              <tr
                key={idx}
                className="border-t border-gray-800 hover:bg-[#1f2942] transition"
              >
                {/* Severity Tag */}
                <td className="px-16 py-8">
                  <span
                    className={`px-3 py-1 text-xs font-medium rounded-full border ${v.color}`}
                  >
                    {v.severity}
                  </span>
                </td>

                {/* CVE ID */}
                <td className="px-16 py-8 text-cyan-400 hover:underline cursor-pointer">
                  {v.cve}
                </td>

                {/* CVSS Score */}
                <td className="px-16 py-8">
                  {/* <span className="px-3 py-1 text-sm font-semibold rounded-full bg-[#222b45] text-pink-400"> */}
                  <span className={`px-3 py-1 text-sm font-semibold rounded-full bg-[#222b45] ${v.color}`}>
                    {v.score}
                  </span>
                </td>

                {/* Component */}
                <td className="px-16 py-8 text-gray-300">{v.component}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Footer */}
        <div className="px-6 py-3 text-gray-400 text-xs bg-[#1c2236] w-3/4">
          Showing 5 of 47 vulnerabilities — Last updated 2 hours ago
        </div>
      </div>
    </div>

    <div className="bg-[#0a0f1e] min-h-screen text-white px-8 py-12">
                {/* Glow Effects */}
  <div className="absolute top-760 left-0 w-80 h-80 bg-cyan-400/30 rounded-full filter blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
  <div className="absolute bottom-10 right-0 w-80 h-80 bg-cyan-400/30 rounded-full filter blur-3xl opacity-50 translate-x-1/2 translate-y-1/2"></div>

      <h2 className="ml-20 text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
        Attack Path Visualizer
      </h2>

      <div className="bg-[#0a0f1e]  rounded-xl p-4 shadow-lg flex flex-col items-center">
            <img src={image} alt="" />
        {/* <div style={{ width: "100%", height: "400px" }}>
          <ReactFlow nodes={nodes} edges={edges} fitView>
            <Background gap={12} size={1} color="#1f2937" />
            <Controls showInteractive={false} />
          </ReactFlow>
        </div> */}

        {/* Legend */}
        <div className="flex justify-center gap-6 mt-4 text-sm">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-purple-500"></span> Entry Point
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-cyan-400"></span> Intermediate
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-pink-500"></span> Critical Asset
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
