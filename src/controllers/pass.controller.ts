const password = process.env.passwordSecret

export const checkPassword = (req, res) => {
    try {
        if (req.params.password !== password) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        res.status(200).json({ message: "Authorized" });
    } catch (error) {
        console.log(error);
    }
}

