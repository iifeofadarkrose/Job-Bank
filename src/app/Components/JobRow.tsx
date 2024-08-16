import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function JobRow() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm flex gap-4 relative">
        <div className="absolute top-4 right-4 cursor-pointer">
        <FontAwesomeIcon icon={faHeart} className="size-4 text-gray-300" />
        </div>
      <div className="flex grow gap-4">
        <div className="content-center">
          <img
            className="size-12"
            src="https://static.vecteezy.com/system/resources/previews/023/986/494/large_2x/spotify-logo-spotify-logo-transparent-spotify-icon-transparent-free-free-png.png"
            alt=""
          />
        </div>
        <div className="grow sm:flex">
          <div className="grow">
            <div className="text-gray-500 text-sm ">Spotify</div>
            <div className="font-bold text-lg mb-1">Product Designer</div>
            <div className="text-gray-400 text-sm"></div>
            Remote &middot; USA &middot; FullTime
          </div>
          <div className="content-end text-gray-500 text-sm">2 Weeks ago</div>
        </div>
      </div>
    </div>
  );
}
