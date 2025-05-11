// src/components/SearchBar.tsx
import { useState } from "react";
import { Calendar, Users, Search } from "lucide-react";
import { motion } from "framer-motion";

export default function SearchBar() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);

  return (
    <motion.div
      className="bg-white p-3 rounded-xl shadow-lg w-full max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="md:col-span-5 border-b md:border-b-0 md:border-r border-gray-200 p-3">
          <div className="flex items-center gap-3">
            <Calendar className="text-ocean-blue-500 h-5 w-5" />
            <div>
              <label className="block text-xs text-gray-500">Check-in</label>
              <input
                type="date"
                className="w-full font-medium focus:outline-none"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="md:col-span-5 border-b md:border-b-0 md:border-r border-gray-200 p-3">
          <div className="flex items-center gap-3">
            <Calendar className="text-ocean-blue-500 h-5 w-5" />
            <div>
              <label className="block text-xs text-gray-500">Check-out</label>
              <input
                type="date"
                className="w-full font-medium focus:outline-none"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="md:col-span-2 flex items-center justify-between">
          <div className="flex items-center gap-2 px-3">
            <Users className="text-ocean-blue-500 h-5 w-5" />
            <select
              className="font-medium bg-transparent focus:outline-none"
              value={guests}
              onChange={(e) => setGuests(parseInt(e.target.value))}
            >
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <option key={num} value={num}>
                  {num} {num === 1 ? "hóspede" : "hóspedes"}
                </option>
              ))}
            </select>
          </div>
          <button className="bg-ocean-blue-600 hover:bg-ocean-blue-700 text-white p-3 rounded-lg">
            <Search className="h-5 w-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
