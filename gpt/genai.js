const {GoogleGenAI} = require("@google/genai");
require("dotenv").config();
const ai = new  GoogleGenAI({apiKey: process.env.api_key});
const histroy = {};

async function main(req,res) {
    try{
    const msg = req.body.msg;
    const id = req.params.id;
    let  chat_histroy = histroy[id];
    if(!chat_histroy)
    {
        chat_histroy = [];
        histroy[id] = chat_histroy;
    }
    const temp = {
        type:"user_input",
        content:[{type:"text",text:msg}]
    };
    chat_histroy.push(temp);

    //histroy[id].push_back(chat_histroy);
    const result = await ai.interactions.create(
        {
            model:"gemini-3.8-flash",
            input:chat_histroy
        }
    );
    const ans = result.output_text;
    const temp2 = {
        type:"model_output",
        content:[
            {
                type:"text",
                text:ans
            }
        ]
    };
    chat_histroy.push(temp2);
    res.send(ans);

}
catch(err)
{
    res.send("error"+err);
}
}
module.exports=main;