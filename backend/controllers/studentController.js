const bcrypt = require('bcrypt');
const jwtSign = require('../auth/jwtSign');
const Student = require('../models/studentSchema');

const addStudent = async (req, res) => {
    const { student_name, bio, profile, timeline } = req.body;
    if (!student_name) {
        return res.status(400).json({ msg: "Student name is required" });
    }
    try {
        const newStudent = new Student({ student_name, bio, profile, timeline });
        await newStudent.save();
        return res.status(201).json(newStudent);
    } catch (error) {
        return res.status(500).json({ msg: "Internal server error" });
    }
};

const getStudents = async (req, res) => {
    try {
        const students = await Student.find();
        return res.status(200).json(students);
    } catch (error) {
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
        const updatedStudent = await Student.findByIdAndUpdate(id, { student_name, bio, profile, timeline }, { new: true });
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
        return res.status(200).json({ msg: "Student deleted successfully" });
    } catch (error) {
        return res.status(500).json({ msg: "Internal server error" });
    }
};

module.exports = { addStudent, getStudents, updateStudent, deleteStudent };
