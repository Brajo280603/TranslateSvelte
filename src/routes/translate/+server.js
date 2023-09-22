import translateAPI from '@iamtraction/google-translate';
import { json } from '@sveltejs/kit'
export async function POST({request}){

    
    let data = await request.json()
    let resdata = await translateAPI(data.text,{to:data.translateTo});
    console.log(resdata)
    resdata = resdata.text
    // return json(resdata);
    return new Response(JSON.stringify(resdata));

}