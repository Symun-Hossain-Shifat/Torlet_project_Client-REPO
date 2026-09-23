export const GetOTpByEmail = async (email) => {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/api/auth/otp?email=${encodeURIComponent(email)}`,
            {
                cache: "no-store",
            }
        );

        if (!res.ok) {
            console.error("GET OTP failed:", res.status);
            return null;
        }

        const data = await res.json();



        return data;

    } catch (error) {
        console.error("Failed to fetch OTP:", error);
        return null;
    }
};