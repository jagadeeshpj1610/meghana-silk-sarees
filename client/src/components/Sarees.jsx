import s1 from '../assets/s1.jpg'
import s2 from '../assets/s2.jpg'
import s3 from '../assets/s3.jpg'
import s4 from '../assets/s4.jpg'
import s5 from '../assets/s5.jpg'
// import s6 from '../assets/s6.jpg'
import s7 from '../assets/s7.jpg'
import '../css/sarees.css'

const Sarees = () => {

    const fetchSarees = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/tasks', {
                method: "GET",
                credentials: "include"
            });
            const data = await response.json();
        } catch (error) {
            console.error("Error fetching tasks:", error);
        }
    };
    useEffect(() => {
        fetchSarees();
    }, []);
    return (
        <div className="sareesContainer">
            <div>
                <img className='image' src={s1} style={{ borderRadius: '20px' }} alt="" />
                <p>Magenta Kanjivaram Silk Saree</p>
                <p>Price:10,000</p>
            </div>
            <div>
                <img className='image' src={s7} alt="" />
                <p>Magenta Kanjivaram Silk Saree</p>
                <p>Price:10,000</p>
            </div>
            <div>
                <img className='image' src={s3} alt="" />
                <p>Magenta Kanjivaram Silk Saree</p>
                <p>Price:10,000</p>
            </div>
            <div>
                <img className='image' src={s4} alt="" />
                <p>Magenta Kanjivaram Silk Saree</p>
                <p>Price:10,000</p>
            </div>
            <div>
                <img className='image' src={s5} alt="" />
                <p>Magenta Kanjivaram Silk Saree</p>
                <p>Price:10,000</p>
            </div>
            <div>
                <img className='image' src={s7} alt="" />
                <p>Magenta Kanjivaram Silk Saree</p>
                <p>Price:10,000</p>
            </div>
            <div>
                <img className='image' src={s7} alt="" />
                <p>Magenta Kanjivaram Silk Saree</p>
                <p>Price:10,000</p>
            </div>
            <div>
                <img className='image' src={s7} alt="" />
                <p>Magenta Kanjivaram Silk Saree</p>
                <p>Price:10,000</p>
            </div>
            <div>
                <img className='image' src={s7} alt="" />
                <p>Magenta Kanjivaram Silk Saree</p>
                <p>Price:10,000</p>
            </div>
        </div>
    )
}

export default Sarees