// AddAchievement.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { uploadAchievement } from "../../api/achievementApi";

const AddAchievement = () => {
  const [achievementInput, setAchievementInput] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleAddAchievement = async () => {
    if (achievementInput.trim() === "") return;
    setLoading(true);
    setError(null);

    try {
      await uploadAchievement(achievementInput, file);
      setAchievementInput("");
      setFile(null);
      alert("Achievement added successfully!");
    } catch (err) {
      setError(err.message || "Failed to add achievement");
    } finally {
      setLoading(false);
    }
  };

  const handleViewAchievements = () => {
    navigate("/mentee/view-achievements");
  };

  return (
    <div className="flex justify-center items-start h-screen bg-gray-900 pt-12"> {/* Added pt-12 to add space from the top */}
      <div className="p-6 rounded-3xl border-2 border-yellow-500 bg-zinc-800 w-[600px]">
        <h1 className="text-2xl font-bold text-center mb-4 text-white">Add Achievement</h1>
        <div className="max-w-lg mx-auto">
          <textarea
            value={achievementInput}
            onChange={(e) => setAchievementInput(e.target.value)}
            placeholder="Write your achievement..."
            className="w-full p-3 border bg-zinc-600 border-purple-500 rounded-md mb-4 focus:outline-none text-white"
          />
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            className="w-full p-3 border border-purple-500 rounded-md mb-4 focus:outline-none text-white"
          />
          <button
            onClick={handleAddAchievement}
            className="w-full bg-yellow-500 text-black hover:text-white py-2 px-4 rounded-xl hover:bg-yellow-600 transition duration-200 mb-4"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit Achievement"}
          </button>
          {error && <p className="text-red-500 text-center">{error}</p>}
          <button
            onClick={handleViewAchievements}
            className="w-full bg-purple-700 text-black hover:text-white py-2 px-4 rounded-xl hover:bg-purple-800 transition duration-200"
          >
            View Achievements
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddAchievement;
