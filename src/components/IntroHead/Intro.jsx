import './Intro.css'

function Intro ({ text }) {
    return (
        <div className="introHeader">
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1_740)">
                    <path d="M16.2635 10.6063L21.6375 15.9803L9.89949 15.9803C9.33381 15.9803 8.90954 16.4046 8.90954 16.9703C8.90954 17.536 9.33381 17.9602 9.89949 17.9602L21.6375 17.9602L16.2635 23.3342C15.8392 23.7585 15.8392 24.3242 16.2635 24.7485C16.6877 25.1727 17.2534 25.1727 17.6777 24.7485L24.7487 17.6774C24.8194 17.6067 24.9609 17.4653 24.9609 17.3238C25.0316 17.1117 25.0316 16.8289 24.9609 16.6167C24.9609 16.4753 24.8194 16.3339 24.7487 16.2632L17.6777 9.19211C17.2534 8.76785 16.6877 8.76785 16.2635 9.19211C15.8392 9.61638 15.8392 10.1821 16.2635 10.6063Z" fill="url(#paint0_linear_1_740)" />
                </g>
                <defs>
                    <linearGradient id="paint0_linear_1_740" x1="12.7279" y1="12.7276" x2="21.2132" y2="21.2129" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#38EF7D" />
                        <stop offset="1" stopColor="#11998E" />
                    </linearGradient>
                    <clipPath id="clip0_1_740">
                        <rect width="24" height="24" fill="white" transform="translate(16.9706 33.9409) rotate(-135)" />
                    </clipPath>
                </defs>
            </svg>
            <p>{text}</p>
        </div>
    )
}

export default Intro;