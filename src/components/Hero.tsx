import React from "react";
import { Poppins } from "next/font/google";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Image from "next/image";


const poppins = Poppins({
    subsets: ['latin'],
    weight: ["100", "300", "400", "500", "700", "900"],
});

interface HeroProps {
    items: JSX.Element[];
}

const Hero: React.FC<HeroProps> = ({ items }) => {
    return (
        <div className={`${poppins.className} mt-[91px] md:mt-[120px] relative`}>
            <AliceCarousel
                autoPlay
                autoPlayStrategy="none"
                autoPlayInterval={4000}
                animationDuration={1000}
                infinite
                touchTracking={false}
                disableButtonsControls
                items={items}
                responsive={{
                    0: { items: 1 }, // Adjust the number of items visible on small screens
                    768: { items: 1 }, // Medium screens
                    1024: { items: 1 } // Larger screens
                }}
                paddingLeft={0} // Adjust as needed
                paddingRight={0} // Adjust as needed
            />
        </div>
    );
}

export default Hero;
