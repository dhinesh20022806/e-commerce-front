'use strict';
const bcrypt = require('bcrypt');
import {mongooseConnect} from '@/lib/mongoose';
import { CreateUser } from '@/models/CreateUser';

export default async function handler(req, res){
    if (req.method !== "POST"){
        res.json("Should be a POST request");
        return;
    }

    try{
        const {email,  password} = req.body;
        await mongooseConnect();

        const userInfo = await CreateUser.find({email});

        console.log(userInfo);
        if(userInfo.length === 0){
            res.json({status:"error",message:"User not found"})
            return;
        }

        bcrypt.compare(password, userInfo[0].password , (err, result)=>{
            console.log(result , 'hi')
            if(result){
              return  res.json({
                    status:"success",
                    message:"Login Successfully",
                    data:userInfo,
                })

               

            }
            if(err){
                console.log(err)
                res.json({status:"error", message:"incorrect password"})
            }
        })

        
        

       

        
    } catch(error){
        console.log(error)
    }
    
}