import express from 'express';
var router = express.Router();
import db from '../util/database.js';
import dotenv from 'dotenv';
dotenv.config();

let result;

router.get('/',async(req,res,next)=>{ 
    try{
        result = await db.query(`SELECT * from wireless`);
        console.log('json data = ',JSON.stringify(result.rows));
        res.json(result.rows);

    }catch(e){
        console.log(e);
    }
});

export default router;