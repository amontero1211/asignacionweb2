import Footer from "./sections/footer/Footer";
import Section01 from "./sections/section01/Section01";
import Section02 from "./sections/section02/Section02";
import Section03 from "./sections/section03/Section03";
import Section04 from "./sections/section04/Section04";
import Section05 from "./sections/section05/Section05";
import Section06 from "./sections/section06/Section06";
import Section07 from "./sections/section07/Sectoin07";
import Section08 from "./sections/section08/Section08";
import { FaFacebookF, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";

function App() {
  return (
    <div className=" relative customContainer">
      {/* socials */}
      <div className=" z-30 absolute right-[0%] top-[3.5%] flex flex-col text-white">
        <a
          href="https://www.facebook.com/"
          target="_blank"
          className="bg-gray-400 p-4 border-b border-l border-solid border-gray-600 hover:bg-gray-500"
        >
          <FaFacebookF size={30} />
        </a>
        <a
          href="https://twitter.com/?lang=es"
          target="_blank"
          className="bg-gray-400 p-4 border-b border-l border-solid border-gray-600 hover:bg-gray-500"
        >
          <FaTwitter size={30} />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          className="bg-gray-400 p-4 border-b border-l border-solid border-gray-600 hover:bg-gray-500"
        >
          <FaInstagram size={30} />
        </a>
        <a
          href="https://www.youtube.com/"
          target="_blank"
          className="bg-gray-400 p-4 border-b border-l border-solid border-gray-600 hover:bg-gray-500"
        >
          <TfiYoutube size={30} />
        </a>
        <a
          href="https://www.tiktok.com/es/"
          target="_blank"
          className="bg-gray-400 p-4 border-l border-solid border-gray-600 hover:bg-gray-500"
        >
          <FaTiktok size={30} />
        </a>
      </div>

      <Section01 />
      <Section02 />
      <Section03 />
      <Section04 />
      <Section05 />
      <Section06 />
      <Section07 />
      <Section08 />
      <Footer />
    </div>
  );
}

export default App;
