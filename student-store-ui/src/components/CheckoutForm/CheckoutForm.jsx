import React, { useState } from "react";

const CheckoutForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [showReceipt, setShowReceipt] = useState(false);

  const handleCheckout = () => {
    // Simulate sending a receipt to the provided email address
    sendReceipt(name, email);

    // Show the receipt and thank you message
    setShowReceipt(true);
  };

  const sendReceipt = (name, email) => {
    //  simulate the receipt by logging a message to the console
    console.log(`Sending receipt to ${email} for ${name}`);
  };

  return (
    <div>
      <h2>Checkout Form</h2>
      {!showReceipt ? (
        <form>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <br />
          <button type="button" onClick={handleCheckout}>
            Checkout
          </button>
        </form>
      ) : (
        <div>
          <p>Receipt:</p>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Thank you for your purchase! A receipt has been sent to your email address.</p>
        </div>
      )}
    </div>
  );
};

export default CheckoutForm;