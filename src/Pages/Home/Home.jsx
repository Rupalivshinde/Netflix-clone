import React from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import hero_banner from '/src/assets/hero_banner.jpg'
import hero_title from '/src/assets/hero_title.png'
import play_icon from '/src/assets/play_icon.png'
import info_icon from '/src/assets/info_icon.png'
import TitleCard from '../../Components/TitleCard/TitleCard'
import Footer from '../../Components/Footer/Footer'


function Home() {
    return (
        <>
            <div className="home">
                <Navbar />
                <div className="hero">
                    <img src={hero_banner} alt="" className='baner_img' />
                    <div className="hero-caption">
                        <img src={hero_title} alt="" className='caption_img' />
                        <p>Discovering his ties to a secret ancient order,a young man living in modern Istanbul embarks on a quest to saw city from an immortal enemy.</p>
                        <div className="hero-btn">
                            <button className='btn'><img src={play_icon} alt="" className='play_img' />Play</button>
                            <button className='btn dark-btn'><img src={info_icon} alt="" className='play_img' />More Info</button>
                        </div>
                        <TitleCard />
                    </div>
                </div>
                <div className="more-cards">
                    <TitleCard title={"Blockbuster Movie"} category={"top_rated"} />
                    <TitleCard title={"Only On Netflix"} category={"popular"} />
                    <TitleCard title={"Upcomping"} category={"upcoming"} />
                    <TitleCard title={"Top Pics For You"} category={"now_playing"} />

                </div>
                <Footer />
            </div>
        </>
    )
}

export default Home