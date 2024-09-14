import Marquee from "react-fast-marquee";
import Heading from "./ui/Heading";
import Image from "next/image";

const clients = [
  { logo: "/images/logo/aditya.png" },
  { logo: "/images/logo/airtel.png" },
  { logo: "/images/logo/blp.png" },
  { logo: "/images/logo/centuryply.png" },
  { logo: "/images/logo/cinepolis.png" },
  { logo: "/images/logo/ds.png" },
  { logo: "/images/logo/gulf.png" },
  { logo: "/images/logo/keepharma.png" },
  { logo: "/images/logo/occl.png" },
  { logo: "/images/logo/payrup.png" },
  { logo: "/images/logo/revivo.png" },
  { logo: "/images/logo/sterlite.png" },
  { logo: "/images/logo/wrigleys.png" },
];

export default function Clients() {
  return (
    <div className="w-full container mx-auto py-20 flex flex-col justify-center items-center gap-4">
      <h1 className="text-[#a60424] underline text-4xl md:text-6xl">Clients served</h1>
      
      <Marquee gradient={false} speed={50} className="my-10 py-2">
        {clients.map((client, idx) => (
          <Image
            key={idx}
            src={client.logo}
            alt="client logo"
            className="h-[6rem] md:h-24 p-4 mx-8 md:px-4 object-contain rounded-lg"
            style={{
              boxShadow:
                "4px 0px 4px 0px #00000008, 0px 4px 4px 0px #00000024, 0px 0px 4px 0px #00000014",
            }}
            width={200}
            height={400}
          />
        ))}
      </Marquee>
    </div>
  );
}
