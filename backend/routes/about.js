const express = require('express');
const About = require('../models/About'); 
const router = express.Router();

// Middleware to check if the data exists in the database, and insert if it does not
const ensureAboutData = async (req, res, next) => {
    try {
        let about = await About.findOne();
        if (!about) {
            about = new About({
                title: "MediCare Service",
                mission: "Delivering compassionate healthcare with state-of-the-art technology and skilled professionals.",
                coreValues: [
                    "Compassionate Care",
                    "Patient-Centered Approach",
                    "Integrity & Transparency",
                    "Innovation & Excellence",
                    "Community Engagement"
                ],
                services: [
                    "24/7 Emergency Care",
                    "Advanced Surgical Units",
                    "Rehabilitation & Diagnostics",
                    "Doctor & Patient Portals",
                    "Telemedicine Services"
                ],
                contactInfo: {
                    emails: [
                        "shihab.shahriar.shanto@g.bracu.ac.bd",
                        "umamatasnuvaaziz@gmail.com",
                        "naphewsiddique@gmail.com"
                    ],
                    phones: [
                        "+880 1889 686 033",
                        "+880 1111 222 888",
                        "+880 443 989 002"
                    ],
                    address: "Brac University"
                }
            });
            await about.save();
        }
        req.aboutData = about; 
        next();
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};

// GET /about - Retrieve about data from the database
router.get('/', ensureAboutData, (req, res) => {
    res.json(req.aboutData);  // Send the correct data
});

module.exports = router;
