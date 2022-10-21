

const echo = (req, res) => {
   res.statusCode =300
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({
        message:req.query.message ?? 'base message'
    }))
};

export default echo;