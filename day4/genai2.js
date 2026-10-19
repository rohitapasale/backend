const {GoogleGenAI} = require( '@google/genai');
require("dotenv").config();
const ai = new GoogleGenAI({apiKey: process.env.api_key});

async function main()
{
    const ans = await ai.interactions.create(
        {
            model:"gemini-3.8-flash",
            input:[
                
                {
                type:"user_input",
                content:[{type:"text",text:"hi how are you"}]
                },
                {
                    type:"model_output",
                    content:[{type:"text",text:"i am fine wby"}]
                },
                {
                    type:"user_input",
                    content:[{type:"text",text:"i want to ask something"}]
                }
    
        ]
        }
    );
    console.log(ans.output_text);
}
main();

/*

dekho yaha hm histroy bhej rahe hai input main to hme history to array rahega is array maine har ek entery ek obj hogi chiz main hm bataynge 
ek ki type:user,or mode
and dusra content:yaha content maine bs string hai phir bhi array hi dena padega of object inputs or respose

*/