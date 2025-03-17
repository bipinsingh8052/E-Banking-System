import '../css/about.css'
import { GoDotFill } from "react-icons/go";
export default function About() {
  return (
    <div className='about_section'>
         <h1>INTERNET BANKING</h1>
      <div className="about_section_main">
     
        <div className="img">
       
            <img src="http://cashlessindia.gov.in/theme/images/net-banking.png" alt="" />
        </div>
        <div className="about_paragraph">
            <h6>
            Internet banking, also known as online banking, e-banking or virtual banking, is an electronic payment system that enables customers of a bank or other financial institution to conduct a range of financial transactions through the financial institution's website.
            </h6>
            <h5>Different types of online financial transactions are: </h5>
            <div className="about_section_first">
                <span>
                    National Electronic Fund Transfer (NEFT)
                </span>
                
                <p>National Electronic Funds Transfer (NEFT) is a nation-wide payment system facilitating one-to-one funds transfer. Under this Scheme, individuals, firms and corporates can electronically transfer funds from any bank branch to any individual, firm or corporate having an account with any other bank branch in the country participating in the Scheme. Individuals, firms or corporates maintaining accounts with a bank branch can transfer funds using NEFT. Even such individuals who do not have a bank account (walk-in customers) can also deposit cash at the NEFT-enabled branches with instructions to transfer funds using NEFT. However, such cash remittances will be restricted to a maximum of Rs.50,000/- per transaction. NEFT, thus, facilitates originators or remitters to initiate funds transfer transactions even without having a bank account. Presently, NEFT operates in hourly batches - there are twelve settlements from 8 am to 7 pm on week days (Monday through Friday) and six settlements from 8 am to 1 pm on Saturdays.</p>
            </div>
            <div className="about_section_second">
                <span>Real Time Gross Settlement (RTGS)</span>
                <p>RTGS is defined as the continuous (real-time) settlement of funds transfers individually on an order by order basis (without netting). 'Real Time' means the processing of instructions at the time they are received rather than at some later time; 'Gross Settlement' means the settlement of funds transfer instructions occurs individually (on an instruction by instruction basis). Considering that the funds settlement takes place in the books of the Reserve Bank of India, the payments are final and irrevocable. The RTGS system is primarily meant for large value transactions. The minimum amount to be remitted through RTGS is 2 lakh. There is no upper ceiling for RTGS transactions. The RTGS service for customer's transactions is available to banks from 9.00 hours to 16.30 hours on week days and from 9.00 hours to 14:00 hours on Saturdays for settlement at the RBI end. However, the timings that the banks follow may vary depending on the customer timings of the bank branches.</p>
            </div>
            <div className="about_section_three">
                <span>Electronic Clearing System (ECS)</span>
                <p>ECS is an alternative method for effecting payment transactions in respect of the utility-bill-payments such as telephone bills, electricity bills, insurance premia, card payments and loan repayments, etc., which would obviate the need for issuing and handling paper instruments and thereby facilitate improved customer service by banks / companies / corporations / government departments, etc., collecting / receiving the payments.</p>
            </div>
            <div className="about_section_four">
                <span>Immediate Payment Service (IMPS)</span>
                <p>IMPS offers an instant, 24X7, interbank electronic fund transfer service through mobile phones. IMPS is an emphatic tool to transfer money instantly within banks across India through mobile, internet and ATM which is not only safe but also economical both in financial and non-financial perspectives.</p>
            </div>
            <div className="about_section_five">
                <span>Objectives of IMPS:</span>
                <p><span><GoDotFill/></span>To enable bank customers to use mobile instruments as a channel for accessing their banks accounts and remit funds</p>
                <p><span><GoDotFill/></span>Making payment simpler just with the mobile number of the beneficiary</p>
                <p><span><GoDotFill/></span>To sub-serve the goal of Reserve Bank of India (RBI) in electronification of retail payments</p>
                <p><span><GoDotFill/></span> To facilitate mobile payment systems already introduced in India with the Reserve Bank of India Mobile Payment Guidelines 2008 to be inter-operable across banks and mobile operators in a safe and secured manner</p>
                <p><span><GoDotFill/></span> To build the foundation for a full range of mobile based Banking services.</p>
            </div>
        </div>
      </div>
    </div>
  )
}
