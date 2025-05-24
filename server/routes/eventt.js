import express from 'express';
import Eventt from '../models/eventt.js';
import College from '../models/college.js';
const router = express.Router();


router.post('/addevent', async (req, res) => {
    try {
        const {eventName, collegeName, eventDate, eventLocation, postedOn, closeOn} = req.body;

        const newEvent = new Eventt (
            {
                eventName, 
                collegeName, 
                eventDate, 
                eventLocation, 
                postedOn, 
                closeOn
            }
        );
        await newEvent.save();
        res.status(200).json({message:"Event Added Successfully"});
    }
    catch(error) {
        console.log(error.message)
        res.status(500).send("Error adding event");
    }
})

router.get('/getevents', async (req, res) => {
    try{
        const events = await Eventt.find();
        res.status(200).json(events);
    }
    catch(error) {
        console.log(error.message)
        res.status(500).send("Error getting events");
    }
})

router.get('/getevents/:code', async (req, res) => {
    try{
        const collegeCode = String(req.params.code.trim());
        const events = await Eventt.find({collegeCode});
        console.log(events);
        res.status(200).json(events);
    }
    catch(error) {
        console.log(error.message)
        res.status(500).send("Error getting specific events");
    }
})

router.get('/getcolleges', async (req, res) => {
    try{
        const colleges = await College.find();
        res.status(200).json(colleges);
    }
    catch(error) {
        console.log(error.message)
        res.status(500).send("Error getting colleges");
    }
})

router.get('/getcollege/:code', async (req, res) => {
    try{
        const collegeCode = String(req.params.code.trim()); // Convert to number
        const college = await College.findOne({collegeCode}); 
        // console.log(college)
        res.status(200).json(college);
    }
    catch(error) {
        console.log(error.message)
        res.status(500).send("Error getting specific college");
    }
})

export default router;