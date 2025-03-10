import Carousel from 'react-bootstrap/Carousel';
import '../css/causlor.css'
import { FcTouchscreenSmartphone } from "react-icons/fc";
import { GiRapidshareArrow } from "react-icons/gi";
import { PiDesktopTowerDuotone } from "react-icons/pi";
import { FcSmartphoneTablet } from "react-icons/fc";
import { FcPhoneAndroid } from "react-icons/fc";
import { ImPointRight } from "react-icons/im";
export default function Causlor() {
  return (
    <>
    <Carousel>
      <Carousel.Item>
        <img src="https://images.goodreturns.in/img/2024/01/glod-loan600-1706081126.jpg" alt="" className='causlorimg'/>
        
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://www.electronicafinance.com/wp-content/uploads/2024/06/Difference-Between-Gold-Loan-and-A-Loan-Against-Property-scaled.webp" alt="" className='causlorimg'/>
       
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://www.cosmosbank.com/auth/writereaddata/images/1105210141gold%20loan.jpg" alt=""  className='causlorimg'/>
      </Carousel.Item>
    </Carousel>


<div className="causlor_nav">
    <div className="causlor_note">
        <h6>Important Messages</h6>
        <p><span><ImPointRight/></span>Uers can use our Online Forget password facility to set up their password online , if they wish to. Please click on Retail Banking Login and choose regenerate your passwords.</p>
        <p><span><ImPointRight/></span> If you wish to open an eBanking account online. please click on Retail Banking Login and choose option create one.</p>
    </div>
    <div className="causlor_card">
        <div className="first_card">
            <div className="card_heading">
                <span className='red'><FcPhoneAndroid/></span>
                <h6>Recharge</h6>
            </div>
            <div className="card_para">
                To Recharge your Pre-paid Mobile
            </div>
            <button>Click here</button>
        </div>


        <div className="first_card">
            <div className="card_heading">
                <span className='blue'><FcSmartphoneTablet/></span>
                <h6>Recharge</h6>
            </div>
            <div className="card_para">
                To Recharge your Pre-paid Mobile
            </div>
            <button>Click here</button>
        </div>


        <div className="first_card">
            <div className="card_heading">
                <span className='green'><PiDesktopTowerDuotone/></span>
                <h6>Recharge</h6>
            </div>
            <div className="card_para">
                To Recharge your Pre-paid Mobile
            </div>
            <button>Click here</button>
        </div>

        <div className="first_card">
            <div className="card_heading">
                <span className='red'><GiRapidshareArrow/></span>
                <h6>Recharge</h6>
            </div>
            <div className="card_para">
                To Recharge your Pre-paid Mobile
            </div>
            <button>Click here</button>
        </div>


        <div className="first_card">
            <div className="card_heading">
                <span className='green'><FcTouchscreenSmartphone/></span>
                <h6>Recharge</h6>
            </div>
            <div className="card_para">
                To Recharge your Pre-paid Mobile
            </div>
            <button>Click here</button>
        </div>
    </div>
</div>
    </>
  )
}
