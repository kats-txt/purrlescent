import React, { useContext, useState } from "react";
import { ConfigProvider, InputNumber, Modal, Button, message } from "antd";
import { CartContext } from "../cart/CartContext";
import { useNavigate } from "react-router-dom";

import logo from '../../pictures/Purrlescent - 1.png';
import LoginPage from "../login/LoginPage";

export default function CartPage() {
    const cScreen = useNavigate();

    const { cartItems, setCartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
    const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);

    const [shippingName, setShippingName] = useState('');
    const [shippingAddress, setShippingAddress] = useState('');
    const [shippingCity, setShippingCity] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');

    const [messageApi, contextHolder] = message.useMessage();

    const changeQuantity = (index, delta) => {
        const updatedCart = [...cartItems];
        const newQty = updatedCart[index].quantity + delta;
        if (newQty < 1) return;
        updatedCart[index].quantity = newQty;
        setCartItems(updatedCart);
    };

    const removeItem = (index) => {
        const updatedCart = [...cartItems];
        const removed = updatedCart.splice(index, 1);
        setCartItems(updatedCart);
        messageApi.success(`${removed[0].name} removed from cart`, 2);
    };

    const subtotal = cartItems.reduce((acc, item) => {
        const priceNum = parseFloat(item.price.replace("$", ""));
        return acc + priceNum * item.quantity;
    }, 0);

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorTextBase: "#615352",
                },
            }}
        >
            {contextHolder}
            <div class="relative w-full flex items-center justify-center mt-5 px-5 md:px-10 mb-[15px]">
                <div onClick={() => cScreen('/')} class="flex flex-col items-center justify-center cursor-pointer">
                    <img
                        src={logo}
                        alt="Purrlescent Logo"
                        class="w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] md:w-[50px] md:h-[50px] rounded-full object-cover"
                    />
                    <h1 class="text-[#615352] text-2l sm:text-3l md:text-4l font-bold">
                        Purrlescent
                    </h1>
                </div>

                <a
                    onClick={() => setIsLoginModalOpen(true)}
                    class="absolute right-5 text-[#615352] text-sm sm:text-base md:text-lg font-semibold hover:underline cursor-pointer"
                >
                    Login
                </a>
            </div>

                        <div class="flex-1 h-[2px] bg-[#615352]/40 mr-[25px] ml-[25px]"></div>

            <div class="max-w-6xl mx-auto px-5 py-10 flex flex-col gap-8">
                <h2 class="text-3xl font-extrabold text-[#615352] mb-8">Shopping Cart</h2>

                {cartItems.length === 0 ? (
                    <p class="text-xl text-center text-[#615352]">Your cart is empty.</p>
                ) : (
                    <>
                        <div class="flex flex-col gap-6">
                            {cartItems.map((item, index) => {
                                const priceNum = parseFloat(item.price.replace("$", ""));
                                const totalPrice = (priceNum * item.quantity).toFixed(2);

                                return (
                                    <div
                                        key={index}
                                        class="flex flex-col sm:flex-row sm:items-center justify-between border border-[#615352]/40 p-4 rounded-lg gap-4"
                                    >
                                        <div class="flex flex-col sm:flex-row items-center sm:items-start flex-1 gap-4">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                class="w-24 h-24 object-cover border-2 border-[#615352] rounded-lg flex-shrink-0"
                                            />
                                            <div class="flex-1">
                                                <p class="font-bold text-[#615352]">{item.name}</p>
                                                {item.color && <p class="text-[#615352]/80">Color: {item.color}</p>}
                                                {item.size && <p class="text-[#615352]/80">Size: {item.size}</p>}
                                            </div>
                                        </div>

                                        <div class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-2 sm:mt-0 w-full sm:w-auto">
                                            <p class="font-bold text-[#615352] w-full sm:w-20 text-center">{item.price}</p>

                                            <div class="flex items-center border border-[#615352] rounded-md overflow-hidden w-max mx-auto sm:mx-0">
                                                <button
                                                    class="px-3 bg-[#615352]/20 text-[#615352] font-bold"
                                                    onClick={() => changeQuantity(index, -1)}
                                                >
                                                    -
                                                </button>
                                                <div class="w-16 text-center font-bold text-[#615352]">
                                                    {item.quantity}
                                                </div>
                                                <button
                                                    class="px-3 bg-[#615352]/20 text-[#615352] font-bold"
                                                    onClick={() => changeQuantity(index, 1)}
                                                >
                                                    +
                                                </button>
                                            </div>

                                            <p class="font-bold text-[#615352] w-full sm:w-20 text-center">${totalPrice}</p>

                                            <button
                                                onClick={() => removeItem(index)}
                                                class="px-3 py-1 border border-[#615352] rounded-lg bg-transparent text-[#615352] hover:bg-[#615352] hover:text-[#E9DBC9] transition-all duration-300 w-full sm:w-auto"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div class="flex flex-col sm:flex-row justify-end mt-6 gap-4 items-center">
                            <p class="font-bold text-xl text-[#615352]">Subtotal:</p>
                            <p class="font-extrabold text-xl text-[#615352]">${subtotal.toFixed(2)}</p>
                        </div>

                        <div class="flex justify-end mt-4 gap-4">
                            <button
                                onClick={() => navigate("/")}
                                class="py-2 px-5 font-extrabold border-2 border-[#615352] rounded-lg text-[#615352] hover:bg-[#615352] hover:text-[#E9DBC9] transition-all duration-300"
                            >
                                Continue Shopping
                            </button>
                            <button
                                onClick={() => setCheckoutModalOpen(true)}
                                class="py-2 px-5 font-extrabold border-2 border-[#615352] rounded-lg text-[#E9DBC9] bg-[#615352] transition-all duration-300"
                            >
                                Checkout
                            </button>
                        </div>
                    </>
                )}
            </div>

            <div class="flex-1 h-[2px] bg-[#615352]/40 mr-[25px] ml-[25px]"></div>

            <div class="w-full flex flex-col items-center justify-between p-5">
                <button
                    onClick={() => cScreen('/')}
                    class="relative overflow-hidden w-2/3 sm:w-1/2 lg:w-1/3 py-2.5 sm:py-3 text-[#615352] text-base sm:text-lg lg:text-xl bg-transparent border-[3px] sm:border-[4px] border-[#615352] rounded-lg font-extrabold tracking-[0.15em] sm:tracking-[0.2em] mt-6 hover:bg-[#615352] hover:text-[#E9DBC9] whitespace-nowrap transition-all duration-500"
                >
                    <span class="relative z-10">BACK TO HOME</span>
                    <span class="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 transition-all duration-700 hover:left-[100%]"></span>
                </button>
            </div>

            <ConfigProvider
                theme={{
                    components: {
                        Modal: {
                            contentBg: '#E9DBC9',
                        },
                    },
                }}
            >
                <Modal
                    open={isLoginModalOpen}
                    onCancel={() => setIsLoginModalOpen(false)}
                    footer={null}
                    centered
                    width={700}
                    closable={false}
                >
                    <LoginPage />
                </Modal>

                <Modal
                    open={checkoutModalOpen}
                    onCancel={() => setCheckoutModalOpen(false)}
                    footer={null}
                    width={600}
                >
                    <div class="flex flex-col gap-4">
                        <h3 class="font-bold text-lg text-[#615352]">Order Summary & Payment</h3>
                        {cartItems.map((item, idx) => (
                            <div key={idx} class="flex justify-between">
                                <p>{item.name} x {item.quantity}</p>
                                <p>${(parseFloat(item.price.replace("$", "")) * item.quantity).toFixed(2)}</p>
                            </div>
                        ))}
                        <div class="flex justify-between font-bold border-t border-[#615352]/40 pt-2">
                            <p>Subtotal</p>
                            <p>${subtotal.toFixed(2)}</p>
                        </div>

                        <h3 class="font-bold text-lg mt-4 text-[#615352]">Shipping Address</h3>

                        <div class="w-full">
                            <input
                                type="text"
                                placeholder="Full Name"
                                value={shippingName}
                                onChange={(e) => setShippingName(e.target.value)}
                                class="w-full bg-transparent border-b-2 border-[#615352] py-2 px-2 placeholder-[#615352]/60 
                    focus:outline-none focus:bg-[#fff] focus:rounded-md focus:ring-2 focus:ring-[#615352] transition-all duration-300"
                            />
                        </div>

                        <div class="w-full">
                            <input
                                type="text"
                                placeholder="Address"
                                value={shippingAddress}
                                onChange={(e) => setShippingAddress(e.target.value)}
                                class="w-full bg-transparent border-b-2 border-[#615352] py-2 px-2 placeholder-[#615352]/60 
                    focus:outline-none focus:bg-[#fff] focus:rounded-md focus:ring-2 focus:ring-[#615352] transition-all duration-300"
                            />
                        </div>

                        <div class="w-full">
                            <input
                                type="text"
                                placeholder="City, State, ZIP"
                                value={shippingCity}
                                onChange={(e) => setShippingCity(e.target.value)}
                                class="w-full bg-transparent border-b-2 border-[#615352] py-2 px-2 placeholder-[#615352]/60 
                    focus:outline-none focus:bg-[#fff] focus:rounded-md focus:ring-2 focus:ring-[#615352] transition-all duration-300"
                            />
                        </div>

                        <h3 class="font-bold text-lg mt-4 text-[#615352]">Payment Method</h3>
                        <div class="w-full">
                            <select
                                value={paymentMethod}
                                onChange={(e) => setPaymentMethod(e.target.value)}
                                class="w-full bg-transparent border-b-2 border-[#615352] py-2 px-2 placeholder-[#615352]/60 
                    focus:outline-none focus:bg-[#fff] focus:rounded-md focus:ring-2 focus:ring-[#615352] transition-all duration-300"
                            >
                                <option value="">Select Payment Method</option>
                                <option value="Cash">Cash</option>
                                <option value="Card">Card</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <button
                            type="button"
                            class="py-2 px-5 font-extrabold border-2 border-[#615352] rounded-lg text-[#E9DBC9] bg-[#615352] transition-all duration-300"
                            onClick={() => {
                                if (!shippingName || !shippingAddress || !shippingCity) {
                                    messageApi.error("Please fill in all address fields");
                                    return;
                                }
                                if (!paymentMethod) {
                                    messageApi.error("Please select a payment method");
                                    return;
                                }

                                messageApi.success("Payment successful!");
                                setCheckoutModalOpen(false);
                                setCartItems([]);
                            }}
                        >
                            Pay
                        </button>
                    </div>
                </Modal>
            </ConfigProvider>
        </ConfigProvider>
    );
}