import React, { useContext, useState } from "react";
import { Select, InputNumber } from "antd";
import { CartContext } from "../cart/CartContext";
import { useNavigate } from "react-router-dom";

export default function QuickPreview({ image, name, price, description, note }) {
    const cScreen = useNavigate();

    const { addToCart } = useContext(CartContext);
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState(null);
    const [size, setSize] = useState(null);

    const handleAddToCart = () => {
        addToCart({ image, name, price, quantity, color, size });
        alert(`${name} added to cart!`);
    };

    const goToFullPage = (item) => {
        cScreen("/purrlescentcollections", { state: item });
    };

    return (
        <div className="flex flex-col md:flex-row gap-8 text-[#615352] mt-7">
            <div className="w-full md:w-1/2 flex justify-center items-center">
                <img
                    src={image}
                    alt={name}
                    className="h-[400px] md:h-[500px] w-auto object-cover rounded-lg border-2 border-[#615352] shadow-md"
                />
            </div>

            <div className="w-full md:w-1/2 flex flex-col gap-5">
                <h2 className="text-2xl sm:text-3xl font-extrabold">{name}</h2>
                <p className="text-lg sm:text-xl font-bold">{price}</p>
                <p>{description}</p>
                <p className="text-sm">{note}</p>

                <div className="flex flex-col gap-4 mt-2">
                    <div>
                        <p className="font-semibold">Color:</p>
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
                        <p className="font-semibold">Size:</p>
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
                        <p className="font-semibold">Quantity:</p>
                        <InputNumber
                            min={1}
                            max={7}
                            defaultValue={1}
                            onChange={setQuantity}
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-3 mt-4 w-full">
                    <a
                        onClick={() =>
                            goToFullPage({
                                name: name,
                                price: price,
                                description: description,
                                note: note,
                                image: image
                            })
                        }
                        className="text-[#615352] text-sm sm:text-base font-semibold underline underline-offset-4 hover:text-[#4a423f] transition-all duration-300"
                    >
                        View Full Item
                    </a>

                    <button
                        onClick={handleAddToCart}
                        className="relative overflow-hidden w-2/4 py-2 sm:py-3 text-[#E9DBC9] text-sm sm:text-base font-extrabold tracking-wider bg-[#615352] border-[3px] border-[#615352] rounded-lg hover:bg-transparent hover:text-[#615352] transition-all duration-500"
                    >
                        Add To Cart
                        <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 transition-all duration-700 hover:left-[100%]"></span>
                    </button>
                </div>
            </div>
        </div>
    );
}