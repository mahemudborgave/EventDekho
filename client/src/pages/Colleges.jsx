import React, { useEffect, useState } from "react";
import { backIn, motion } from "framer-motion";
import { Link } from "react-router-dom";
import axios from 'axios';
import {HashLoader, ScaleLoader} from 'react-spinners'
import CollegeDetails from "./CollegeDetails";

export default function colleges() {

  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(true);
  const baseURL = import.meta.env.VITE_BASE_URL;
  const port = import.meta.env.VITE_PORT;

  useEffect(() => {
    const getColleges = async () => {
      try {
        const res = await axios.get(`${baseURL}:${port}/eventt/getcolleges`)
        setColleges(res.data);
      }
      catch (err) {
          console.error('Error fetching colleges:', err);
      } finally {
        setLoading(false);
      }   
    }
    getColleges();    
  },[])

  if(loading) {
    return (
      <div className="flex justify-center items-center p-10">
        <HashLoader />
      </div>
    )
  }

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
            {colleges.map((college, i) => (
              <tr key={college._id} className={`${i % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-blue-50`}>
                <td className="p-4">{college.collegeCode}</td>
                <td className="p-4">{college.collegeName}</td>
                <td className="p-4">{college.collegeEventCount}</td>
                <td className="p-4">
                  <Link to={`/collegeDetails/${college.collegeCode}`} className="inline-block px-5 py-2 bg-[#0d0c22] rounded-full text-white">View Events</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
