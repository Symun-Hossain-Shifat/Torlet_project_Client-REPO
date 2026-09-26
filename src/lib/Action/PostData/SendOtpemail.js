
export default async function sendemailverifyotp(email, otp) {
    try {

        const response = await fetch(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/api/auth/email-verify-otp?email=${email}&otp=${otp}`,
            {
                method: "POST",
            }
        );



        const data = await response.json();



        if (!response.ok) {
            throw new Error(
                data?.message || "Failed to send verification OTP"
            );
        }

        return data;
    } catch (error) {
        console.error("❌ OTP email error:", error);
        throw error;
    }
}