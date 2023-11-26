import Image from 'next/image'
import MenuItem from '../menu/MenuItem'
import SectionHeader from './SectionHeader'

const HomeMenu = () => {
    return (
        <section className="">
            <div className="relative">
                {/* <div className='h-36 w-36 absolute top-[-60px] left-0'>
                    <Image
                        src={'/images/sallad1.png'}
                        alt={'salad1'}
                        layout='fill'
                        objectFit='contain'
                    />
                </div>
                <div className='h-36 w-36 absolute top-[-60px] right-0'>
                    <Image
                        src={'/images/sallad2.png'}
                        alt={'salad1'}
                        layout='fill'
                        objectFit='contain'
                    />
                </div> */}
                <div className="text-center mb-4">
                    <SectionHeader
                        mainHeader={'check out'}
                        subHeader={'Menu'}
                    />
                </div>
            </div>

            <div className='grid grid-cols-3 gap-4 '>
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
            </div>
        </section>
    )
}

export default HomeMenu