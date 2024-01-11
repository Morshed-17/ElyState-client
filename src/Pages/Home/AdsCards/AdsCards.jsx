import { useEffect, useState } from "react";
import Container from "../../../components/Container/Container";
import Heading from "../../../components/Heading/Heading";
import AdsCard from "./AdsCard";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Loading from "../../../components/Loading/Loading";

const AdsCards = () => {
    const axiosSecure = useAxiosSecure()
    const [properties, setProperties] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(()=> {
      setLoading(true)
      axiosSecure('/properties')
      .then(res => {
        setProperties(res.data)
        setLoading(false)
      })
    }, [axiosSecure])
    
    if(loading){
      return <Loading/>
    }

  return (
    <div className="mt-12">
      <Container> 
        <Heading title={"Featured Properties"} subTitle={""} />
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                properties.slice(0, 6).map(property => <AdsCard key={property.title} property={property}/>)
            }
        </div>
      </Container>
      
    </div>

  );
};

export default AdsCards;
