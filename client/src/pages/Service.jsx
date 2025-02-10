
import { useAuth } from "../store/auth"

export const Service = ()=>{
    const {service} = useAuth()
    return (
       
      
        <>
        <section className="section-services">
            <div className="container">
                <h1 className="main-heading">Serivce</h1>
            </div>

            <div className="container grid grid-three-cols">
                {
                    service.map((curdata,index)=>{
                        const {provider,price,service,description} = curdata;
                        return(<>
                        <div className="card" key={index}>
                        <div className="card-img">
                            <img src="/images/design.png" alt="service info" width="200" />
                        </div>
                        <div className="card-details">
                            <div className="grid grid-two-cols">
                                <p>{provider}</p>
                                <p>{price}</p>
                            </div>
                            <h2>{service}</h2>
                            <p>{description}</p>
                        </div>
                    </div>
                    </>)

                    })
                }
               
            </div>
        </section>
        
        </>
    )
}