import { NavLink } from "react-router-dom"
import { Anayltic } from "../components/Anayltics"
import { useAuth } from "../store/auth"
export const About = ()=>{
  const {user} = useAuth()
    return (
        <>
        <main>
            <section className="hero-section">
                <div className="container grid grid-two-cols">
                    <div className="hero-content">
                        <p>Welcome {user ? `${user.username} to our website` :'to our website' }</p>
                        <h1 className="heading-xl">Why Choose Us? </h1>
              <p>
                Expertise: Our team consists of experienced IT professionals who
                are passionate about staying up-to-date with the latest industry
                trends.
              </p>
              <p>
                Customization: We understand that every business is unique.
                Thats why we create solutions that are tailored to your specific
                needs and goals.
              </p>
              <p>
                Customer-Centric Approach: We prioritize your satisfaction and
                provide top-notch support to address your IT concerns.
              </p>
              <p>
                Affordability: We offer competitive pricing without compromising
                on the quality of our services.
              </p>
              <p>
                Reliability: Count on us to be there when you need us. We're
                committed to ensuring your IT environment is reliable and
                available 24/7.
              </p>

              <div className="btn btn-group">
              <NavLink to="/contact">
                <button className="btn">connect now</button>
                </NavLink>

                <NavLink to="/login">
                <button className="btn secondary-btn">learn more</button>
                </NavLink>
               
              </div>
            </div>


            <div className="hero-image">
                <img src="/images/about.png" alt="about"  className="banner-imageabout"/>
            </div>
                   </div>
            </section>
        </main>
        <Anayltic/>
        
        </>
    )
}