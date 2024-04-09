import express from "express";
import * as dotenv from "dotenv";
// import { Configuration , OpenAIApi} from "openai";
import OpenAI from "openai";

dotenv.config();

const router=express.Router();

// const configuration=new Configuration({
//     apiKey:process.env.OPENAI_API_KEY,
// }

const openai=new OpenAI();

router.route("/").get((req,res)=>{
    res.send("Hello from DALL-E!");
});

const response = await openai.images.generate({
    model: "dall-e-3",
    prompt: "A white cat",
    n: 1,
    size: "1024x1024",
  });
  console.log(response);   

export default router;
