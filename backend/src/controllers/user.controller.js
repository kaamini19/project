
const supabase = require("../config/supabase");

exports.getUsers = async (req, res) => {
  const { data } = await supabase.from("users").select("id,name,email,role");
  res.json(data);
};
