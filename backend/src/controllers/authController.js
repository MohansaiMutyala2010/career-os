import bcrypt from "bcrypt";
import { createUser } from "../models/userModel.js";

export async function registerUser(req, res) {
  try {
    const { full_name, email, password } = req.body;

    // Basic Validation
    if (!full_name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    // Hash Password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create User
    const user = await createUser({
      full_name,
      email,
      password: hashedPassword,
    });

    return res.status(201).json({
      success: true,
      message: "User registered successfully.",
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