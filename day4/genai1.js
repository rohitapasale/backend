// simple 1 question not need of history


const {GoogleGenAI} = require( '@google/genai');
require("dotenv").config();

const ai = new GoogleGenAI({apiKey: process.env.api_key});

async function main()
{
    const respose = await ai.interactions.create(
        {
            model:"gemini-3.8-flash",
            input:"how are you"
        }
    )
    console.log(respose.output_text);
};
main();

// agar hamara input maine agar text,img,pdf etc ho to 
// input:[
//     {
//         type:"text",
//         text:""
//     },
//     {
//         type:"img",
//         img:""
//     }

// ]
// is format maine hamara rahega