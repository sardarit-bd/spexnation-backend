import stripe from "../../config/stripe.js";
import Order from "../../models/Order.js";

const stripeWebhook = async (req, res) => {

    const { session_id } = req.query;

    if (!session_id) return res.status(400).json({ error: "Session ID required" });

    try {
        const session = await stripe.checkout.sessions.retrieve(session_id, {
            expand: ["line_items"],
        });


        const orderID = session?.client_reference_id;

        if (!orderID) {
            return res.status(400).json({ error: "Order ID not found in session" });
        }


        // update order
        const updatedOrder = await Order.findOneAndUpdate(
            { orderId: orderID },
            {
                paymentStatus: "paid",
                stripeSessionId: session.id,
                paymentIntent: session.payment_intent
            },
            { new: true }
        );




        res.status(200).json(session);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to fetch session" });
    }
}

export default stripeWebhook;