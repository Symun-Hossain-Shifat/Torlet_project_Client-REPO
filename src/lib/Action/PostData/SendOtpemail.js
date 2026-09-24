export default async function sendemailverifyotp(email, otp) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/auth/email-verify-otp?email=${email}&otp=${otp}`, {
        method: 'POST'
    })

    const data = await res.json()

    return data
}