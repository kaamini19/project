
const supabase = require("../config/supabase");

exports.getAnalytics = async (req, res) => {
  const { data } = await supabase.rpc("order_stats");
  res.json(data);
};
