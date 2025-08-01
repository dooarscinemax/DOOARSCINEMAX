import React, { useState } from 'react';
import axios from 'axios';

export default function Upload() {
  const [title, setTitle] = useState('');
  const [video, setVideo] = useState(null);
  const [message, setMessage] = useState('');

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!title || !video) {
      setMessage("Please select a video and enter title.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("video", video);

    try {
      await axios.post("http://localhost:5000/api/upload", formData);
      setMessage("Upload successful!");
      setTitle('');
      setVideo(null);
    } catch (err) {
      console.error(err);
      setMessage("Upload failed.");
    }
  };

  return (
    <div>
      <h2>Upload to DOOARSCINEMAX</h2>
      <form onSubmit={handleUpload}>
        <input type="text" placeholder="Video Title" value={title} onChange={(e) => setTitle(e.target.value)} /><br/><br/>
        <input type="file" accept="video/mp4" onChange={(e) => setVideo(e.target.files[0])} /><br/><br/>
        <button type="submit">Upload</button>
      </form>
      <p>{message}</p>
    </div>
  );
}