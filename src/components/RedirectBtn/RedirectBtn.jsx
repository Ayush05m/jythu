import './RedirectBtn.css'

function RedirectBtn({ text }) {

    return (
        <>
            <div className="redirect">
                <p className='greenGradient'>{text}</p>
                <div className="btnCover">
                    <div className="redirectBtn backGreenGradient">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 0H1C0.4 0 0 0.4 0 1C0 1.6 0.4 2 1 2H8.6L0.3 10.3C-0.0999998 10.7 -0.0999998 11.3 0.3 11.7C0.7 12.1 1.3 12.1 1.7 11.7L10 3.4V11C10 11.6 10.4 12 11 12C11.6 12 12 11.6 12 11V1C12 0.4 11.6 0 11 0Z" fill="white" />
                        </svg>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RedirectBtn;