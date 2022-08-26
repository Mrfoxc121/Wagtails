import Link from "next/link";
import { useRouter } from "next/router";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';


export default function Navbar() {
  const router = useRouter();
  return (
    <div className="flex justify-between items-center my-4">
        <div className="flex items-center space-x-2">
            <img
        className="h-10 w-10"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXQyQ7dXkteuK7hC90UU952RhrR--XAp5hsQ&usqp=CAU"
        alt="logo"
      /> 
      <h2 className="text-xl">Wagtails Kennels</h2>
        </div>
     
      <div className="">
      <ul className="flex space-x-2">
      <li className={`text-gray-500 hover:text-gray-900 ${router.pathname == "/" ? "text-gray-900" : ""}`}>
        <Link href="/">HOME</Link>
      </li>
      <li className={`text-gray-500 hover:text-gray-900 ${router.pathname == "/gallery" ? "text-gray-900" : ""}`}>
        <Link href="/gallery">GALLERY</Link>
      </li>
      <li className={`text-gray-500 hover:text-gray-900 ${router.pathname == "/FAQs" ? "text-gray-900" : ""}`}>
        <Link href="/FAQs">FAQs</Link>
      </li>
      <li className={`text-gray-500 hover:text-gray-900 ${router.pathname == "/contact" ? "text-gray-900" : ""}`}>
        <Link href="/contact">CONTACT US</Link>
      </li>
      
    </ul>
      </div>
      <div className="flex space-x-4">
        <FacebookIcon/>
        <TwitterIcon/>
        <InstagramIcon/>
        <PinterestIcon/>
      </div>
     
    </div>
  );
}
