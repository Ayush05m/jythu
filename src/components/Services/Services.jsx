import './Services.css'
import Card from './ServiceCard/Card';
import Intro from '../IntroHead/Intro'
import RedirectBtn from '../RedirectBtn/RedirectBtn'

function Services() {

    let cardDetails = [
        { className: 'strategy', tpc: 'Strategy', desc: "lorem ipsum dolor sit amet, consectetur adip inc commodo sit amet, sed diam nonumy eirmod tempor inv incididunt ut labore et dolore magna al" },
        { className: 'planing', tpc: 'Planing', desc: "lorem ipsum dolor sit amet, consectetur adip inc commodo sit amet, sed diam nonumy eirmod tempor inv incididunt ut labore et dolore magna al" },
        { className: 'marketing', tpc: 'Content Marketing', desc: "lorem ipsum dolor sit amet, consectetur adip inc commodo sit amet, sed diam nonumy eirmod tempor inv incididunt ut labore et dolore magna al" },
        { className: 'seo', tpc: 'Seo Strategy', desc: "lorem ipsum dolor sit amet, consectetur adip inc commodo sit amet, sed diam nonumy eirmod tempor inv incididunt ut labore et dolore magna al" },
        { className: 'design', tpc: 'Design & Development', desc: "lorem ipsum dolor sit amet, consectetur adip inc commodo sit amet, sed diam nonumy eirmod tempor inv incididunt ut labore et dolore magna al" },
        { className: 'audits', tpc: 'Audits', desc: "lorem ipsum dolor sit amet, consectetur adip inc commodo sit amet, sed diam nonumy eirmod tempor inv incididunt ut labore et dolore magna al" }
    ];

    return (
        <>
            <div className="services" id='service'>
                <div className="serviceHeader">
                    <Intro text='our best services' />
                    <h1>We Provide Best Services </h1>
                </div>
                <div className="serviceCards">
                    {cardDetails.map((ele, index) => (
                        <div className={ele.className}>
                            <Card {...ele} />
                        </div>
                    ))}
                </div>
                <div className="allServices">
                    <RedirectBtn text='View All Services' />
                </div>
            </div>
        </>
    )
}

export default Services;