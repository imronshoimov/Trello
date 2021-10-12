module.exports = (req, res, next) => {
    const token = req.headers.authorization;
    if(!token) {
        res.status(403)
            .json({ message: "You are not logged in!" });
    } else {
        next();
    };
};