 import React from 'react';
 import { Switch, Route,useLocation} from "react-router-dom";
import ArtistsList from '../Container/ArtistsList';
import SongsList from '../Container/SongsList';
 
 function MyMusic() {
     const location = useLocation();
     const path = location.pathname.split("/");
     
     return (
         <div>
            { path[1] === "" && <SongsList/> }
            { path[1] === "artists" && <ArtistsList/>}
          
         </div>
     )
 }
 
 export default MyMusic
 