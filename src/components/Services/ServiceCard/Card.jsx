import './Card.css'


function Card(...e) {
    return (
        <div className="cardOvercover">
            <div className="rotateCover">
                <div className="Card">
                    <div className="rotateResversal">
                        <img src="/jythuLogo.png" className='cardElement' alt="" height={60} />
                        <h1 className='cardElement'>{e[0].tpc}</h1>
                        <p className='cardElement'>{e[0].desc}</p>
                        <div className="cardBtn cardElement">
                            <svg width="50" height="34" viewBox="0 0 50 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.750214 20.82C0.750214 21.8587 1.58646 22.695 2.62521 22.695H30.7502V32.085C30.7502 33.3225 31.8786 34.095 32.9324 33.915C33.3054 33.8479 33.6489 33.6672 33.9152 33.3975L48.3787 18.9375C48.8573 18.4531 49.1258 17.7997 49.1258 17.1187C49.1258 16.4378 48.8573 15.7843 48.3787 15.3L33.9037 0.731228C32.7712 -0.408772 30.7539 0.39373 30.7539 1.99498L30.7539 11.445L2.62888 11.445C1.58638 11.445 0.753876 12.2812 0.753876 13.32L0.750214 20.82Z" fill="url(#paint0_linear_1_362)" />
                                <defs>
                                    <linearGradient id="paint0_linear_1_362" x1="24.938" y1="0.195995" x2="24.938" y2="33.9409" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#38EF7D" />
                                        <stop offset="1" stopColor="#11998E" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;

