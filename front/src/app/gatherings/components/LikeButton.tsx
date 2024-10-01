import { useState } from "react";
import { PiHeart, PiHeartFill } from "react-icons/pi";

function LikeButton() {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div
      className="flex justify-center items-center w-12 h-12 cursor-pointer rounded-full border-2 border-gray-200"
      onClick={toggleLike}
    >
      {liked ? (
        <PiHeartFill className="w-6 h-6 text-orange-600" />
      ) : (
        <PiHeart className="w-6 h-6 text-gray-400" />
      )}
    </div>
  );
}

export default LikeButton;
