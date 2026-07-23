// app/loading.js
export default function Loading() {
    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
            <div className="relative flex items-center justify-center">
                {/* Outer glowing blur */}
                <div className="absolute h-16 w-16 rounded-full bg-orange-500/20 blur-xl animate-pulse" />

                {/* Spinning gradient ring */}
                <div className="h-12 w-12 rounded-full border-2 border-neutral-800 border-t-orange-500 animate-spin" />
            </div>

            <p className="mt-4 text-xs font-medium tracking-widest text-neutral-400 uppercase animate-pulse">
                Loading...
            </p>
        </div>
    );
}