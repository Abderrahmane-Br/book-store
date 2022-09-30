function BackTab() {
    return (
        <div className="backTabCont" title="Back" onClick={() => window.history.back()}>
            <div className="backTab">
                <svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 10.4762L11 0V20L0 10.4762Z" fill="#55B3D2" />
                </svg>
            </div>
        </div>
    )
}
export default BackTab;