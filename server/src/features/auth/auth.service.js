const { User } = require("./auth.model");
const bcrypt = require("bcrypt");

const AuthService = {
  async createUser(user) {
    try {
      const newUser = new User(user);
      return await newUser.save();
    } catch (error) {
      throw new Error(error);
    }
  },
  async login(email, password) {
    try {
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error("User not found");
      }

      const isPasswordMatch = await bcrypt.compare(password, user.password);
      if (!isPasswordMatch) {
        throw new Error("Password is incorrect");
      }

      const token = await user.generateAuthToken();
      return { user, token };
    } catch (error) {
      throw new Error(error);
    }
  },
};

module.exports = AuthService;
