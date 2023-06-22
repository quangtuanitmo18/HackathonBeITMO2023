const Newspaper = () => {
  return (
    <div className='flex-col'>
      <p className='text-[14px] font-bold mb-5 -ml-1 -mt-1'>Статьи</p>
      <div className='grid justify-between gap-3 overflow-auto max-h-[300px]'>
        <div className='border border-solid border-gray-gray12 rounded-md text-[12px] leading-[18px] px-2 py-1'>
          Что такое ментальное здоровье?
        </div>
        <div className='border border-solid border-gray-gray12 rounded-md text-[12px] leading-[18px] px-2 py-1'>
          Первый поход к психологу
        </div>
        <div className='border border-solid border-gray-gray12 rounded-md text-[12px] leading-[18px] px-2 py-1'>
          Нужен ли мне психолог?
        </div>
        <div className='border border-solid border-gray-gray12 rounded-md text-[12px] leading-[18px] px-2 py-1'>
          Как побороть тревожность?
        </div>
        <div className='border border-solid border-gray-gray12 rounded-md text-[12px] leading-[18px] px-2 py-1'>
          Чем могут помочь психологи?
        </div>
        <div className='border border-solid border-gray-gray12 rounded-md text-[12px] leading-[18px] px-2 py-1'>
          Борьба со стрессом во время ПА
        </div>
        <div className='border border-solid border-gray-gray12 rounded-md text-[12px] leading-[18px] px-2 py-1'>
          Как завести знакомства?
        </div>
        <div className='border border-solid border-gray-gray12 rounded-md text-[12px] leading-[18px] px-2 py-1'>
          5 правил поведения в команде
        </div>
      </div>
    </div>
  )
}

export default Newspaper
