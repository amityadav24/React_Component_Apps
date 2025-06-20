import React, { useState } from "react";
import { BiLike, BiDislike } from "react-icons/bi";

const Tweet = () => {
  const [tweet, setTweet] = useState("");
  const [tweets, setTweets] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [likesInfo, setLikesInfo] = useState([]);
  const maxLimit = 240;

  const handleChange = (e) => setTweet(e.target.value);

  const handleTweet = () => {
    const trimmed = tweet.trim();
    if (trimmed !== "" && trimmed.length <= maxLimit) {
      if (editIndex !== null) {
        const isDuplicate = tweets.some((t, i) => t === trimmed && i !== editIndex);
        if (isDuplicate) {
          alert("Duplicate tweet. Try something else.");
          return;
        }
        const updatedTweets = [...tweets];
        updatedTweets[editIndex] = trimmed;
        setTweets(updatedTweets);
        setEditIndex(null);
      } else {
        if (tweets.includes(trimmed)) {
          alert("Duplicate tweet. Try something else.");
          return;
        }
        setTweets([...tweets, trimmed]);
        setLikesInfo([...likesInfo, { like: 0, dislike: 0, liked: false, disliked: false }]);
      }
      setTweet("");
    }
  };

  const handleDelete = (indexToDelete) => {
    setTweets(tweets.filter((_, index) => index !== indexToDelete));
    setLikesInfo(likesInfo.filter((_, index) => index !== indexToDelete));
    if (editIndex === indexToDelete) {
      setEditIndex(null);
      setTweet("");
    }
  };

  const handleEdit = (index) => {
    setTweet(tweets[index]);
    setEditIndex(index);
  };

  const handleLike = (index) => {
    const updated = [...likesInfo];
    if (!updated[index].liked) {
      updated[index].like += 1;
      updated[index].liked = true;
      if (updated[index].disliked) {
        updated[index].dislike = Math.max(updated[index].dislike - 1, 0);
        updated[index].disliked = false;
      }
      setLikesInfo(updated);
    }
  };

  const handleDislike = (index) => {
    const updated = [...likesInfo];
    if (!updated[index].disliked) {
      updated[index].dislike += 1;
      updated[index].disliked = true;
      if (updated[index].liked) {
        updated[index].like = Math.max(updated[index].like - 1, 0);
        updated[index].liked = false;
      }
      setLikesInfo(updated);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 px-4">
      <div className="bg-white border-2 border-blue-500 p-6 rounded-3xl w-full max-w-md flex flex-col gap-4 shadow-xl">
        <h2 className="text-2xl font-bold text-center text-blue-700">🕊️ Tweet App</h2>

        <textarea
          className="w-full h-28 p-3 border-2 border-blue-400 rounded-xl resize-none focus:outline-none text-blue-900"
          placeholder="What's on your mind?"
          value={tweet}
          onChange={handleChange}
        />

        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-600">
            Characters: {tweet.length}/{maxLimit}
          </p>
          <button
            className={`px-4 py-2 rounded-xl font-bold text-white transition-all ${
              tweet.length > maxLimit || tweet.trim() === ""
                ? "bg-gray-400 cursor-not-allowed"
                : editIndex !== null
                ? "bg-blue-500 hover:bg-blue-600"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
            disabled={tweet.length > maxLimit || tweet.trim() === ""}
            onClick={handleTweet}
          >
            {editIndex !== null ? "✏️ Update" : "Tweet"}
          </button>
        </div>

        <ul className="mt-2 space-y-3 max-h-80 overflow-y-auto pr-1">
          {tweets.map((item, index) => (
            <li
              key={index}
              className="bg-blue-50 p-3 rounded-xl shadow-sm border border-blue-300 text-blue-900"
            >
              <p className="mb-2 break-words">{item}</p>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => handleEdit(index)}
                  className="bg-blue-400 hover:bg-blue-500 px-3 py-1 rounded-lg text-white font-semibold"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded-lg text-white font-semibold"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleLike(index)}
                  disabled={likesInfo[index]?.liked}
                  className={`${
                    likesInfo[index]?.liked ? "bg-green-700" : "bg-green-500"
                  } px-4 py-1 rounded-lg text-white flex items-center gap-1`}
                >
                  <BiLike /> {likesInfo[index]?.like || 0}
                </button>
                <button
                  onClick={() => handleDislike(index)}
                  disabled={likesInfo[index]?.disliked}
                  className={`${
                    likesInfo[index]?.disliked ? "bg-gray-700" : "bg-gray-500"
                  } px-4 py-1 rounded-lg text-white flex items-center gap-1`}
                >
                  <BiDislike /> {likesInfo[index]?.dislike || 0}
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Tweet;
