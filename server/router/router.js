const express = require('express')
const model = require('../model/model')

const router = express.Router()

router.get("/get", async (req, res) => {
    const username = req.query.username;
    const password = req.query.password;
    console.log([username, password]);
    try {
      const newData = new model({ username: username, password: password });
      await newData.save();
      res.json(newData);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
  
router.get("/login", async (req, res) => {
    
    // console.log([username, password]);
    try {
     const data = await model.find()
      res.json(data);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
  




module.exports = router;