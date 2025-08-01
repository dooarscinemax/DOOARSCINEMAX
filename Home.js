import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Home() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/videos")
      .then(res => setVideos(res.data));
  }, []);

  return (
    <div>
      <h1>DOOARSCINEMAX</h1>
      {videos.map(v => (
        <div key={v._id}>
          <h3>{v.title}</h3>
          <Link to={`/watch/${v._id}`}>Watch Now</Link>
        </div>
      ))}
      <br/>
      <Link to="/upload">Upload a New Video</Link>
    </div>
  );
}