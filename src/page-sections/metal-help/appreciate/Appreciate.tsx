import Image from 'next/image'

const Appreciate = () => {
  return (
    <div className='flex-col'>
      <p className='text-[14px] font-bold mb-8 -ml-7 -mt-1'>Как вы себя чувствуете?</p>
      <div className='flex justify-between gap-6 mb-9 '>
        <div className=''>
          <Image className='!relative !w-[34.23px] !h-[32.71px]' src={'/star.svg'} alt='event' sizes='100%' fill />
        </div>
        <div className=''>
          <Image className='!relative !w-[34.23px] !h-[32.71px]' src={'/star.svg'} alt='event' sizes='100%' fill />
        </div>
        <div className=''>
          <Image className='!relative !w-[34.23px] !h-[32.71px]' src={'/star.svg'} alt='event' sizes='100%' fill />
        </div>
        <div className=''>
          <Image className='!relative !w-[34.23px] !h-[32.71px]' src={'/star.svg'} alt='event' sizes='100%' fill />
        </div>
        <div className=''>
          <Image className='!relative !w-[34.23px] !h-[32.71px]' src={'/star.svg'} alt='event' sizes='100%' fill />
        </div>
      </div>
    </div>
  )
}

export default Appreciate
