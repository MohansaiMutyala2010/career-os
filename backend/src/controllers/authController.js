import bcrypt from "bcrypt";
import {
  createUser,
  findUserByEmail,
} from "../models/userModel.js";

export async function registerUser(req, res) {
  try {
    const { fullName, email, password } = req.body;

    const errors = {};

    // Full Name
    if (!fullName || fullName.trim() === "") {
      errors.fullName = "Full name is required";
    } else if (fullName.length < 3) {
      errors.fullName = "Full name must be at least 3 characters";
    } else if (fullName.length > 100) {
      errors.fullName = "Full name must not exceed 100 characters";
    }

    // Email
    if (!email || email.trim() === "") {
      errors.email = "Email is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(email)) {
        errors.email = "Invalid email format";
      }
    }

    // Password
    if (!password || password.trim() === "") {
      errors.password = "Password is required";
    } else if (password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    }

    // Return Validation Errors
    if (Object.keys(errors).length > 0) {
      return res.status(400).json({
        success: false,
        errors,
      });
    }

    // Check Duplicate Email
    const existingUser = await findUserByEmail(email);

    if (existingUser) {
      return res.status(409).json({
        success: false,
        errors: {
          email: "Email already exists",
        },
      });
    }

    // Hash Password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save User
    const user = await createUser({
      full_name : fullName,
      email,
      password: hashedPassword,
    });

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: user,
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}