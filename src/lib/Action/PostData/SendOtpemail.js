export default async function sendemailverifyotp(email, otp) {
    try {
        await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/auth/email-verify-otp?email=${email}&otp=${otp}`, {
            method: 'POST'
        })

    } catch (error) {
        console.error("Welcome email error:", error);
    }

}

