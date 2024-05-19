const { MongoClient, GridFSBucket } = require("mongodb");
const mongoose = require("mongoose");
const multer = require("multer");
const fs = require("fs");

require("dotenv").config();
const mongoClient = new MongoClient(process.env.DATABASE_URL);
const conn = mongoose.createConnection(process.env.DATABASE_URL);

let gfs;

conn.once("open", async () => {
  console.log("File Upload Online!");
  await mongoClient.connect().then(() => {
    console.log("Db ready for file Upload!");
  });
  const db = mongoClient.db("test");
  gfs = new GridFSBucket(db);
});

const upload = multer({ storage: multer.memoryStorage() });

const addAttachment = async (req, res, next) => {
  try {
    let insertedFileId = new mongoose.mongo.ObjectId();
    const file = req.file;
    const fileBuffer = file.buffer;
    const writeStream = gfs.openUploadStreamWithId(
      insertedFileId,
      file.originalname,
      {
        metadata: {
          contentType: file.mimetype,
        },
      }
    );
    writeStream.end(fileBuffer);
    writeStream.on("error", (err) => {
      console.error(err);
      return res.status(500).json({ msg: "Internal Server Error" });
    });
    writeStream.on("finish", async () => {
      console.log("Attachment upload successful!");
      console.log(insertedFileId);
      req.body.insertedFileId = insertedFileId;
      next();
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};

const uploadInterceptor = (req, res, next) => {
  upload.single("file")(req, res, (err) => {
    if (!req.file) {
      return next();
    }
    if (err) {
      return res.status(500).json({ msg: "File upload error" });
    }
    addAttachment(req, res, next);
  });
};

const getAttachment = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id || !mongoose.Types.ObjectId.isValid(id) || id === undefined) {
      return res.status(404).json({ msg: "No or invalid id!" });
    }
    const file = await gfs
      .find({ _id: new mongoose.Types.ObjectId(id) })
      .toArray();
    if (!file || file.length === 0) {
      return res.status(404).json({ msg: "No attachment found!" });
    }
    const readStream = gfs.openDownloadStream(file[0]._id);
    res.set("Content-Type", file[0].metadata.contentType);
    readStream.pipe(res);
    readStream.on("error", (err) => {
      console.error("Error reading image:", err);
      res.status(500).json({ msg: "Internal Server Error" });
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};

const deleteAttachment = async (req, res) => {
  const { id } = req.params;

  if (!id || !mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ msg: "No or invalid id!" });
  }

  try {
    const file = await gfs.find({ _id: mongoose.Types.ObjectId(id) }).toArray();

    if (!file || file.length === 0) {
      return res.status(404).json({ msg: "No post data found!" });
    }

    await gfs.deleteOne({ _id: mongoose.Types.ObjectId(id) });

    return res.status(200).json(file[0]);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};

module.exports = {
  addAttachment: uploadInterceptor,
  getAttachment,
  deleteAttachment,
};
