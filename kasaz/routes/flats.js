const express = require('express');
const router = express.Router();
const flats = require('../flats');
const uuid = require('uuid');
const path = require('path');

///////////// CRUD API ////////////////

///////////// GET ALL FLATS  ///////////

 router.get('/image/:id',(req,res)=>{
     var index = flats.findIndex(x=>x.id===parseInt(req.params.id));
     res.sendFile(flats[index].photo_src);
 });

///////////// GET ALL FLATS  ///////////

 router.get('/',(req,res)=>{
     res.json(flats); 
 });

//////////// GET SINGLE FLAT  /////////

router.get('/:id',(req,res)=>{
    const found = flats.some(flat=>flat.id===parseInt(req.params.id));
    //false if it does not exist, true if it does
    if(found){
        res.json(flats.filter(flat=>flat.id===parseInt(req.params.id)));
    } else{
        res.status(400).json({msg:'Mmeber not found'});
    }
});


//////////// POST FLAT  /////////

router.post('/',(req,res)=>{
    const newFlat = {
     id: uuid.v4(),
     title: req.body.title,
     price: req.body.price,
     sqm: req.body.sqm,
     beds: req.body.beds,
     toilets: req.body.toilets,
     photo_src: req.body.photo
    }
    if(!newFlat.title){
        res.status(400).json({msg:'Title is required'});
    }
 
    flats.push(newFlat);
    res.json(flats);
 });
 

//////////// DELETE FLAT  /////////

router.delete('/:id',(req,res)=>{
    const found = flats.some(flat=>flat.id === parseInt(req.params.id)); 

    if(found){
        res.json({msg:'Flat deleted', flats: flats.filter(flat=>flat.id!==parseInt(req.params.id))});
    } else{
        res.status(400).json({msg: `Flat ${req.params.id} not found`});
    }
});

module.exports = router;