async function db_auth(req, res, next) {
    try {
        const new_user = req.body;

        const mandatory = ["username", "password"];

        const valid = mandatory.every((key) =>
            Object.keys(new_user).includes(key)
        );

        if (!valid) {
            throw new Error("put all mandatory fields");
        }

        next();
    }
    catch (err) {
        res.status(400).send(err.message);
    }
}

module.exports = db_auth;