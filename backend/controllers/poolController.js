const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Pool = require('../models/poolSchema');


const addPool = async (req, res) => {
    const { pool_name, pool_desc, pool_commission_rate } = req.body;
    if (!pool_name) {
        return res.status(400).json({ msg: "Pool name is required" });
    }
    try {
        const newPool = new Pool({ pool_name, pool_desc, pool_commission_rate, students:[] });
        await newPool.save();
        return res.status(201).json(newPool);
    } catch (error) {
        return res.status(500).json({ msg: "Internal server error" });
    }
};

const getPools = async (req, res) => {
    try {
        const pools = await Pool.find();
        return res.status(200).json(pools);
    } catch (error) {
        return res.status(500).json({ msg: "Internal server error" });
    }
};

const updatePool = async (req, res) => {
    const { id } = req.params;
    const { pool_name, pool_desc, pool_commission_rate, students } = req.body;
    if (!pool_name) {
        return res.status(400).json({ msg: "Pool name is required" });
    }
    try {
        const updatedPool = await Pool.findByIdAndUpdate(id, { pool_name, pool_desc, pool_commission_rate }, { new: true });
        if (!updatedPool) {
            return res.status(404).json({ msg: "Pool not found" });
        }
        return res.status(200).json(updatedPool);
    } catch (error) {
        return res.status(500).json({ msg: "Internal server error" });
    }
};

const deletePool = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedPool = await Pool.findByIdAndDelete(id);
        if (!deletedPool) {
            return res.status(404).json({ msg: "Pool not found" });
        }
        return res.status(200).json({ msg: "Pool deleted successfully" });
    } catch (error) {
        return res.status(500).json({ msg: "Internal server error" });
    }
};

module.exports = { addPool, getPools, updatePool, deletePool };
