import React, { useContext, useState } from "react";
import { Select, InputNumber, ConfigProvider, Modal, Table, message, FloatButton } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { CartContext } from "../cart/CartContext";
import { useLocation, useNavigate } from "react-router-dom";

import logo from '../../pictures/Purrlescent - 1.png';
import LoginPage from "../login/LoginPage";

export default function ItemPage() {
    const cScreen = useNavigate();
    const { addToCart, cartItems } = useContext(CartContext);
    const location = useLocation();

    const item = location.state || {};
    const { image, name, price, description, note } = item;

    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState(null);
    const [size, setSize] = useState(null);
    const [isSizeChartOpen, setIsSizeChartOpen] = useState(false);
    const [isReturnPolicyOpen, setIsReturnPolicyOpen] = useState(false);

    const [messageApi, contextHolder] = message.useMessage();

    const sizeData = [
        { key: '1', size: 'XS', neck: '20cm', chest: '25cm' },
        { key: '2', size: 'S', neck: '25cm', chest: '30cm' },
        { key: '3', size: 'M', neck: '30cm', chest: '35cm' },
        { key: '4', size: 'L', neck: '35cm', chest: '40cm' },
    ];

    const columns = [
        { title: 'Size', dataIndex: 'size', key: 'size' },
        { title: 'Neck', dataIndex: 'neck', key: 'neck' },
        { title: 'Chest', dataIndex: 'chest', key: 'chest' },
    ];


    const handleAddToCart = () => {
        if (!color || !size) {
            messageApi.open({
                type: 'warning',
                content: 'Please select both color and size before adding to cart.',
                duration: 2,
            });
            return;
        }

        addToCart({ image, name, price, quantity, color, size });
        messageApi.open({
            type: 'success',
            content: `${name} added to cart!`,
            duration: 2,
        });
        console.log("Current cart:", cartItems);
    };

    if (!item.name) {
        return <div class="text-center mt-20 text-xl font-bold">No item selected</div>;
    }

    return (
        <div>
            <ConfigProvider
                theme={{
                    token: {
                        // colorBgBase: '#E9DBC9',  // beige background
                        colorTextBase: '#615352', // grey text
                    },
                }}
            >
                {contextHolder}
            </ConfigProvider>

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

            <div class="flex flex-col md:flex-row gap-8 text-[#615352] px-6 md:px-12 mt-[20px] mb-[20px]">

                <div class="w-full md:w-1/2 flex justify-center items-center">
                    <img
                        src={image}
                        alt={name}
                        class="h-[500px] w-auto object-cover rounded-lg border-2 border-[#615352] shadow-md"
                    />
                </div>

                <div class="w-full md:w-1/2 flex flex-col gap-5 text-left">
                    <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold">{name}</h2>
                    <p class="text-xl sm:text-2xl font-bold">{price}</p>
                    <p class="leading-relaxed">{description}</p>
                    <p class="text-sm">{note}</p>

                    <div class="flex flex-col gap-4 mt-4">
                        <div>
                            <p class="font-semibold">Color:</p>
                            <Select
                                style={{ width: '50%' }}
                                placeholder="Select Color"
                                onChange={setColor}
                                options={[
                                    { label: "Emerald Green", value: "green" },
                                    { label: "Ruby Red", value: "red" },
                                    { label: "Sapphire Blue", value: "blue" },
                                ]}
                            />
                        </div>

                        <div>
                            <p class="font-semibold">Size:</p>
                            <Select
                                style={{ width: '50%' }}
                                placeholder="Select Size"
                                onChange={setSize}
                                options={[
                                    { label: "XS", value: "xs" },
                                    { label: "S", value: "s" },
                                    { label: "M", value: "m" },
                                    { label: "L", value: "l" },
                                ]}
                            />
                        </div>

                        <div>
                            <p class="font-semibold">Quantity:</p>
                            <InputNumber
                                min={1}
                                max={7}
                                defaultValue={1}
                                onChange={setQuantity}
                            />
                        </div>
                    </div>

                    <button
                        onClick={handleAddToCart}
                        class="relative overflow-hidden w-2/4 py-3 sm:py-4 text-[#E9DBC9] text-base font-extrabold tracking-wider bg-[#615352] border-[3px] border-[#615352] rounded-lg hover:bg-transparent hover:text-[#615352] transition-all duration-500 mt-4"
                    >
                        Add To Cart
                        <span class="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 transition-all duration-700 hover:left-[100%]"></span>
                    </button>

                    <div class="flex justify-between mt-6 text-sm underline">
                        <a onClick={() => setIsSizeChartOpen(true)} class="cursor-pointer">Size Chart</a>
                        <a onClick={() => setIsReturnPolicyOpen(true)} class="cursor-pointer">Return Policy</a>
                    </div>
                </div>
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
            </ConfigProvider>
            <Modal
                title="Size Chart"
                open={isSizeChartOpen}
                onCancel={() => setIsSizeChartOpen(false)}
                footer={null}
                centered
            >
                <Table
                    dataSource={sizeData}
                    columns={columns}
                    pagination={false}
                    bordered
                />
            </Modal>

            <Modal
                title="Return Policy"
                open={isReturnPolicyOpen}
                onCancel={() => setIsReturnPolicyOpen(false)}
                footer={null}
                centered
            >
                <p>
                    All items can be returned within 14 days of delivery if in original condition.
                    Custom-made or personalized items cannot be returned. Refunds are processed within 5-7 business days.
                </p>
            </Modal>

            <ConfigProvider
                theme={{
                    components: {
                        FloatButton: {
                            colorBgElevated: "#661f13",
                            colorBgElevatedHover: "#E9DBC9",
                            colorPrimary: "#E9DBC9",
                            colorPrimaryHover: "#615352",
                        },
                    },
                }}
            >
                <FloatButton
                    tooltip={<div>Go to cart</div>}
                    onClick={() => cScreen('/shoppingcart')}
                    icon={
                        <ShoppingCartOutlined
                            style={{
                                color: "#E9DBC9",
                                transition: "all 0.3s ease",
                            }}
                        />
                    }
                    style={{
                        backgroundColor: "#661f13",
                        border: "none",
                        transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#E9DBC9";
                        e.currentTarget.querySelector("svg").style.color = "#615352";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "#661f13";
                        e.currentTarget.querySelector("svg").style.color = "#E9DBC9";
                    }}
                />
            </ConfigProvider>
        </div>
    );
}