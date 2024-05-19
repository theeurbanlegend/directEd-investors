const bcrypt = require("bcrypt");
const Student = require("../models/studentSchema");
const Pool = require("../models/poolSchema");
const Investor = require("../models/investorSchema");
const { addAttachment } = require("./attachmentControllers");

const addStudent = async (req, res, next) => {
  const { name, bio, education, careerGoals, fundingNeed, insertedFileId } =
    req.body;
  if (!name) {
    return res.status(400).json({ msg: "Student name is required" });
  }
  try {
    const newStudent = new Student({
      name,
      bio,
      education,
      careerGoals,
      fundingNeed,
      pools_in: [],
      profile: [{ avatarId: insertedFileId }],
      achievements: [],
    });
    await newStudent.save();
    return res.status(201).json(newStudent);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Internal server error" });
  }
};

const getStudents = async (req, res) => {
  try {
    const students = await Student.find().populate({ path: "pools_in" });
    return res.status(200).json(students);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Internal server error" });
  }
};

const updateStudent = async (req, res) => {
  const { id } = req.params;
  const { student_name, bio, profile, timeline } = req.body;
  if (!student_name) {
    return res.status(400).json({ msg: "Student name is required" });
  }
  try {
    //will add timeline later and pool as well
    const updatedStudent = await Student.findByIdAndUpdate(id, {
      student_name,
      bio,
      profile,
    });
    if (!updatedStudent) {
      return res.status(404).json({ msg: "Student not found" });
    }

    return res.status(200).json(updatedStudent);
  } catch (error) {
    return res.status(500).json({ msg: "Internal server error" });
  }
};

const deleteStudent = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedStudent = await Student.findByIdAndDelete(id);
    if (!deletedStudent) {
      return res.status(404).json({ msg: "Student not found" });
    }
    await Pool.updateMany(
      { students: deletedStudent._id },
      { $pull: { students: deletedStudent._id } }
    );
    // await Investor.updateMany(
    //     { pools_invested: deletedStudent._id },
    //     { $pull: { students: this._id } }
    // );
    return res.status(200).json({ msg: "Student deleted successfully" });
  } catch (error) {
    return res.status(500).json({ msg: "Internal server error" });
  }
};

module.exports = { addStudent, getStudents, updateStudent, deleteStudent };
