import jwt from "jsonwebtoken"

const jwtToken = (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '2d' });
}

export default jwtToken