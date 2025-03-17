import '../css/footer.css'

export default function Footer() {
  return (
    <div className='footersection'>
        <div className="footersection_first">
            <h6>Security Information</h6>
            <p><span>1.</span>Be suspicious of any email with urgent requests for personal financial information. Don't open unexpected e-mail attachements or instant messgage downloads Links.</p>
            <p><span>2.</span>Always check the web address carefully before sharing any sensitive information .Avoid making online transactions at cyber cafes or public computers.</p>
            <p><span>3.</span>Do not let your computer remember your password and Never accept auto complete Options provided by your computer/browse. Do not share your internet banking username/password via e-mail or over the phone.</p>
            <p><span>4.</span>Banks and regulatory bodies like Reserve Bank of India (RBI), Income Tax(I.T) Dept. are Publicizing pawareness on Phisihing . pHisher now send emails resembling Yahoo /rediffmail, shopping sites or regulatory bodies,like RBI /I.T dept., askimg for confidentails data.</p>
        </div>
        <div className="footer_main">
            <div className="footer_first">
                <p>Terms & conditions</p>
                <p>Privacy</p>
                <p>Discalimer</p>
            </div>
            <div className="footer_second">
                <p>© aman Bank all right Reserved.</p>
            </div>
        </div>
    </div>
  )
}
