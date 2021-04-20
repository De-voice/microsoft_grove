import axios from "axios";
import React,{useState, useEffect} from "react";
import NavTab from "../Components/NavTab";



//    Client ID : a5330bcd790947e7976e2a6ac3f9526a
function SongsList() {
    //   const [song,setSong] = useState([]);

	//   useEffect(() => {
	// 	  axios.get("https://api.spotify.com/v1/tracks")
	// 	  .then(res => console.log(res))
	// 	  .catch(err => console.log(err))
	//   },[])


	return (
		<div>
		
			<hr />
			<ul className="flex text-sm mt-1 ">
				<li>
					<i className="fas fa-random fa-sm "></i> Shuffle all(5)
				</li>
				<li className="ml-6">
					Sort by: <span className="text-blue-600">Date added</span>
				</li>
				<li className="ml-6">
					Genre: <span className="text-blue-600">All genres</span>
				</li>
			</ul>

			<div className="mt-2 group">
				<ul className="flex justify-around group-hover:border-red-500 text-base bg-gray-200 py-3 mb-3">
					<li>y2mate.com - Runtown Energy</li>

					<li>Unknown Artists</li>
					<li>Unknown Genre</li>
					<li>4:34</li>
				</ul>

				<ul className="flex justify-around text-base bg-gray-200 py-3 mb-3">
					<li>y2mate.com - Runtown Energy</li>
					<li>Unknown Artists</li>
					<li>Unknown Genre</li>
					<li>4:34</li>
				</ul>

				<ul className="flex justify-around text-base bg-gray-200 py-3 mb-3">
					<li>y2mate.com - Runtown Energy</li>
					<li>Unknown Artists</li>
					<li>Unknown Genre</li>
					<li>4:34</li>
				</ul>

				<ul className="flex justify-around text-base bg-gray-200 py-3">
					<li>y2mate.com - Runtown Energy</li>
					<li>Unknown Artists</li>
					<li>Unknown Genre</li>
					<li>4:34</li>
				</ul>
			</div>
		</div>
	);
}

export default SongsList;
