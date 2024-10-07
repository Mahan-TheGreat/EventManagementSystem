const express = require('express');
const Event = require('../domain/models/eventModel.js');

const router = express.Router();
router.get('/', async (req, res) =>  {
    try{
        const events = await Event.find();
        res.json(events);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

router.post('/', async(req, res) => {
    const event = new Event({
        title: req.body.title,
        date: req.body.date,
        reminder: req.body.reminder || false,
    });
    try{
        const newEvent = await event.save();
        res.status(201).json(newEvent);
    }catch(error){
        res.status(400).json({message: error.message});
    }
})

module.exports = router;
