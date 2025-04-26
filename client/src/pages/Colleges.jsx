import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const data = [
  { id:1, code: 6012, collegename: "IIT, Vishrambaug", events: "8"},
  { id:2, code: 6012, collegename: "IIT, Vishrambaug", events: "8"},
  { id:3, code: 6012, collegename: "IIT, Vishrambaug", events: "8"},
];

export default function colleges() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mx-auto px-[200px]">
      <div className="bg-white shadow-xl overflow-hidden w-full">
        <table className="w-full text-left">
          <colgroup>
            <col className="w-[15%]" />
            <col className="w-[45%]" />
            <col className="w-[20%]" />
            <col className="w-[20%]" />
          </colgroup>
          <thead className="bg-gray-100 text-gray-700 text-sm ">
            <tr className="">
              <th className="p-4">Code</th>
              <th className="p-4">College Name</th>
              <th className="p-4">Events</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((college, i) => (
              <tr key={college.id} className={`${i % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-blue-50`}>
                <td className="p-4">{college.code}</td>
                <td className="p-4">{college.collegename}</td>
                <td className="p-4">{college.events}</td>
                <td className="p-4"><Link className="inline-block px-5 py-2 bg-[#0d0c22] rounded-full text-white">View</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
