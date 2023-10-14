import WomanImg from '../img/indian.png'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className=" h-[800px] bg-custom_bg bg-cover bg-no-repeat bg- py-24 text-custom_text uppercase">
      <div className="container mx-auto flex justify-around h-full">
        <div className='flex flex-col justify-center'>
          <div className='font-semibold flex items-center uppercase'>
            <div className='w-10 h-[2px] bg-custom_primary mr-3'></div>New Trend
          </div>
          <h1 className='text-[70px] leading-[1.1] font-light mb-4'>
            Autumn Sale Stylish<br />
            <span className='font-semibold'>People</span>
          </h1>
          <Link to={'/'} className='self-start uppercase font-semibold border-b-2 border-custom_primary'>Discover More</Link>
        </div>
        <div className='hidden lg:block'>
          <img className=' h-[705px]'  src={WomanImg} alt="Woman's photo" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
