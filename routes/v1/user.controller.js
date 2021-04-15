const get = (get, res, next) => {
    try {
        return res.json({message: 'users get'});
    } catch (e) {
        next(e);
    }
}

const post = (req, res, next) => {
    console.log(req.body.rest)
    return res.json({message: 'users post'});
}


export {
    get,
    post
};