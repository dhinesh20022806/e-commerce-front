'use strict';
import {mongooseConnect} from '@/lib/mongoose';
import { CreateUser } from '@/models/CreateUser';
const bcrypt = require('bcrypt');
const saltRounds = 10;
export default async function handler(req, res){
    if (req.method !== "POST"){
        res.json("Should be a POST request");
        return;
    }

    try{
        const {email, password} = req.body;
        await mongooseConnect();

        bcrypt.hash(password, saltRounds, async (err, hash)=>{
            const createNewUser = await CreateUser.create({
                email,
               password: hash,
            })
            console.log(createNewUser , hash);
        })

        res.json({
            status:200,   
        })
    } catch(error){
        console.log("Error occured", error)
    }
}
