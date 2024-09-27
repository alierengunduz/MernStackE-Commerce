const router = require("express").Router();
const dotenv = require("dotenv");
dotenv.config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

router.post("/payment", async (req, res) => {
  const { cart, users } = req.body;

  if (!cart || !Array.isArray(cart) || cart.length === 0) {
    return res.status(400).json({ error: "Cart is empty or invalid." });
  }

  const lineItems = cart.map((item) => ({
    price_data: {
      currency: "usd",
      product_data: {
        name: item.product.name,
      },
      unit_amount: Math.round(item.product.price.current * 100),
    },
    quantity: item.quantity,
  }));

  try {
    // Stripe API'ye anahtarı ekliyoruz
    const session = await stripe.checkout.sessions.create({
      customer_email: users.email,
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${process.env.CLIENT_DOMAIN}/success`,
    });
    res.status(200).json({ id: session.id });
  } catch (error) {
    console.log("Payment error:", error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
