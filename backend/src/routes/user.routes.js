const express = require("express");
const router = express.Router();
const { createClient } = require("@supabase/supabase-js");

// Supabase client
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

/**
 * 🔐 Middleware to get logged-in user
 * Expect Authorization: Bearer <token>
 */
const getUserFromToken = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }

  const { data, error } = await supabase.auth.getUser(token);
  if (error) {
    return res.status(401).json({ error: error.message });
  }

  req.user = data.user;
  next();
};

/**
 * ✅ Create user profile (run after signup)
 */
router.post("/create-profile", getUserFromToken, async (req, res) => {
  const { full_name, phone, role } = req.body;

  const { data, error } = await supabase.from("profiles").insert([
    {
      id: req.user.id,
      full_name,
      phone,
      role, // VYAPARI or KARIGAR
    },
  ]);

  if (error) return res.status(400).json({ error: error.message });

  res.json({ message: "Profile created", data });
});

/**
 * ✅ Get logged-in user profile
 */
router.get("/me", getUserFromToken, async (req, res) => {
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", req.user.id)
    .single();

  if (error) return res.status(400).json({ error: error.message });

  res.json(data);
});

/**
 * ✅ Update own profile
 */
router.put("/me", getUserFromToken, async (req, res) => {
  const { full_name, phone } = req.body;

  const { data, error } = await supabase
    .from("profiles")
    .update({ full_name, phone })
    .eq("id", req.user.id)
    .select()
    .single();

  if (error) return res.status(400).json({ error: error.message });

  res.json(data);
});

/**
 * ✅ Get all Karigars (for Vyapari order assignment)
 */
router.get("/karigars", getUserFromToken, async (req, res) => {
  const { data, error } = await supabase
    .from("profiles")
    .select("id, full_name, phone")
    .eq("role", "KARIGAR");

  if (error) return res.status(400).json({ error: error.message });

  res.json(data);
});

/**
 * ✅ Get user profile by ID
 */
router.get("/:id", getUserFromToken, async (req, res) => {
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", req.params.id)
    .single();

  if (error) return res.status(400).json({ error: error.message });

  res.json(data);
});

module.exports = router;
