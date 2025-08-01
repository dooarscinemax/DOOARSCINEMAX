const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

mongoose.connect("mongodb://127.0.0.1:27017/dooarscinemax");

const Video = mongoose.model("Video", new mongoose.Schema({
  title: String,
  file: String
}));

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage });

app.get('/api/videos', async (req, res) => {
  const vids = await Video.find();
  res.json(vids);
});

app.get('/api/videos/:id', async (req, res) => {
  const video = await Video.findById(req.params.id);
  res.json(video);
});

app.post('/api/upload', upload.single('video'), async (req, res) => {
  const vid = await Video.create({ title: req.body.title, file: req.file.filename });
  res.json(vid);
});

app.listen(5000, () => console.log("DOOARSCINEMAX backend running on http://localhost:5000"));