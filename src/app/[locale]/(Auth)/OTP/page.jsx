
"use client";



import { authClient } from "@/lib/auth-client";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { UpdateEmailVerify } from '@/lib/Action/EditData/EditUser'
import { GetOTpByEmail } from "@/lib/Action/GetData/GetOTP";
import sendemailverifyotp from "@/lib/Action/PostData/SendOtpemail";

export default function VerifyOtpPage() {
    const router = useRouter();
    const t = useTranslations("Signup");
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const inputRefs = useRef([]);

    const handleChange = (index, e) => {
        const value = e.target.value;


        if (value && !/^\d$/.test(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);


        if (value && index < inputRefs.current.length - 1) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (index, e) => {

        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    const handlePaste = (e) => {
        e.preventDefault();
        const pasteData = e.clipboardData.getData("text").trim();


        const digits = pasteData.replace(/\D/g, "").slice(0, 6).split("");

        if (digits.length === 0) return;

        const newOtp = [...otp];
        digits.forEach((digit, i) => {
            newOtp[i] = digit;
        });
        setOtp(newOtp);


        const nextIndex = digits.length < 6 ? digits.length : 5;
        inputRefs.current[nextIndex]?.focus();
    };


    // Handle Resend OTp Email 
    const handleresendotp = async (e) => {
        e.preventDefault();

        const Data = sessionStorage.getItem("signupData");
        const signupData = JSON.parse(Data);
        if (!signupData) {
            alert('Something went wrong , Please try again')
            router.push('/')
            return;
        }

        const email = signupData.email

        const OTPdata = await GetOTpByEmail(email);
        const OTP = OTPdata?.otp
        console.log(OTP)
        const data = await sendemailverifyotp(email, OTP)
        if (data.success === true) {
            alert("OTP sent successfully");
        }
        else {
            alert("Failed to send OTP");
        }


    }




    // Handle Submit event
    const handleSubmit = async (e) => {
        e.preventDefault();


        const data = sessionStorage.getItem("signupData");
        const signupData = JSON.parse(data);
        if (!signupData) {
            alert('Something went wrong , Please try again')
            router.push('/')
            return;
        }
        const name = signupData.name
        const email = signupData.email
        const password = signupData.password
        const OTPdata = await GetOTpByEmail(email);
        const OTP = OTPdata?.otp



        const code = otp.join("");



        if (Number(code) === OTP) {

            const { data, error } = await authClient.signUp.email({
                name: name,
                email: email,
                password: password,
                callbackURL: "/",
            });

            if (data?.token) {
                const verifyResult = await UpdateEmailVerify(email, true);
                console.log("Verify Result:", verifyResult);
                sessionStorage.removeItem("signupData");
                alert(t("messages.success"));
                router.push("/");
            } else if (error) {
                alert(t("messages.failed", { error: error.message }));
            }
        } else if (Number(code) !== OTP) {
            alert("Incorrect OTP");
        }


    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-black px-4">
            <div className="w-full max-w-md rounded-2xl border border-white/10 bg-zinc-950 p-8 shadow-xl">
                <h1 className="text-2xl font-semibold text-white">Verify your email</h1>
                <p className="mt-2 text-sm text-zinc-400">
                    We sent a 6-digit code to{" "}
                    <span className="font-medium text-white">your email</span>
                </p>

                {/* <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="flex justify-between gap-2">
                        {otp.map((digit, index) => (
                            <input
                                key={index}
                                ref={(el) => (inputRefs.current[index] = el)}
                                type="text"
                                inputMode="numeric"
                                maxLength={1}
                                value={digit}
                                onChange={(e) => handleChange(index, e)}
                                onKeyDown={(e) => handleKeyDown(index, e)}
                                onPaste={handlePaste}
                                className="h-14 w-12 rounded-lg border border-white/10 bg-zinc-900 text-center text-xl font-semibold text-white outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                            />
                        ))}
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-lg bg-amber-500 py-3 font-medium text-black transition hover:bg-amber-400"
                    >
                        Verify Email
                    </button>
                </form> */}
                <form className="mt-8 space-y-6 w-full max-w-md mx-auto px-4" onSubmit={handleSubmit}>
                    <div className="flex justify-center gap-2 sm:gap-3">
                        {otp.map((digit, index) => (
                            <input
                                key={index}
                                ref={(el) => (inputRefs.current[index] = el)}
                                type="text"
                                inputMode="numeric"
                                maxLength={1}
                                value={digit}
                                onChange={(e) => handleChange(index, e)}
                                onKeyDown={(e) => handleKeyDown(index, e)}
                                onPaste={handlePaste}
                                className="aspect-square w-10 sm:w-12 md:w-14 flex-1 max-w-14 rounded-lg border border-white/10 bg-zinc-900 text-center text-lg sm:text-xl font-semibold text-white outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                            />
                        ))}
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-lg bg-amber-500 py-3 font-medium text-black transition hover:bg-amber-400"
                    >
                        Verify Email
                    </button>
                </form>

                <div className="mt-6 text-center text-sm text-zinc-400">
                    Didn't get the code?{" "}
                    <button
                        type="button"
                        onClick={handleresendotp}
                        className="font-medium text-amber-400 hover:underline"
                    >
                        Resend code
                    </button>

                    <p className="mt-2 text-xs text-zinc-500">
                        Please check your Spam or Junk folder if you don't see the email
                        in your inbox.
                    </p>
                </div>


            </div>
        </div>
    );
}