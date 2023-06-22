import Footer from '../components/footer'
import Header from '../components/header'
import SideBar from '../components/sidebar'
interface Props {
  children?: React.ReactNode
  heading?: string
}

const MainLayout = (props: Props) => {
  const { children, heading } = props
  return (
    <div className='flex'>
      <SideBar></SideBar>

      <div className='w-full px-2 py-5 md:pl-6 md:pr-6 lg:w-auto' id='id-section-right'>
        <Header heading={heading}></Header>
        <section className='overflow-x-hidden mt-9'>{children}</section>
      </div>
    </div>
  )
}

export default MainLayout
