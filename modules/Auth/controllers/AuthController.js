// modules/auth/controllers/authController.js
const bcrypt = require('bcryptjs');
const userModel = require('../models/AuthModel');
const jwtUtil = require('../utils/jwtUtil');
const Response = require('../../../utils/response');
const cryptoUtils = require('../../../utils/cryptoUtils');
const apiKeyUtil = require('../../../utils/apiKey');

exports.registerUserWithApiKey = async (req, res) => {
  try {
    const { username, password, email, level, apiKey } = req.body;

    // Verify API key
    const isValidApiKey = await apiKeyUtil.verifyApiKey(apiKey);

    if (!isValidApiKey) {
      return Response.error(res, 'Invalid API key', 401);
    }

    // Decrypt API key for additional verification or logging if needed
    const decryptedApiKey = cryptoUtils.decryptData(apiKey);

    // Continue with user registration
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = {
      username,
      password: hashedPassword,
      email,
      level
    };

    await userModel.createUser(user);

    Response.success(res, 'User registered successfully');
  } catch (error) {
    console.error(error);
    Response.error(res, 'Registration failed', 500);
  }
};

exports.loginUserWithApiKey = async (req, res) => {
  try {
    const { username, password, apiKey } = req.body;

    // Verify API key
    const isValidApiKey = await apiKeyUtil.verifyApiKey(apiKey);

    if (!isValidApiKey) {
      return Response.error(res, 'Invalid API key', 401);
    }

    // Decrypt API key for additional verification or logging if needed
    const decryptedApiKey = cryptoUtils.decryptData(apiKey);

    // Continue with user login
    const user = await userModel.getUserByUsername(username);

    if (!user) {
      return Response.error(res, 'Invalid username or password', 401);
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return Response.error(res, 'Invalid username or password', 401);
    }

    const token = jwtUtil.generateToken(user);

    Response.success(res, { token, user });
  } catch (error) {
    console.error(error);
    Response.error(res, 'Login failed', 500);
  }
};

exports.registerUser = async (req, res) => {
  try {
    const { username, password, email, level } = req.body;

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user in the database
    const user = {
      username,
      password: hashedPassword,
      email,
      level
    };

    await userModel.createUser(user);

    Response.success(res, 'User registered successfully');
  } catch (error) {
    console.error(error);
    Response.error(res, 'Registration failed', 500);
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Retrieve user from the database by username
    const user = await userModel.getUserByUsername(username);

    if (!user) {
      return Response.error(res, 'Invalid username or password', 401);
    }

    // Compare hashed passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return Response.error(res, 'Invalid username or password', 401);
    }

    // Generate JWT token
    const token = jwtUtil.generateToken(user);

    Response.success(res, { token });
  } catch (error) {
    console.error(error);
    Response.error(res, 'Login failed', 500);
  }
};

exports.logoutUser = async (req, res) => {
  // Tidak ada tindakan khusus yang diperlukan untuk logout JWT karena tidak ada penyimpanan server-side
  Response.success(res, 'Logout successful');
};

exports.resetPassword = async (req, res) => {
  try {
    const { username, newPassword } = req.body;

    // Retrieve user from the database by username
    const user = await userModel.getUserByUsername(username);

    if (!user) {
      return Response.error(res, 'User not found', 404);
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update user's password in the database
    await userModel.updateUserPassword(user.id, hashedPassword);

    Response.success(res, 'Password reset successful');
  } catch (error) {
    console.error(error);
    Response.error(res, 'Password reset failed', 500);
  }
};
