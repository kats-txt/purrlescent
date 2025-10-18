import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ConfigProvider, FloatButton, Modal } from 'antd';
import { ArrowUpOutlined } from "@ant-design/icons";

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
import LoginPage from '../login/LoginPage';

const HomePage = () => {
    const cScreen = useNavigate();

    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

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
                        <h1 class="text-[#E9DBC9] text-2xl sm:text-3xl md:text-4xl font-bold">
                            Purrlescent
                        </h1>

                        <a
                            onClick={() => setIsLoginModalOpen(true)}
                            className="absolute right-0 text-[#E9DBC9] text-sm sm:text-base md:text-lg font-semibold hover:underline cursor-pointer"
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
                            onClick={() => cScreen('/purrlescentcollections')}
                            class="relative overflow-hidden w-3/4 sm:w-1/2 lg:w-2/3 xl:w-3/5 py-4 sm:py-5 text-[#E9DBC9] text-lg sm:text-xl lg:text-2xl xl:text-3xl bg-transparent border-[4px] sm:border-[6px] lg:border-[7px] border-[#E9DBC9] rounded-xl font-extrabold tracking-[0.2em] sm:tracking-[0.3em] lg:tracking-[0.4em] mt-8 hover:bg-[#E9DBC9] hover:text-[#661f13] whitespace-nowrap transition-all duration-500"
                        >
                            <span class="relative z-10">COLLECTION</span>
                            <span class="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 transition-all duration-700 hover:left-[100%]"></span>
                        </button>
                    </div>

                    <img
                        src={logo}
                        alt="Purrlescent Logo"
                        class="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[100px] md:h-[100px] rounded-full object-cover mb-5"
                    />
                </div>

            </div>

            <div class="w-full flex justify-center items-center">
                <img
                    src={downArrow}
                    alt="Arrow Down"
                    class="w-[40px] sm:w-[50px] h-auto p-2.5"
                />
            </div>

            <div class="w-full min-h-[90vh] flex flex-col md:flex-row items-center justify-around py-16 md:py-24 gap-10 md:gap-0">
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
                        onClick={() => cScreen('/purrlescentcollections')}
                        class="relative overflow-hidden w-3/4 md:w-3/5 py-3 text-[#615352] text-base sm:text-lg md:text-xl bg-transparent border-[3px] sm:border-[5px] border-[#615352] rounded-lg font-extrabold tracking-wider hover:bg-[#615352] hover:text-[#E9DBC9] transition-all duration-500"
                    >
                        Discover the crowns
                    </button>
                </div>

                <div class="w-4/5 md:w-2/5 flex items-center justify-center">
                    <img
                        src={pic1LaceCollar}
                        alt="Cat 1"
                        class="w-full h-auto border-2 border-[#615352]"
                    />
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
                    <div class="w-full">
                        <img
                            src={pic2PearlCrown}
                            alt="Cat 2"
                            class="w-full h-[60vh] md:h-[90vh] object-cover"
                        />
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
                            onClick={() => cScreen('/purrlescentcollections')}
                            class="relative overflow-hidden w-4/5 md:w-3/4 py-3 text-[#E9DBC9] text-xs sm:text-sm md:text-base bg-transparent border-[3px] sm:border-[5px] border-[#E9DBC9] rounded-lg font-extrabold tracking-wider hover:bg-[#E9DBC9] hover:text-[#615352] transition-all duration-500"
                        >
                            Enter the Throne Room
                        </button>
                    </div>
                </div>

                <div class="w-4/5 md:w-2/5 flex flex-col items-center justify-between">
                    <div class="w-full">
                        <img
                            src={pic3ShadesChain}
                            alt="Cat 3"
                            class="w-full h-[60vh] md:h-[90vh] object-cover"
                        />
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
                            onClick={() => cScreen('/purrlescentcollections')}
                            class="relative overflow-hidden w-4/5 md:w-3/4 py-3 text-[#E9DBC9] text-xs sm:text-sm md:text-base bg-transparent border-[3px] sm:border-[5px] border-[#E9DBC9] rounded-lg font-extrabold tracking-wider hover:bg-[#E9DBC9] hover:text-[#615352] transition-all duration-500"
                        >
                            Count the Cash
                        </button>
                    </div>
                </div>
            </div>

            <div class="w-full flex flex-col md:flex-row items-stretch justify-center">
                <div class="w-full md:w-1/2 h-[70vh]">
                    <img
                        src={pic4Jazzy}
                        alt="Elegant Cat"
                        class="w-full h-full object-cover"
                    />
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
                        onClick={() => cScreen('/purrlescentcollections')}
                        class="relative overflow-hidden w-4/5 py-2 text-[#E9DBC9] text-xs sm:text-sm md:text-base bg-transparent border-[4px] border-[#E9DBC9] rounded-lg font-extrabold tracking-wider hover:bg-[#E9DBC9] hover:text-[#615352] transition-all duration-500"
                    >
                        Hit the Spotlight
                    </button>
                </div>
            </div>

            <div class="w-full flex flex-col md:flex-row items-stretch justify-around py-16 md:py-20 gap-8 px-6 md:px-12 lg:px-20">
                <div class="w-full sm:w-3/4 md:w-1/4 flex flex-col items-center justify-between bg-[#615352] overflow-hidden">
                    <img
                        src={pic5FlowerLace}
                        alt="Cat 2"
                        class="w-full h-[40vh] md:h-[45vh] object-cover"
                    />

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
                            onClick={() => cScreen('/purrlescentcollections')}
                            class="relative overflow-hidden w-4/5 md:w-3/4 py-3 text-[#E9DBC9] text-xs sm:text-sm md:text-base bg-transparent border-[3px] sm:border-[5px] border-[#E9DBC9] rounded-lg font-extrabold tracking-wider hover:bg-[#E9DBC9] hover:text-[#615352] transition-all duration-500"
                        >
                            Smell Flowers
                        </button>
                    </div>
                </div>

                <div class="w-full sm:w-3/4 md:w-1/4 flex flex-col items-center justify-between bg-[#615352] overflow-hidden">
                    <img
                        src={pic6CrownCape}
                        alt="Cat 3"
                        class="w-full h-[40vh] md:h-[45vh] object-cover"
                    />

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
                            onClick={() => cScreen('/purrlescentcollections')}
                            class="relative overflow-hidden w-4/5 md:w-3/4 py-3 text-[#E9DBC9] text-xs sm:text-sm md:text-base bg-transparent border-[3px] sm:border-[5px] border-[#E9DBC9] rounded-lg font-extrabold tracking-wider hover:bg-[#E9DBC9] hover:text-[#615352] transition-all duration-500"
                        >
                            Bow to the King
                        </button>
                    </div>
                </div>

                <div class="w-full sm:w-3/4 md:w-1/4 flex flex-col items-center justify-between bg-[#615352] overflow-hidden">
                    <img
                        src={pic7WitchHat}
                        alt="Cat 4"
                        class="w-full h-[40vh] md:h-[45vh] object-cover"
                    />

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
                            onClick={() => cScreen('/purrlescentcollections')}
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
                        onClick={() => cScreen('/purrlescentcollections')}
                        class="relative overflow-hidden w-4/5 py-2 text-[#E9DBC9] text-xs sm:text-sm md:text-base bg-transparent border-[4px] border-[#E9DBC9] rounded-lg font-extrabold tracking-wider hover:bg-[#E9DBC9] hover:text-[#615352] transition-all duration-500"
                    >
                        Cuddle Up
                    </button>
                </div>

                <div class="w-full md:w-1/2 h-[70vh]">
                    <img
                        src={pic8BabyBonnet}
                        alt="Elegant Cat"
                        class="w-full h-full object-cover"
                    />
                </div>
            </div>
            {/* <FloatButton.BackTop
                visibilityHeight={0}
                style={{
                    backgroundColor: '#E9DBC9',
                    color: '#E9DBC9',
                }}
            />
            <Modal
                open={isLoginModalOpen}
                onCancel={() => setIsLoginModalOpen(false)}
                footer={null}
                centered
                width={700}
                closable={false}
            >
                <LoginPage />
            </Modal> */}
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