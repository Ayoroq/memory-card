import Lottie from "lottie-react";
import loading from "../assets/lottie/loading.json";
export default function LoadingScreen() {
    return (
        <div className="loading-screen">
            <p>This is the loading screen</p>
            <Lottie animationData={loading} autoPlay={true} />
        </div>
    )
}