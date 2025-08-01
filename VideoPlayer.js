import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function VideoPlayer() {
  const { id } = useParams();
  const [video, setVideo] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/videos/${id}`)
      .then(res => setVideo(res.data));
  }, [id]);

  return video ? (
    <div>
      <h2>{video.title}</h2>
      <video width="640" height="360" controls>
        <source src={`http://localhost:5000/uploads/${video.file}`} type="video/mp4" />
      </video>
    </div>
  ) : <p>Loading...</p>;
}