import {NextApiRequest, NextApiResponse} from "next";

interface ReqI extends NextApiRequest{
    query:{
        message?:string
    }
}

const echo = (req:ReqI, res:NextApiResponse) => {
   res.statusCode =300
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({
        message:req.query.message ?? 'base message'
    }))
};

export default echo;