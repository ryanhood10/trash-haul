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
            <h1 className='w-full text-3xl font-bold text-center text-[#00df9a]'> Find Us </h1>
            <nav>
                        <ul className="flex justify-between md:w-[75%] my-6">
                            <li>
                                <Link to="https://www.linkedin.com/company/akira-web-solutions/">
                                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                                </Link>
                            </li>
                            <li>
                                <Link to="https://www.facebook.com/profile.php?id=61550844571239">
                                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                                </Link>
                            </li>
                            <li>
                                <Link to="/Contact">
                                    <FontAwesomeIcon icon={faEnvelope} size="2x" />
                                </Link>
                            </li>
                        </ul>
                    </nav>

         
      </div>

      <div>
      <h2 className='text-2xl'>Gavin O'neil</h2>
            <p className='text-lg py-4'>615.377.9779</p>
            <p className='text-lg'>GavinOniel@email.com</p>

      </div>

      <div></div>

       
      </div>
    </footer>
  );
}

export default Footer;
