import { useState } from "react";

export default function GiftCardBalance() {
  const [giftCardNumber, setGiftCardNumber] = useState("");
  const [pin, setPin] = useState("");



  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="w-96 p-6 bg-white shadow-md rounded-md">
        <h2 className="text-lg font-semibold mb-4">Check Gift Card Balance</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Gift Card Number"
            value={giftCardNumber}
            onChange={(e) => setGiftCardNumber(e.target.value)}
            className="w-full px-4 py-2 border rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
          <input
            type="password"
            placeholder="PIN"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            className="w-full px-4 py-2 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-3 rounded-md font-semibold hover:bg-red-600"
          >
            CHECK GIFT CARD BALANCE
          </button>
        </form>
      </div>
    </div>
  );
}