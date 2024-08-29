import serp_rock from './assets/images/serp_image.jpg';
import { Link } from 'react-router-dom'




export default function Planetary() {
    return (
        <div>

            <div className="poetic_earth">
                <div className="our_universe">
                    <h1>Our Home and Beyond</h1>
                    <div className="earth_poem">
                        <p>In the dance of time, Earth cradles us, a fragile oasis where life breathes in harmony with the stars. Yet, as stewards of this ancient home, we must tread lightly, lest we extinguish the delicate balance that sustains us. To cherish and sustain our Earth is to honor the legacy of all who have walked before us, and to safeguard the promise of those yet to come.
                            But as we gaze upon the infinite night,
                            the call of distant worlds beckons—a whisper from the
                            cosmos, inviting us to explore, to dream beyond
                            the horizon of our birth. In seeking other planets, we do
                            not forsake our own; instead, we carry with us the lessons of Earth,
                            our need for balance, and our hope for renewal. For in the quest to touch the stars, we may find new ways to heal the world that first gave us life, ensuring that the song of humanity
                            echoes across the universe, undimmed by time.
                        </p>
                    </div>
                </div>

            </div>

           


            <div className='research_container'>
                <div className='serp_img'>

                <Link to='/serp_reactions'>  <img src={serp_rock} alt="" /></Link>
                    <div className='serp_desc'><h2>Serpentinisation reactions</h2></div>
                </div>

                <div className='serp_img'>
                    <img src={serp_rock} alt="" />
                    <div className='serp_desc'><h2>Serpentinisation reactions</h2></div>

                </div>

            </div>

            <div className='research_container'>
                <div className='serp_img'>
                    <img src={serp_rock} alt="" />
                    <div className='serp_desc'><h2>Serpentinisation reactions</h2></div>

                </div>

                <div className='serp_img'>
                    <img src={serp_rock} alt="" />
                    <div className='serp_desc'><h2>Serpentinisation reactions</h2></div>

                </div>

            </div>


            



        </div>
    );


}
