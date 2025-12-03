// in-memory user database
export let users = [
  { id: 1, name: "Alex", email: "alex@mail.com", role: "user", blocked: false },
  {
    id: 2,
    name: "John",
    email: "john@mail.com",
    role: "admin",
    blocked: false,
  },
];

// Helper to generate next user ID
export const getNextId = () => {
  return users.length ? Math.max(...users.map((u) => u.id)) + 1 : 1;
};
