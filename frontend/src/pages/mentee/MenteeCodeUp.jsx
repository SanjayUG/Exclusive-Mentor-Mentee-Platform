import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import { useNavigate } from "react-router-dom";

const MenteeCodeUp = () => {
  const navigate = useNavigate();
  const [roomId, setRoomId] = useState("");

  const handleRoomIdChange = (e) => {
    setRoomId(e.target.value);
  };

  return (
    <div className="flex">
      <Sidebar role="mentee" />
      <div className="flex-grow p-6 text-white bg-black border-l-4 border-purple-700 rounded-l-[50px] h-screen overflow-y-auto">
        <h1 className="text-[30px] font2 translate-y-[20px] font-bold mb-[40px]">
          Mentee CodeUp
        </h1>
        <div className="mt-4 bg-zinc-800 p-6 rounded-2xl text-center">
          <p className="text-lg text-white font-semibold mb-2">
            This is where the mentee can work on their code-up tasks.
          </p>
        </div>

        {/* Centered Box for Room ID */}
        <div className="flex justify-center items-center mt-10">
          <div className="bg-purple-700 p-8 rounded-3xl shadow-lg w-full max-w-[400px]">
            <h2 className="text-2xl font-bold text-white mb-4">Enter Room ID:</h2>
            <input
              type="text"
              value={roomId}
              onChange={handleRoomIdChange}
              placeholder="Enter Room ID"
              className="w-full p-4 rounded-lg bg-zinc-800 text-white border-2 border-purple-500 focus:outline-none focus:border-purple-300"
            />
            <button
              className="mt-4 w-full p-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-300"
              onClick={() => console.log("Room Joined: ", roomId)}
            >
              Join Room
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenteeCodeUp;
