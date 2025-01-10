import React from 'react';

const CodeUpRoom = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <div className="flex justify-between items-center bg-teal-500 p-4 text-white">
        <button className="bg-gray-200 text-black px-4 py-2 rounded">Leave Room</button>
        <span className="font-bold">Room ID: xxxx</span>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 p-4 gap-4">
        {/* Left Section */}
        <div className="flex flex-col gap-4 w-1/3">
          {/* Text Editor */}
          <div className="bg-red-400 p-4 rounded text-white h-1/2">
            <p>(Interviewer can put problem statements, hints, or just add some text.)</p>
          </div>

          {/* Video Section */}
          <div className="flex flex-1 gap-4">
            <div className="flex-1 bg-gray-300 p-4 rounded">
              <p>Interviewer live video</p>
            </div>
            <div className="flex-1 bg-gray-300 p-4 rounded">
              <p>Interviewee live video</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col flex-1 gap-4">
          {/* Real-time Code Editor */}
          <div className="flex flex-col bg-gray-800 text-white rounded flex-[3]">
            <div className="p-4">
              <p>Real-time code editor</p>
            </div>
          </div>

          {/* Compiler */}
          <div className="bg-green-400 p-4 rounded text-black flex-1">
            <p>Compiler Output</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeUpRoom;
