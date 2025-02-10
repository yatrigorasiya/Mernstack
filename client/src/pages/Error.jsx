import { NavLink } from "react-router-dom"

export const Error = ()=>{
    return (
        <>
         <section id="error-page">
            <div className="content">
                <h1 className="header">404</h1>
                <h4>Soory! page not found</h4>
                <p>
                    Oops!It seems like the page you're trying to access doesn't exist.If you believe there's an issue,feel free to report it,ans we'll llok into it.
                </p>
                <div className="btns">
                    <NavLink to="/">return home</NavLink>
                    <NavLink to="/contact">report problem</NavLink>
                </div>
            </div>
        </section>
        </>
    )

}