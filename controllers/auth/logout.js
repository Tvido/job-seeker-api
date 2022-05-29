const { User } = require("../../schemas/user");

const logout = async (req, res, next) => {
    await User.findByIdAndUpdate(req.user._id, { token: null });
    res.json({
        status: "success",
        code: 200,
        message: "Success logout",
    });
};

module.exports = logout;