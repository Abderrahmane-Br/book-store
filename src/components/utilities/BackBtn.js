function BackBtn() {
    return (
        <div className="backBtnCont">
            <div className="backBtn" onClick={() => window.history.back()} title="Back">
                <svg width="26" height="16" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 8H25" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    <path d="M10.5 1L2 8L10.5 15" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
            </div>
        </div>
    )
}
export default BackBtn