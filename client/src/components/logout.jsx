import { useNavigate } from 'react-router-dom';
import '../css/logout.css'

const API_URL = import.meta.env.VITE_API_URL;


const Logout = ({ showPopup, setShowPopup, setIsLoggedIn, setIsAdmin, setHasLoggedOut }) => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        await fetch(`${API_URL}/auth/logout`, {
            method: "POST",
            credentials: "include",
        });
        setIsLoggedIn(false);
        setIsAdmin(false)
        setHasLoggedOut(true)
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