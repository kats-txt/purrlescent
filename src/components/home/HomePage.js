import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ConfigProvider, FloatButton, Modal } from 'antd';
import { ArrowUpOutlined, ShoppingCartOutlined } from "@ant-design/icons";

import LoginPage from '../login/LoginPage';

import bgPic from '../../pictures/V-Pics - Hp-1.png';

import logo from '../../pictures/Purrlescent - 1.png';
import downArrow from '../../pictures/downArrow.png';

import pic1LaceCollar from '../../pictures/pic1.jpg';
import pic2PearlCrown from '../../pictures/pic2.png';
import pic3ShadesChain from '../../pictures/pic3.jpg';
import pic4Jazzy from '../../pictures/pic4.jpg';
import pic5FlowerLace from '../../pictures/pic5.jpg';
import pic6CrownCape from '../../pictures/pic6.jpg';
import pic7WitchHat from '../../pictures/pic7.jpg';
import pic8BabyBonnet from '../../pictures/pic8.jpg';
import pic9GreenEyeAndBow from '../../pictures/pic9.jpg';
import QuickPreview from '../collection/QuickPreview';


const HomePage = () => {
    const cScreen = useNavigate();

    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
    const [isQuickPreviewVisible, setIsQuickPreviewVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const openQuickPreview = (item) => {
        setSelectedItem(item);
        setIsQuickPreviewVisible(true);
    };

    const closeQuickPreview = () => {
        setIsQuickPreviewVisible(false);
        setSelectedItem(null);
    };

    const QuickPreviewModal = ({ isVisible, onClose, item, }) => (
        <ConfigProvider
            theme={{
                components: {
                    Modal: {
                        contentBg: "#E9DBC9",
                    },
                },
            }}
        >
            <Modal
                open={isVisible}
                footer={null}
                onCancel={onClose}
                centered
                width={1000}
            >
                <QuickPreview
                    name={item.name}
                    price={item.price}
                    description={item.description}
                    modelInfo={item.modelInfo}
                    note={item.note}
                    image={item.image}
                />
            </Modal>
        </ConfigProvider>
    );

    return (
        <div class="w-full h-full overflow-y-auto overflow-x-hidden bg-[#E9DBC9] flex flex-col">
            <div class="relative w-full h-[90vh] flex flex-col items-center justify-between p-5 overflow-hidden">
                <img
                    src={bgPic}
                    alt="Background"
                    class="absolute inset-0 w-full h-full object-cover z-0"
                />

                <div class="absolute inset-0 bg-[#521515]/70 z-0"></div>

                <div class="relative z-10 flex flex-col items-center justify-between h-full w-full">
                    <div class="relative w-full flex items-center justify-center mt-5 px-5 md:px-10">
                        <div class="flex flex-col items-center justify-center">
                            <img
                                src={logo}
                                alt="Purrlescent Logo"
                                class="w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] md:w-[50px] md:h-[50px] rounded-full object-cover"
                            />
                            <h1 class="text-[#E9DBC9] text-2l sm:text-3l md:text-4l font-bold">
                                Purrlescent
                            </h1>
                        </div>

                        <a
                            onClick={() => setIsLoginModalOpen(true)}
                            class="absolute right-1 text-[#E9DBC9] text-sm sm:text-base md:text-lg font-semibold hover:underline cursor-pointer"
                        >
                            Login
                        </a>
                    </div>

                    <div class="w-full flex flex-col items-center justify-between p-5">
                        <h1
                            style={{ fontFamily: '"Berkshire Swash", cursive' }}
                            class="text-[#E9DBC9] text-3xl sm:text-5xl md:text-6xl text-center leading-snug"
                        >
                            Where Feline Grace Meets Couture
                        </h1>

                        <button
                            onClick={() => {
                                window.scrollTo({
                                    top: 700,
                                    behavior: "smooth",
                                });
                            }}
                            class="relative overflow-hidden w-3/4 sm:w-1/2 lg:w-2/3 xl:w-3/5 py-4 sm:py-5 text-[#E9DBC9] text-lg sm:text-xl lg:text-2xl xl:text-3xl bg-transparent border-[4px] sm:border-[6px] lg:border-[7px] border-[#E9DBC9] rounded-xl font-extrabold tracking-[0.2em] sm:tracking-[0.3em] lg:tracking-[0.4em] mt-8 hover:bg-[#E9DBC9] hover:text-[#661f13] whitespace-nowrap transition-all duration-500"
                        >
                            <span class="relative z-10">EXPLORE</span>
                            <span class="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 transition-all duration-700 hover:left-[100%]"></span>
                        </button>
                    </div>

                    <div />
                </div>

            </div>

            <div
                class="w-full flex justify-center items-center cursor-pointer"
                onClick={() => {
                    window.scrollTo({
                        top: 700,
                        behavior: "smooth",
                    });
                }}
            >
                <img
                    src={downArrow}
                    alt="Arrow Down"
                    class="w-[40px] sm:w-[50px] h-auto p-2.5 transition-transform duration-300 hover:scale-110"
                />
            </div>

            <div class="w-full min-h-[90vh] flex flex-col-reverse md:flex-row items-center justify-around py-16 md:py-24 gap-10 md:gap-0">
                <div class="w-4/5 md:w-2/5 flex flex-col items-center justify-center gap-8">
                    <div class="w-full md:w-3/4 flex flex-col items-center justify-center text-center">
                        <h2 class="text-[#615352] font-extrabold text-xl sm:text-2xl md:text-3xl mb-4">
                            Because Your Cat Deserves The Crown
                        </h2>
                        <p class="text-[#615352] text-base sm:text-lg md:text-2xl leading-snug">
                            Turn everyday moments into royal occasions with handcrafted luxury
                            accessories and apparel designed exclusively for cats.
                        </p>
                    </div>
                    <button
                        onClick={() => cScreen("/collections/item", {
                            state: {
                                name: "Lace Pearl Collar",
                                price: "$80.00",
                                description: "A handcrafted lace bow collar, decorated with pearls and frills for that princess look.",
                                note: "Each collar is handmade, so color and lace pattern may vary slightly.",
                                image: pic1LaceCollar,
                            }
                        })}
                        class="relative overflow-hidden w-3/4 md:w-3/5 py-3 text-[#615352] text-base sm:text-lg md:text-xl bg-transparent border-[3px] sm:border-[5px] border-[#615352] rounded-lg font-extrabold tracking-wider hover:bg-[#615352] hover:text-[#E9DBC9] transition-all duration-500"
                    >
                        Discover the crown
                    </button>
                </div>

                <div class="relative w-4/5 md:w-2/5 flex items-center justify-center group">
                    <img
                        src={pic1LaceCollar}
                        alt="Cat 1"
                        class="w-full h-auto border-2 border-[#615352] transition duration-300 ease-in-out group-hover:grayscale group-hover:opacity-80"
                    />
                    <button
                        onClick={() =>
                            openQuickPreview({
                                name: "Lace Pearl Collar",
                                price: "$80.00",
                                description: "A handcrafted lace bow collar, decorated with pearls and frills for that princess look.",
                                note: "Each collar is handmade, so color and lace pattern may vary slightly.",
                                image: pic1LaceCollar,
                            })
                        }
                        class="absolute opacity-0 group-hover:opacity-100 bg-[#615352]/90 text-[#E9DBC9] px-6 py-2 rounded-md text-lg font-semibold transition-all duration-300"
                    >
                        Quick Preview
                    </button>
                </div>
            </div>

            <div class="w-full min-h-[70vh] bg-[#615352] flex flex-col items-center justify-center gap-10 sm:gap-16 p-5 text-center">
                <h2 class="text-[#E9DBC9] text-3xl sm:text-4xl md:text-5xl font-extrabold">
                    Answer Burning Questions
                </h2>

                <div class="w-full md:w-3/4 flex flex-col items-center justify-center text-center">
                    <p class="text-[#E9DBC9] text-xl sm:text-2xl md:text-3xl font-extrabold mb-2">
                        What makes us different?
                    </p>
                    <p class="text-[#E9DBC9] text-base sm:text-lg md:text-2xl leading-relaxed">
                        At Domus Purrlescent, pet couture blossoms like refined artwork. Each collar,
                        imperial crown, and bespoke outfit is lovingly hand-stitched using silk,
                        velvet, and delicate lace, then lavishly finished with pearls, gold-thread
                        embroidery, and semi-precious gemstones. Every garment whispers a distinct
                        story — one-of-a-kind from the first sketch to the final kiss.
                    </p>
                </div>
            </div>

            <div class="w-full flex flex-col md:flex-row items-center justify-around py-16 md:py-24 gap-10 md:gap-0">
                <div class="w-4/5 md:w-2/5 flex flex-col items-center justify-between">
                    <div class="w-full flex items-center justify-center group">
                        <img
                            src={pic2PearlCrown}
                            alt="Cat 2"
                            class="w-full h-[60vh] md:h-[90vh] object-cover transition duration-300 ease-in-out group-hover:grayscale group-hover:opacity-80"
                        />
                        <button
                            onClick={() =>
                                openQuickPreview({
                                    name: "Her Meowjesty Crown Set",
                                    price: "$250.00",
                                    description: "A pearl-studded crown fit for royalty — perfect for elegant portraits or special occasions.",
                                    note: "Crown comes with adjustable strap for comfort.",
                                    image: pic2PearlCrown,
                                })
                            }
                            class="absolute opacity-0 group-hover:opacity-100 bg-[#615352]/90 text-[#E9DBC9] px-6 py-2 rounded-md text-lg font-semibold transition-all duration-300"
                        >
                            Quick Preview
                        </button>
                    </div>

                    <div class="w-full bg-[#615352] h-[400px] flex flex-col items-center justify-center gap-8 py-10 px-6">
                        <div class="w-full md:w-3/4 flex flex-col items-center justify-center text-center">
                            <h2 class="text-[#E9DBC9] font-extrabold text-xl sm:text-2xl md:text-3xl mb-4">
                                Her Meowjesty
                            </h2>
                            <p class="text-[#E9DBC9] text-base sm:text-lg md:text-2xl leading-snug">
                                Crown your queen with the elegance she deserves.
                                Whether she’s ruling her kingdom or attending a royal ball,
                                this set guarantees she shines with regal grace.
                            </p>
                        </div>
                        <button
                            onClick={() => cScreen("/collections/item", {
                                state: {
                                    name: "Her Meowjesty Crown Set",
                                    price: "$250.00",
                                    description: "A pearl-studded crown fit for royalty — perfect for elegant portraits or special occasions.",
                                    note: "Crown comes with adjustable strap for comfort.",
                                    image: pic2PearlCrown,
                                }
                            })}
                            class="relative overflow-hidden w-4/5 md:w-3/4 py-3 text-[#E9DBC9] text-xs sm:text-sm md:text-base bg-transparent border-[3px] sm:border-[5px] border-[#E9DBC9] rounded-lg font-extrabold tracking-wider hover:bg-[#E9DBC9] hover:text-[#615352] transition-all duration-500"
                        >
                            Enter the Throne Room
                        </button>
                    </div>
                </div>

                <div class="w-4/5 md:w-2/5 flex flex-col items-center justify-between">
                    <div class="w-full flex items-center justify-center group">
                        <img
                            src={pic3ShadesChain}
                            alt="Cat 3"
                            class="w-full h-[60vh] md:h-[90vh] object-cover transition duration-300 ease-in-out group-hover:grayscale group-hover:opacity-80"
                        />
                        <button
                            onClick={() =>
                                openQuickPreview({
                                    name: "Big Meowney Set",
                                    price: "$180.00",
                                    description: "Step aside, peasants! Big Meowney has entered the room. This set features sleek, black-tinted shades and a chunky gold chain that turns any cat into the ultimate mogul.",
                                    note: "Shades come with a soft strap for a secure fit. Chain is lightweight and safe for short wear during photoshoots.",
                                    image: pic3ShadesChain,
                                })
                            }
                            class="absolute opacity-0 group-hover:opacity-100 bg-[#615352]/90 text-[#E9DBC9] px-6 py-2 rounded-md text-lg font-semibold transition-all duration-300"
                        >
                            Quick Preview
                        </button>
                    </div>

                    <div class="w-full bg-[#615352] h-[400px] flex flex-col items-center justify-center gap-8 py-10 px-6">
                        <div class="w-full md:w-3/4 flex flex-col items-center justify-center text-center">
                            <h2 class="text-[#E9DBC9] font-extrabold text-xl sm:text-2xl md:text-3xl mb-4">
                                Big Meowney
                            </h2>
                            <p class="text-[#E9DBC9] text-base sm:text-lg md:text-2xl leading-snug">
                                This stylish duo comes with sleek,
                                tinted shades and a bold gold chain,
                                giving your cat that boss-level swagger
                                and unmistakable “don’t mess with me” energy.
                            </p>
                        </div>
                        <button
                            onClick={() => cScreen("/collections/item", {
                                state: {
                                    name: "Big Meowney Set",
                                    price: "$180.00",
                                    description: "Step aside, peasants! Big Meowney has entered the room. This set features sleek, black-tinted shades and a chunky gold chain that turns any cat into the ultimate mogul.",
                                    note: "Shades come with a soft strap for a secure fit. Chain is lightweight and safe for short wear during photoshoots.",
                                    image: pic3ShadesChain,
                                }
                            })}
                            class="relative overflow-hidden w-4/5 md:w-3/4 py-3 text-[#E9DBC9] text-xs sm:text-sm md:text-base bg-transparent border-[3px] sm:border-[5px] border-[#E9DBC9] rounded-lg font-extrabold tracking-wider hover:bg-[#E9DBC9] hover:text-[#615352] transition-all duration-500"
                        >
                            Count the Cash
                        </button>
                    </div>
                </div>
            </div>

            <div class="w-full flex flex-col md:flex-row items-stretch justify-center">
                <div class="w-full md:w-1/2 h-[70vh] flex items-center justify-center group">
                    <img
                        src={pic4Jazzy}
                        alt="Cat 4"
                        class="w-full h-full object-cover transition duration-300 ease-in-out group-hover:grayscale group-hover:opacity-80"
                    />
                    <button
                        onClick={() =>
                            openQuickPreview({
                                name: "Jazz Paw Set",
                                price: "$220.00",
                                description: "Step into the Roaring ’20s with the Jazz Paw Set — a dazzling ensemble featuring a feathered headpiece and a pearl-webbed collar inspired by flapper fashion. Designed for the cat who loves to sparkle under the spotlight, this set exudes vintage glamour and timeless charm.",
                                modelInfo: "Model cat weighs 8 lbs and is wearing the small collar with adjustable pearl webbing.",
                                note: "Headpiece includes soft elastic for comfort. Pearls are faux and lightweight for safe wear during photoshoots or special events.",
                                image: pic4Jazzy,
                            })
                        }
                        class="absolute opacity-0 group-hover:opacity-100 bg-[#615352]/90 text-[#E9DBC9] px-6 py-2 rounded-md text-lg font-semibold transition-all duration-300"
                    >
                        Quick Preview
                    </button>
                </div>

                <div class="w-full md:w-1/2 h-[70vh] bg-[#615352] flex flex-col items-center justify-center gap-6 py-8 px-6 text-center">
                    <h2 class="text-[#E9DBC9] text-2xl sm:text-3xl md:text-4xl font-extrabold">
                        Jazz Paw
                    </h2>

                    <div class="w-full md:w-3/4 flex flex-col items-center justify-center text-center">
                        <p class="text-[#E9DBC9] text-lg sm:text-xl md:text-2xl font-extrabold mb-2">
                            Vintage Feather & Bead Cat Costume Set
                        </p>
                        <p class="text-[#E9DBC9] text-sm sm:text-base md:text-lg leading-relaxed">
                            Step back into the Roaring ’20s with Jazz Paw.
                            Featuring a feathered headpiece and shimmering bead details,
                            this set transforms your kitty into the ultimate flapper star.
                            Glamorous, classy, and full of swing,
                            it’s feline fashion straight out of the jazz age.
                        </p>
                    </div>
                    <button
                        onClick={() => cScreen("/collections/item", {
                            state: {
                                name: "Jazz Paw Set",
                                price: "$220.00",
                                description: "Step into the Roaring ’20s with the Jazz Paw Set — a dazzling ensemble featuring a feathered headpiece and a pearl-webbed collar inspired by flapper fashion. Designed for the cat who loves to sparkle under the spotlight, this set exudes vintage glamour and timeless charm.",
                                modelInfo: "Model cat weighs 8 lbs and is wearing the small collar with adjustable pearl webbing.",
                                note: "Headpiece includes soft elastic for comfort. Pearls are faux and lightweight for safe wear during photoshoots or special events.",
                                image: pic4Jazzy,
                            }
                        })}
                        class="relative overflow-hidden w-4/5 py-2 text-[#E9DBC9] text-xs sm:text-sm md:text-base bg-transparent border-[4px] border-[#E9DBC9] rounded-lg font-extrabold tracking-wider hover:bg-[#E9DBC9] hover:text-[#615352] transition-all duration-500"
                    >
                        Hit the Spotlight
                    </button>
                </div>
            </div>

            <div class="w-full flex flex-col md:flex-row items-stretch justify-around py-16 md:py-20 gap-8 px-6 md:px-12 lg:px-20">
                <div class="w-full sm:w-3/4 md:w-1/4 flex flex-col items-center justify-between bg-[#615352] overflow-hidden">
                    <div class='w-full flex items-center justify-center group'>
                        <img
                            src={pic5FlowerLace}
                            alt="Cat 5"
                            class="w-full h-[40vh] md:h-[45vh] object-cover transition duration-300 ease-in-out group-hover:grayscale group-hover:opacity-80"
                        />
                        <button
                            onClick={() =>
                                openQuickPreview({
                                    name: "Purrlina Bloom Lace Cape",
                                    price: "$165.00",
                                    description: "Graceful and sweet, the Purrlina Bloom Lace Cape wraps your feline in floral elegance. Featuring delicate lace embroidered with soft blossoms and tied with a satin ribbon, this piece is made for garden picnics and afternoon naps in the sun.",
                                    modelInfo: "Model cat weighs 7 lbs and is wearing the standard size lace cape.",
                                    note: "Cape includes adjustable ribbon ties for comfort. Hand wash only to preserve lace detail.",
                                    image: pic5FlowerLace,
                                })
                            }
                            class="absolute opacity-0 group-hover:opacity-100 bg-[#615352]/90 text-[#E9DBC9] px-6 py-2 rounded-md text-lg font-semibold transition-all duration-300"
                        >
                            Quick Preview
                        </button>
                    </div>

                    <div class="flex flex-col items-center justify-between flex-1 gap-5 py-6 px-5 text-center">
                        <h2 class="text-[#E9DBC9] font-extrabold text-base sm:text-lg md:text-xl">
                            Purrlina Bloom
                        </h2>
                        <p class="text-[#E9DBC9] text-sm sm:text-base md:text-lg leading-snug">
                            A delicate lace cape tied with a ribbon,
                            embroidered with dainty flowers,
                            perfect for turning your kitty into a graceful garden princess.
                        </p>
                        <button
                            onClick={() => cScreen("/collections/item", {
                                state: {
                                    name: "Purrlina Bloom Lace Cape",
                                    price: "$165.00",
                                    description: "Graceful and sweet, the Purrlina Bloom Lace Cape wraps your feline in floral elegance. Featuring delicate lace embroidered with soft blossoms and tied with a satin ribbon, this piece is made for garden picnics and afternoon naps in the sun.",
                                    modelInfo: "Model cat weighs 7 lbs and is wearing the standard size lace cape.",
                                    note: "Cape includes adjustable ribbon ties for comfort. Hand wash only to preserve lace detail.",
                                    image: pic5FlowerLace,
                                }
                            })}
                            class="relative overflow-hidden w-4/5 md:w-3/4 py-3 text-[#E9DBC9] text-xs sm:text-sm md:text-base bg-transparent border-[3px] sm:border-[5px] border-[#E9DBC9] rounded-lg font-extrabold tracking-wider hover:bg-[#E9DBC9] hover:text-[#615352] transition-all duration-500"
                        >
                            Smell Flowers
                        </button>
                    </div>
                </div>

                <div class="w-full sm:w-3/4 md:w-1/4 flex flex-col items-center justify-between bg-[#615352] overflow-hidden">
                    <div class='w-full flex items-center justify-center group'>
                        <img
                            src={pic6CrownCape}
                            alt="Cat 6"
                            class="w-full h-[40vh] md:h-[45vh] object-cover transition duration-300 ease-in-out group-hover:grayscale group-hover:opacity-80"
                        />
                        <button
                            onClick={() =>
                                openQuickPreview({
                                    name: "The Cat King Regal Set",
                                    price: "$240.00",
                                    description: "Rule the realm in style with The Cat King Set — a royal ensemble featuring a velvety cape trimmed in gold and a gleaming miniature crown. Perfect for birthdays, photo sessions, or any day your cat feels like being worshipped (so, every day).",
                                    modelInfo: "Model cat weighs 11 lbs and is wearing the medium-size cape and crown set.",
                                    note: "Crown includes adjustable elastic strap. Cape attaches securely with a soft Velcro closure.",
                                    image: pic6CrownCape,
                                })
                            }
                            class="absolute opacity-0 group-hover:opacity-100 bg-[#615352]/90 text-[#E9DBC9] px-6 py-2 rounded-md text-lg font-semibold transition-all duration-300"
                        >
                            Quick Preview
                        </button>
                    </div>
                    <div class="flex flex-col items-center justify-between flex-1 gap-5 py-6 px-5 text-center">
                        <h2 class="text-[#E9DBC9] font-extrabold text-base sm:text-lg md:text-xl">
                            The Cat King
                        </h2>
                        <p class="text-[#E9DBC9] text-sm sm:text-base md:text-lg leading-snug">
                            Rule the kingdom of treats with The Cat King set.
                            Featuring a royal cape and gleaming crown,
                            makes your feline the undisputed ruler of the realm.
                        </p>
                        <button
                            onClick={() => cScreen("/collections/item", {
                                state: {
                                    name: "The Cat King Regal Set",
                                    price: "$240.00",
                                    description: "Rule the realm in style with The Cat King Set — a royal ensemble featuring a velvety cape trimmed in gold and a gleaming miniature crown. Perfect for birthdays, photo sessions, or any day your cat feels like being worshipped (so, every day).",
                                    modelInfo: "Model cat weighs 11 lbs and is wearing the medium-size cape and crown set.",
                                    note: "Crown includes adjustable elastic strap. Cape attaches securely with a soft Velcro closure.",
                                    image: pic6CrownCape,
                                }
                            })}
                            class="relative overflow-hidden w-4/5 md:w-3/4 py-3 text-[#E9DBC9] text-xs sm:text-sm md:text-base bg-transparent border-[3px] sm:border-[5px] border-[#E9DBC9] rounded-lg font-extrabold tracking-wider hover:bg-[#E9DBC9] hover:text-[#615352] transition-all duration-500"
                        >
                            Bow to the King
                        </button>
                    </div>
                </div>

                <div class="w-full sm:w-3/4 md:w-1/4 flex flex-col items-center justify-between bg-[#615352] overflow-hidden">
                    <div class='w-full flex items-center justify-center group'>
                        <img
                            src={pic7WitchHat}
                            alt="Cat 7"
                            class="w-full h-[40vh] md:h-[45vh] object-cover transition duration-300 ease-in-out group-hover:grayscale group-hover:opacity-80"
                        />
                        <button
                            onClick={() =>
                                openQuickPreview({
                                    name: "Hex Meow Witch Set",
                                    price: "$190.00",
                                    description: "Summon irresistible charm with the Hex Meow Set. Complete with a pointed witch hat and shimmering midnight cape, this look brings a dash of magic and mischief to your cat’s wardrobe. Ideal for Halloween, themed shoots, or just enchanting houseguests.",
                                    modelInfo: "Model cat weighs 9 lbs and is wearing the standard witch set.",
                                    note: "Hat includes adjustable chin strap for comfort. Cape is lightweight with subtle shimmer detailing.",
                                    image: pic7WitchHat,
                                })
                            }
                            class="absolute opacity-0 group-hover:opacity-100 bg-[#615352]/90 text-[#E9DBC9] px-6 py-2 rounded-md text-lg font-semibold transition-all duration-300"
                        >
                            Quick Preview
                        </button>
                    </div>

                    <div class="flex flex-col items-center justify-between flex-1 gap-5 py-6 px-5 text-center">
                        <h2 class="text-[#E9DBC9] font-extrabold text-base sm:text-lg md:text-xl">
                            Hex Meow
                        </h2>
                        <p class="text-[#E9DBC9] text-sm sm:text-base md:text-lg leading-snug">
                            Cast a spell of cuteness with Hex Meow.
                            Purrfect for spooky nights, magic mischief,
                            or just everyday enchantment.
                        </p>
                        <button
                            onClick={() => cScreen("/collections/item", {
                                state: {
                                    name: "Hex Meow Witch Set",
                                    price: "$190.00",
                                    description: "Summon irresistible charm with the Hex Meow Set. Complete with a pointed witch hat and shimmering midnight cape, this look brings a dash of magic and mischief to your cat’s wardrobe. Ideal for Halloween, themed shoots, or just enchanting houseguests.",
                                    modelInfo: "Model cat weighs 9 lbs and is wearing the standard witch set.",
                                    note: "Hat includes adjustable chin strap for comfort. Cape is lightweight with subtle shimmer detailing.",
                                    image: pic7WitchHat,
                                }
                            })}
                            class="relative overflow-hidden w-4/5 md:w-3/4 py-3 text-[#E9DBC9] text-xs sm:text-sm md:text-base bg-transparent border-[3px] sm:border-[5px] border-[#E9DBC9] rounded-lg font-extrabold tracking-wider hover:bg-[#E9DBC9] hover:text-[#615352] transition-all duration-500"
                        >
                            Cast a Spell
                        </button>
                    </div>
                </div>
            </div>

            <div class="w-full flex flex-col-reverse md:flex-row items-stretch justify-center mb-12">
                <div class="w-full md:w-1/2 h-[70vh] bg-[#615352] flex flex-col items-center justify-center gap-6 py-8 px-6 text-center">
                    <h2 class="text-[#E9DBC9] text-2xl sm:text-3xl md:text-4xl font-extrabold">
                        SnugglePaw
                    </h2>

                    <div class="w-full md:w-3/4 flex flex-col items-center justify-center text-center">
                        <p class="text-[#E9DBC9] text-lg sm:text-xl md:text-2xl font-extrabold mb-2">
                            Crochet Baby Bonnet
                        </p>
                        <p class="text-[#E9DBC9] text-sm sm:text-base md:text-lg leading-relaxed">
                            Dress your kitty in baby-soft charm with the SnugglePaw Bonnet.
                            Hand-crocheted with delicate detail and tied with a gentle ribbon,
                            it’s the perfect touch for sweet, cuddly vibes.
                            Light, comfy, and irresistibly adorable.
                        </p>
                    </div>
                    <button
                        onClick={() => cScreen("/collections/item", {
                            state: {
                                name: "SnugglePaw Crochet Baby Bonnet",
                                price: "$95.00",
                                description: "Wrap your kitty in cozy charm with the SnugglePaw Crochet Baby Bonnet. Handcrafted with delicate yarn and tied with a soft ribbon, it’s perfect for gentle snuggles and adorable photoshoots. Lightweight, comfy, and irresistibly sweet.",
                                modelInfo: "Model cat weighs 6 lbs and is wearing the small-size bonnet.",
                                note: "Bonnet features soft elastic ribbon for secure, comfortable wear. Hand wash recommended.",
                                image: pic8BabyBonnet,
                            }
                        })}
                        class="relative overflow-hidden w-4/5 py-2 text-[#E9DBC9] text-xs sm:text-sm md:text-base bg-transparent border-[4px] border-[#E9DBC9] rounded-lg font-extrabold tracking-wider hover:bg-[#E9DBC9] hover:text-[#615352] transition-all duration-500"
                    >
                        Cuddle Up
                    </button>
                </div>

                <div class="w-full md:w-1/2 h-[70vh] flex items-center justify-center group">
                    <img
                        src={pic8BabyBonnet}
                        alt="Cat 8"
                        class="w-full h-full object-cover transition duration-300 ease-in-out group-hover:grayscale group-hover:opacity-80"
                    />
                    <button
                        onClick={() =>
                            openQuickPreview({
                                name: "SnugglePaw Crochet Baby Bonnet",
                                price: "$95.00",
                                description: "Wrap your kitty in cozy charm with the SnugglePaw Crochet Baby Bonnet. Handcrafted with delicate yarn and tied with a soft ribbon, it’s perfect for gentle snuggles and adorable photoshoots. Lightweight, comfy, and irresistibly sweet.",
                                modelInfo: "Model cat weighs 6 lbs and is wearing the small-size bonnet.",
                                note: "Bonnet features soft elastic ribbon for secure, comfortable wear. Hand wash recommended.",
                                image: pic8BabyBonnet,
                            })
                        }
                        class="absolute opacity-0 group-hover:opacity-100 bg-[#615352]/90 text-[#E9DBC9] px-6 py-2 rounded-md text-lg font-semibold transition-all duration-300"
                    >
                        Quick Preview
                    </button>
                </div>
            </div>

            <div class="w-full min-h-[90vh] flex flex-col md:flex-row items-center justify-around py-16 md:py-24 gap-10 md:gap-0">
                <div class="w-4/5 md:w-2/5 flex items-center justify-center group">
                    <img
                        src={pic9GreenEyeAndBow}
                        alt="Cat 9"
                        class="w-full h-auto border-2 border-[#615352] transition duration-300 ease-in-out group-hover:grayscale group-hover:opacity-80"
                    />
                    <button
                        onClick={() =>
                            openQuickPreview({
                                name: "Green Lace Bow Collar",
                                price: "$120.00",
                                description: "This elegant lace bow collar is custom-dyed to match your cat’s mesmerizing green eyes. More than just an accessory, it exudes sophistication and adds a subtle whisper of charm to every graceful glance. Perfect for photo ops, strolls, or simply turning heads.",
                                modelInfo: "Model cat weighs 8 lbs and is wearing the adjustable lace bow collar.",
                                note: "Collar features an adjustable strap for comfort and safety. Lightweight, high-quality lace designed for short- or long-wear occasions.",
                                image: pic9GreenEyeAndBow,
                            })
                        }
                        class="absolute opacity-0 group-hover:opacity-100 bg-[#615352]/90 text-[#E9DBC9] px-6 py-2 rounded-md text-lg font-semibold transition-all duration-300"
                    >
                        Quick Preview
                    </button>
                </div>

                <div class="w-4/5 md:w-2/5 flex flex-col items-center justify-center gap-8">
                    <div class="w-full md:w-3/4 flex flex-col items-center justify-center text-center">
                        <h2 class="text-[#615352] font-extrabold text-xl sm:text-2xl md:text-3xl mb-4">
                            The Envy of Every Catwalk
                        </h2>
                        <p class="text-[#615352] text-base sm:text-lg md:text-2xl leading-snug">
                            This elegant green lace bow collar is more than an accessory.
                            It’s a reflection of your cat’s unique charm.
                            Custom-dyed to match those mesmerizing green eyes,
                            it adds a whisper of sophistication to every graceful glance.
                        </p>
                    </div>
                    <button
                        onClick={() => cScreen("/collections/item", {
                            state: {
                                name: "Green Lace Bow Collar",
                                price: "$120.00",
                                description: "This elegant lace bow collar is custom-dyed to match your cat’s mesmerizing green eyes. More than just an accessory, it exudes sophistication and adds a subtle whisper of charm to every graceful glance. Perfect for photo ops, strolls, or simply turning heads.",
                                modelInfo: "Model cat weighs 8 lbs and is wearing the adjustable lace bow collar.",
                                note: "Collar features an adjustable strap for comfort and safety. Lightweight, high-quality lace designed for short- or long-wear occasions.",
                                image: pic9GreenEyeAndBow,
                            }
                        })}
                        class="relative overflow-hidden w-3/4 md:w-3/5 py-3 text-[#615352] text-base sm:text-lg md:text-xl bg-transparent border-[3px] sm:border-[5px] border-[#615352] rounded-lg font-extrabold tracking-wider hover:bg-[#615352] hover:text-[#E9DBC9] transition-all duration-500"
                    >
                        Personalize Your Collar
                    </button>
                </div>
            </div>

            <div class="flex items-center justify-center gap-4 my-6">
                <div class="flex-1 h-[2px] bg-[#615352]/40 ml-20"></div>
                <img src={logo} alt="Divider Icon" class="w-7 h-7 rounded-full object-cover" />
                <div class="flex-1 h-[2px] bg-[#615352]/40 mr-20"></div>
            </div>

            <div class="w-full flex flex-col items-center justify-between p-5">
                <h1
                    style={{ fontFamily: '"Berkshire Swash", cursive' }}
                    class="text-[#615352] text-2xl sm:text-3xl md:text-4xl text-center leading-snug"
                >
                    You've reached the end. View our collections?
                </h1>

                <button
                    onClick={() => {
                        window.scrollTo({
                            top: 700,
                            behavior: "smooth",
                        });
                    }}
                    class="relative overflow-hidden w-2/3 sm:w-1/2 lg:w-1/3 py-2.5 sm:py-3 text-[#615352] text-base sm:text-lg lg:text-xl bg-transparent border-[3px] sm:border-[4px] border-[#615352] rounded-lg font-extrabold tracking-[0.15em] sm:tracking-[0.2em] mt-6 hover:bg-[#615352] hover:text-[#E9DBC9] whitespace-nowrap transition-all duration-500"
                >
                    <span class="relative z-10">COLLECTION</span>
                    <span class="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 transition-all duration-700 hover:left-[100%]"></span>
                </button>
            </div>

            {selectedItem && (
                <QuickPreviewModal
                    isVisible={isQuickPreviewVisible}
                    onClose={closeQuickPreview}
                    item={selectedItem}
                />
            )}

            <FloatButton.Group shape="circle" style={{ insetInlineEnd: 24 }}>
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
                    <FloatButton.BackTop
                        tooltip={<div>Back to top</div>}
                        visibilityHeight={0}
                        icon={
                            <ArrowUpOutlined
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
            </FloatButton.Group>

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
        </div>
    )
}

export default HomePage