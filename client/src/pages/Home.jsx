import { Anayltic } from "../components/Anayltics"
import {NavLink} from "react-router-dom"

export const Home = ()=>{
    return (
        <>
        <main className="hero-section main">
            <div className="container grid grid-two-cols">

                <div className="hero-content">
                <p>We are the World Best IT Company</p>
                <h1 className="heading-xl">welcome to our website</h1>
                <p>
                Are you ready to take your business to the next level with
                cutting-edge IT solutions? Look no further! 
                we specialize in providing innovative IT services and solutions
                tailored to meet your unique needs.
              </p>

              <div className="btn btn-group">
                <NavLink to="/contact">
                  <button className="btn">connect now</button>
                </NavLink>
                <NavLink to="/service">
                  <button className="btn secondary-btn">learn more</button>
                </NavLink>
              </div>
              </div>

                <div className="hero-image ">
                    <img src="/images/home.png" alt="coding together" className="banner-image" />
                </div>

            </div>
        </main>

        <Anayltic/>

       <main className="hero-section main">
        <div className="container grid grid-two-cols">

         <div className="hero-image">
          <img src="/images/design.png" alt="about" className="banner-image" />
         </div>

         <div className="hero-content">
         <p>We are here to help you</p>
            <h1 className="heading-xl">Get Started Today</h1>
            <p>
              Ready to take the first step towards a more efficient and secure
              IT infrastructure? Contact us today for a free consultation and
              let's discuss how  can help your business thrive in
              the digital age.
            </p>
            <div className="btn btn-group">
               <NavLink to="/contact">
                <button className="btn">connect now</button>
                </NavLink>
           
              <NavLink to="/service">
                <button className="btn secondary-btn">learn more</button>
              </NavLink>
            </div>
         </div>
        </div>
       </main>
        </>
    )
}