const Pool = require('../models/poolSchema');
const Student = require('../models/studentSchema');


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
        const pools = await Pool.find().populate('students')
        return res.status(200).json(pools);
    } catch (error) {
        return res.status(500).json({ msg: "Internal server error" });
    }
};

const updatePool = async (req, res) => {
    const { id } = req.params;
    const { pool_name, pool_desc, pool_commission_rate} = req.body;
    if (!pool_name) {
        return res.status(400).json({ msg: "Pool name is required" });
    }
    try {
        const updatedPool = await Pool.findByIdAndUpdate(id, { pool_name, pool_desc, pool_commission_rate });
        if (!updatedPool) {
            return res.status(404).json({ msg: "Pool not found" });
        }
        return res.status(200).json(updatedPool);
    } catch (error) {
        return res.status(500).json({ msg: "Internal server error" });
    }
};

const addStudentsToPool=async(req, res)=>{
    const poolId=req.params.id
    const {studentIds}=req.body
    if (!poolId) {
        return res.status(400).json({ msg: "Pool name is required" });
    }
    if(!studentIds || !Array.isArray(studentIds)){
        return res.status(400).json({msg:'Invalid Student array'})
    }
    try {
        const updatedPool = await Pool.findByIdAndUpdate(poolId, {students:studentIds });
        if (!updatedPool) {
            return res.status(404).json({ msg: "Pool not found" });
        }
        return res.status(200).json(updatedPool);
    } catch (error) {
        return res.status(500).json({ msg: "Internal server error" });
    }

}

const deletePool = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedPool = await Pool.findByIdAndDelete(id);
        if (!deletedPool) {
            return res.status(404).json({ msg: "Pool not found" });
        }
    // Remove references to this Pool from associated Students
        await Student.updateMany(
        { pools_in: deletedPool._id },
        { $pull: { pools_in: this._id } }
    );
        return res.status(200).json({ msg: "Pool deleted successfully" });
    } catch (error) {
        return res.status(500).json({ msg: "Internal server error" });
    }
};

module.exports = { addPool,addStudentsToPool,  getPools, updatePool, deletePool };
