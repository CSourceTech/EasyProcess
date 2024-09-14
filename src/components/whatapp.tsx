import { FaWhatsapp } from "react-icons/fa6";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const WhatsappButton = () => {
    const handleWhatsappClick = () => {
        window.open('', '_blank');
    };

    const logo = [
        {
          id: 1,
        name: "Have Questions?",
          designation: "Reach out to us on WhatsApp!",
          image:
            "/WhatsApp.png",
        },];

    return (
        <>
            <div
                className="fixed z-50 bottom-8 right-5 md:right-16 flex justify-center items-center cursor-pointer select-none"
                onClick={handleWhatsappClick}
            >
                {/* <FaWhatsapp className="text-white text-3xl" /> */}
                <AnimatedTooltip items={logo} />
            </div>
        </>
    );
};

export default WhatsappButton;
