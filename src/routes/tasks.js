const express = require('express');
const router = express.Router();
const Task = require('../models/task');
const mongoose = require('mongoose');

router.get('/', async (req, res) => {
  try{
    const tasks = await Task.find();
    res.send(tasks);
  }catch(e){
    res.send(e);
  }
});

router.get('/:id', async (req, res) => {
  try{
    const task = await Task.findById(mongoose.Types.ObjectId(req.params.id));
    res.send(task);
  }catch(e){
    return res.status(404).json({'msg': 'not found'});
  }
});

router.post('/', async (req, res) => {
  try{
    const task = new Task(req.body);
    const t = await task.save();
    return res.send(t);
  }catch(e){
    res.send('Error')
  }
});

router.put('/:id', async (req, res) => {
  try{
    const task = await Task.findOneAndUpdate({_id: mongoose.Types.ObjectId(req.params.id)}, req.body);
    res.send('success');
  }catch(e){
    res.send('error');
  }
});

router.delete('/:id', async (req, res) => {
  try{
    const task = await Task.findById(mongoose.Types.ObjectId(req.params.id));
    await Task.deleteOne({_id: mongoose.Types.ObjectId(req.params.id)});
    res.send('success');
  }catch(e){
    res.send('error', e);
  }
});

module.exports = router;