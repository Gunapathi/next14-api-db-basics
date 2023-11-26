const MenuItem = () => {
    return (
        <div className='bg-gray-300 p-4 rounded-lg text-center relative'>
            <img src={'/images/pizza.png'} alt={'Pizza'} className='w-28 mx-auto' />

            <h4 className='font-bold mb-2 text-xl'>Pepperoni Pizza</h4>
            <p className='text-sm mb-4'>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
            <button className='bg-primary text-white font-bold px-4 py-2 rounded-full'>Add to Cart $12</button>
        </div>
    )
}

export default MenuItem