import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import VideoPlayer from "./VideoPlayer";
import Upload from "./Upload";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watch/:id" element={<VideoPlayer />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;