import Image from 'next/image';
import Heading from './ui/Heading';
import { motion } from 'framer-motion';

export default function Map() {
    return (
        <div className='w-full md:w-11/12 mx-auto'>
            <Heading>Our Presence</Heading>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, type: 'linear' }}
                className='flex items-center justify-center'>
                <Image src="/images/map.svg" alt="Map" width={1000} height={1000} />
            </motion.div>
        </div>
    )
}