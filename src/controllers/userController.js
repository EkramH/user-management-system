import { users, getNextId } from "../data/userData.js";

// Create User
export const createUser = (req, res) => {
  const { name, email } = req.body;

  const newUser = {
    id: getNextId(),
    name,
    email,
    role: "user",
    blocked: false,
  };

  users.push(newUser);
  res.send("User created successfully");
};

// Read User (return first user for assignment)
export const readUser = (req, res) => {
  res.json({ message: "User read successfully", user: users[0] });
};

// Update User (update by id)
export const updateUser = (req, res) => {
  const { id, name, email } = req.body;
  const user = users.find((u) => u.id === id);

  if (!user) return res.status(404).send("User not found");

  if (name) user.name = name;
  if (email) user.email = email;

  res.send("User updated successfully");
};

// Delete User
export const deleteUser = (req, res) => {
  const { id } = req.body;

  const index = users.findIndex((u) => u.id === id);
  if (index === -1) return res.status(404).send("User not found");

  users.splice(index, 1);

  res.send("User deleted successfully");
};

// Get all users
export const getAllUsers = (req, res) => {
  res.json({ message: "All users fetched successfully", users });
};

// Get user by ID
export const getUserById = (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));

  if (!user) return res.status(404).send("User not found");

  res.json({ message: "User fetched by ID", user });
};

// Login (dummy)
export const loginUser = (req, res) => {
  res.send("User login successful");
};

// Logout (dummy)
export const logoutUser = (req, res) => {
  res.send("User logout successful");
};

// Change Password (dummy)
export const changePassword = (req, res) => {
  res.send("Password changed successfully");
};

// Update Profile
export const updateProfile = (req, res) => {
  res.send("User profile updated successfully");
};

// Make admin
export const makeAdmin = (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);

  if (!user) return res.status(404).send("User not found");

  user.role = "admin";
  res.send("User made admin successfully");
};

// Remove admin
export const removeAdmin = (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);

  if (!user) return res.status(404).send("User not found");

  user.role = "user";
  res.send("Admin role removed successfully");
};

// Search Users
export const searchUsers = (req, res) => {
  const { q } = req.query;

  const result = users.filter((u) =>
    u.name.toLowerCase().includes(q.toLowerCase())
  );

  res.json({
    message: "User search completed successfully",
    result,
  });
};

// Filter Users (role filter)
export const filterUsers = (req, res) => {
  const { role } = req.query;

  const result = users.filter((u) => u.role === role);

  res.json({
    message: "User filter completed successfully",
    result,
  });
};

// Block user
export const blockUser = (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));

  if (!user) return res.status(404).send("User not found");

  user.blocked = true;
  res.send("User blocked successfully");
};

// Unblock user
export const unblockUser = (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));

  if (!user) return res.status(404).send("User not found");

  user.blocked = false;
  res.send("User unblocked successfully");
};

// Email verify (dummy)
export const verifyEmail = (req, res) => {
  res.send("Email verified successfully");
};

// Resend verification (dummy)
export const resendVerification = (req, res) => {
  res.send("Verification email resent");
};

// Upload profile picture (dummy)
export const uploadProfilePicture = (req, res) => {
  res.send("Profile picture uploaded successfully");
};

// Delete account (delete by id)
export const deleteAccount = (req, res) => {
  const { id } = req.body;

  const index = users.findIndex((u) => u.id === id);
  if (index === -1) return res.status(404).send("User not found");

  users.splice(index, 1);

  res.send("Account deleted successfully");
};
