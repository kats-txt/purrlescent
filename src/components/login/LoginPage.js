import React, { useState } from 'react'
import logo from '../../pictures/Purrlescent - 1.png';

export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showSignup, setShowSignup] = useState(false)
    const [showReset, setShowReset] = useState(false)
    const [error, setError] = useState('')

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

    const handleSubmit = () => {
        if (!validateEmail(email)) {
            setError('Please enter a valid email address')
        } else {
            setError('')
            console.log('Signed in!')
        }
    }

    return (
        <div className="flex flex-col items-center justify-center w-full text-[#615352]">

            {!showSignup && !showReset && (
                <div className="flex flex-col items-center w-full gap-4">
                    <h2 className="text-xl sm:text-2xl font-bold mb-2">Welcome to Purrlescent</h2>
                    <img
                        src={logo}
                        alt="Purrlescent Logo"
                        class="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[70px] md:h-[70px] rounded-full object-cover mb-5"
                    />
                    <div className="w-4/5">
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-transparent border-b-2 border-[#615352] py-2 px-2 placeholder-[#615352]/60 
              focus:outline-none focus:bg-[#E9DBC9] focus:rounded-md focus:ring-2 focus:ring-[#615352] transition-all duration-300"
                        />
                        {error && (
                            <div className="text-[#f0523d] text-[10px] leading-4 mt-1">{error}</div>
                        )}
                    </div>

                    <div className="w-4/5">
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-transparent border-b-2 border-[#615352] py-2 px-2 placeholder-[#615352]/60 
              focus:outline-none focus:bg-[#E9DBC9] focus:rounded-md focus:ring-2 focus:ring-[#615352] transition-all duration-300"
                        />
                    </div>

                    <button
                        onClick={handleSubmit}
  className="w-4/5 py-2 text-[#E9DBC9] text-sm sm:text-base bg-[#615352] border-2 border-[#615352] rounded-md font-extrabold tracking-wide transform transition-all duration-300"
                    >
                        Sign In
                    </button>

                    <div className="flex justify-between w-4/5 mt-2 text-xs sm:text-sm">
                        <button
                            onClick={() => setShowReset(true)}
                            className="text-[#615352] hover:underline"
                        >
                            Forgot Password?
                        </button>
                        <button
                            onClick={() => setShowSignup(true)}
                            className="text-[#615352] hover:underline"
                        >
                            Create Account
                        </button>
                    </div>
                </div>
            )}

            {showSignup && (
                <div className="flex flex-col items-center w-full gap-3">
                    <h2 className="text-xl sm:text-2xl font-bold mb-2">Create Account</h2>

                    {['First Name', 'Last Name', 'Email', 'Create Password', 'Re-type Password'].map(
                        (placeholder, i) => (
                            <input
                                key={i}
                                type={placeholder.toLowerCase().includes('password') ? 'password' : 'text'}
                                placeholder={placeholder}
                                className="w-4/5 bg-transparent border-b-2 border-[#615352] py-2 px-2 placeholder-[#615352]/60 
                focus:outline-none focus:bg-[#E9DBC9] focus:rounded-md focus:ring-2 focus:ring-[#615352] transition-all duration-300"
                            />
                        )
                    )}

                    <button
  className="w-4/5 py-2 text-[#E9DBC9] text-sm sm:text-base bg-[#615352] border-2 border-[#615352] rounded-md font-extrabold tracking-wide transform transition-all duration-300"
                    >
                        Create Account
                    </button>

                    <button
                        onClick={() => setShowSignup(false)}
                        className="text-[#615352] hover:underline text-xs sm:text-sm mt-2"
                    >
                        Already have an account? Sign in
                    </button>
                </div>
            )}

            {showReset && (
                <div className="flex flex-col items-center w-full gap-3">
                    <h2 className="text-xl sm:text-2xl font-bold mb-2">Reset Password</h2>

                    <input
                        type="email"
                        placeholder="Email"
                        className="w-4/5 bg-transparent border-b-2 border-[#615352] py-2 px-2 placeholder-[#615352]/60 
            focus:outline-none focus:bg-[#E9DBC9] focus:rounded-md focus:ring-2 focus:ring-[#615352] transition-all duration-300"
                    />

                    <button
  className="w-4/5 py-2 text-[#E9DBC9] text-sm sm:text-base bg-[#615352] border-2 border-[#615352] rounded-md font-extrabold tracking-wide transform transition-all duration-300"
>
  Send Reset Link
</button>

                    <button
                        onClick={() => setShowReset(false)}
                        className="text-[#615352] hover:underline text-xs sm:text-sm mt-2"
                    >
                        Back to sign in
                    </button>
                </div>
            )}
        </div>
    )
}