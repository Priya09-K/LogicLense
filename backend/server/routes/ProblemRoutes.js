const express = require('express');
const router = express.Router();
const Problem = require('../models/Problem');

router.post('/add', async (req, res) => {
    try {
        const newProblem = new Problem({
            title: req.body.title,
            logic: req.body.logic
        });
        const savedProblem = await newProblem.save();
        res.status(201).json(savedProblem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const problems = await Problem.find();
        res.json(problems);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
router.delete('/:id', async (req, res) => {
    try {
        await Problem.findByIdAndDelete(req.params.id);
        res.json({ message: "Logic Deleted Successfully!" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedProblem = await Problem.findByIdAndUpdate(
            req.params.id, 
            { title: req.body.title, logic: req.body.logic },
            { new: true } 
        );
        res.json(updatedProblem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});
module.exports = router;