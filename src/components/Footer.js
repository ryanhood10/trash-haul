import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
// import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';




function Footer() {
  return (
    <footer className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-600">
     
      <div className='lg:col-span-3 flex justify-between space-x-10'>
            <div>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'> Contact Information</h1>
            <h2 className='text-2xl'>Steve Kroeger</h2>
            <p className='text-lg py-4'>615.377.9779</p>
            <p className='text-lg'>SteveKroeger@email.com</p>

         
      </div>

        <div>
        <h2 className='text-2xl'>Steve Kroeger</h2>
            <p className='text-lg py-4'>615.377.9779</p>
            <p className='text-lg'>SteveKroeger@email.com</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
