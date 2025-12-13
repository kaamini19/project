
const supabase = require("../config/supabase");

exports.createOrder = async (req, res) => {
  const { order_no, client_name, description, due_date } = req.body;

  const { data, error } = await supabase.from("orders").insert({
    order_no,
    client_name,
    description,
    due_date,
    vyapari_id: req.user.id
  });

  res.json({ data, error });
};

exports.assignOrder = async (req, res) => {
  const { orderId, karigarId } = req.body;

  await supabase.from("orders").update({
    karigar_id: karigarId,
    status: "ASSIGNED"
  }).eq("id", orderId);

  res.json({ message: "Order assigned" });
};
