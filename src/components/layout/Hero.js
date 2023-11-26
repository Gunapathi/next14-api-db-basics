import Image from 'next/image';
// import pizza from './images/pizza.png';

const Hero = () => {
    return (
        <section className='hero'>
            <div className='py-12'>
                <h1 className='text-4xl font-semibold'>
                    Everything is with <span className='text-primary'>
                        Pizza
                    </span>
                </h1>
                <p className='my-4 text-grey-500 text-sm'>Desc</p>
                <div className='flex'>
                    <button className='bg-primary text-white px-8 py-2 rounded-full'>order now</button>
                    <button className='capitalize font-bold ml-4'>learn more</button>
                </div>
            </div>
            <div className='relative'>
                <Image
                    src={'/images/pizza.png'}
                    layout='fill'
                    alt='pizza'
                    objectFit='contain'
                />
            </div>
        </section>
    )
}

export default Hero