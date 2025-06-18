import '../css/logout.css'


const Logout = ({ showPopup, setShowPopup, setIsLoggedIn }) => {

    const handleLogout = async () => {
        await fetch("http://localhost:8000/auth/logout", {
            method: "POST",
            credentials: "include",
        });
        setIsLoggedIn(false);
        navigate('/login');
    };

    return (
        <>
            {showPopup && (
                <div className="popupOverlay" onClick={() => setShowPopup(false)}>
                    <div className="popupBox">
                        <p>Are you sure you want to logout?</p>
                        <div className="popupButtons">
                            <button className="yesBtn" onClick={handleLogout}>Yes</button>
                            <button className="noBtn" onClick={() => setShowPopup(false)}>No</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Logout