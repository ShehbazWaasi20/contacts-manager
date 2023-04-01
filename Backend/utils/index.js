const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const SECRET = "contact123"

async function genHash(password) {
    return new Promise((res, rej) => {
        bcrypt.hash(password, 10, function(err, hash) {
            if (err) {
                rej(err);
            } else {
                res(hash);
            }
        });
    })
};

async function comparePassword(password, hash) {
    const match = await bcrypt.compare(password, hash);
    return match;
}

function genToken(isuserExists) {
    const token = jwt.sign({data: {
        email : isuserExists.email,
        id    : isuserExists._id 
    }}, SECRET, { expiresIn: '1h' });
    return token;
}

function verifyToken(token) {
    console.log("token:", token)
    console.log("secret: ", SECRET)
    return new Promise((res, rej) => {
        jwt.verify(token, SECRET, function(err, decoded) {
            if (err) {
                rej(err);
                console.log("error is: " ,err)
            } else {
                res(decoded);
                console.log("decoded is", decoded)
            }
        });
    })
}

module.exports = {genHash,comparePassword,genToken,verifyToken}