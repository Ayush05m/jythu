import './About.css'
import Intro from '../IntroHead/Intro'
import Redirect from '../RedirectBtn/RedirectBtn'
import { useEffect, useState, useRef } from 'react'

const service = (text) => {
    return (
        <>
            <div className="service">
                <div className="seriviceTick">
                    <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.8283 0.882207C16.7199 0.772858 16.5909 0.686064 16.4487 0.626834C16.3065 0.567604 16.154 0.537109 16 0.537109C15.846 0.537109 15.6935 0.567604 15.5513 0.626834C15.4092 0.686064 15.2801 0.772858 15.1717 0.882207L6.48001 9.58554L2.82835 5.92221C2.71574 5.81343 2.58281 5.7279 2.43714 5.67049C2.29148 5.61309 2.13593 5.58494 1.97939 5.58764C1.82284 5.59035 1.66837 5.62387 1.52478 5.68628C1.38118 5.74869 1.25129 5.83877 1.14251 5.95137C1.03373 6.06398 0.948201 6.19691 0.890797 6.34258C0.833392 6.48824 0.80524 6.64379 0.807948 6.80033C0.810657 6.95688 0.844172 7.11135 0.906581 7.25494C0.96899 7.39854 1.05907 7.52843 1.17168 7.63721L5.65168 12.1172C5.76014 12.2266 5.88917 12.3134 6.03134 12.3726C6.17351 12.4318 6.326 12.4623 6.48001 12.4623C6.63403 12.4623 6.78652 12.4318 6.92869 12.3726C7.07085 12.3134 7.19989 12.2266 7.30835 12.1172L16.8283 2.59721C16.9468 2.48796 17.0413 2.35536 17.1059 2.20778C17.1706 2.0602 17.2039 1.90083 17.2039 1.73971C17.2039 1.57859 17.1706 1.41922 17.1059 1.27163C17.0413 1.12405 16.9468 0.991457 16.8283 0.882207V0.882207Z" fill="#0D141C" />
                    </svg>
                </div>
                <p>{text}</p>
            </div>
        </>
    )
}

function About() {
    const [number, setNumber] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [animationComplete, setAnimationComplete] = useState(false);
    const animationRef = useRef(null);
    let targetNumber = 24;

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (animationRef.current) {
            observer.observe(animationRef.current);
        }

        return () => {
            if (animationRef.current) {
                observer.unobserve(animationRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (isVisible && !animationComplete) {
            const duration = 180;
            const step = (targetNumber - number) / duration;
            let currentNumber = number;

            const intervalId = setInterval(() => {
                currentNumber += step;
                setNumber(Math.round(currentNumber));

                if (currentNumber >= targetNumber) {
                    clearInterval(intervalId);
                    setAnimationComplete(true);
                }
            }, 16);

            return () => clearInterval(intervalId);
        }
    }, [isVisible, number, targetNumber, animationComplete]);

    return (
        <>
            <div className="about">
                <div className="aboutContent aboutItems">
                    <Intro text={'About Us'} />
                    <p className="aboutText">We Want To Give You The Best Service</p>
                    <p className="aboutSubText">We are 100+ professional software engineers with more than 10 year of experience in delivering superior products Believe it because you have seen it. Here are real numbers</p>
                    <div className="info" ref={animationRef}>
                        <div className="expirence infoItems">
                            <p id='f24' className='greenGradient'><span>{Math.round(number)}</span></p>
                            <p id='yearExp'>Year Expirence</p>
                        </div>
                        <div className="serviceList infoItems">
                            {service('Product Engineering')}
                            {service('Digial Services')}
                            {service('IT consutancy')}
                            {service('Digital Resources')}
                        </div>
                    </div>
                    <div className="aboutStarted">
                        <Redirect text='Get Started' />
                    </div>
                </div>
                <div className="aboutImg aboutItems">
                    <div className="abimage">
                    </div>
                </div>
            </div>
        </>
    )
}


export default About;