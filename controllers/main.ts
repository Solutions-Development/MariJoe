import { firewall, fs } from "../server";




export const root:firewall = async (req: any, reply: any) => {await reply.status(200).render("site")}

export const image:firewall = async (req: any, reply: any) => {

    console.log(req);
    reply.send(req.params)
        
/*
        var realFile = Buffer.from(img,"base64");
        fs.writeFile(name, realFile, function(err: any) {
        if(err)
        console.log(err);
        });
        console.log(`[] => ${realFile}`);
        reply.send(realFile);
*/
}
