import React, { useState, useEffect } from 'react';

import "./App.css";

function App() {

 const [albums, setAlbums] = useState([]);

 useEffect(() => {

 fetch('https://jsonplaceholder.typicode.com/albums')

 .then((response) => response.json())

 .then((json) => setAlbums(json));

 }, []);

 if (albums.length === 0) {

 return (

 <div>

 <p><red>앨범 데이터가 아직 없어요.</red></p>

 </div>

 );

 }


 return (

 <div>

 {albums.map((albums) => (

 <div key={albums.id}>

 <p><center>{albums.title}</center></p>

 </div>

 ))}

 </div>

 );

}


export default App;