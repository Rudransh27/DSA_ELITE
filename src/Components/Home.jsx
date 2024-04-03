import React from 'react'
import vg from "../Assets/background.jpg"
import leetcode from "../Assets/communityIcon_81fgdqfsnbw91.png";
import gfg from "../Assets/unnamed.png"
import codechef from "../Assets/images.jpg"
import codeforces from "../Assets/unnamed (1).png"
const Home = () => {
  return (
    <>
    <div className="home" id='home'>
        <main>
            <h1>DSA ELITE</h1>
            <p>Master Problem-Solving - Join DSA Elite Community! </p>
        </main>
    </div>

    <div className='home2'>
        <img src={vg} alt="Graphics" />
        <div>
            <p>Welcome to the DSA Elite Community Hub, where students at SSGMCE come together to master data structures and algorithms, participate in contests, and elevate their problem-solving skills. Join us in this vibrant community dedicated to learning, practicing, and excelling in the world of DSA.</p>
        </div>
    </div>

    <div className="home3" id="about">
        <div>
        <h2>Who we are?</h2>
        <p>At DSA Elite, we believe in the power of collaboration and continuous learning. Our community provides a platform for students to engage in DSA challenges, share knowledge, and grow together. Whether you are a beginner looking to build a strong foundation or a seasoned competitor aiming for the top ranks, DSA Elite is the place for you.</p>
        </div>
    </div>

    <div className="home4" id="platforms">
        <div>
            <h1>Coding Platforms</h1>
            <article>

                <div style={{
                    animationDelay:"0.7s"
                }}>
                     <a href="">
                        <img src={leetcode} alt="" />
                        <p>Leetcode</p>
                     </a>
                </div>

                <div style={{
                    animationDelay:"0.9s"
                }}>
                     <a href="">
                        <img src={codeforces} alt="" />
                        <p>Codeforces</p>
                     </a>
                   
                </div>
                <div style={{
                    animationDelay:"1.1s"
                }}>
                    <a href="">
                        <img src={gfg} alt="" />
                        <p>GFG</p>
                     </a>
                   
                </div>
                <div style={{
                    animationDelay:"1.3s"
                }}>
                     <a href="">
                        <img src={codechef} alt="" />
                        <p>Codechef</p>
                     </a>
                   
                </div>
            </article>
        </div>
    </div>
    </>
  )
}

export default Home