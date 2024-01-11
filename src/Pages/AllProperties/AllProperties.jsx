import Banner from "../../components/Banner/Banner";
import banner1 from "../../assets/banner1.jpg";

import Container from "../../components/Container/Container";
import Card from "./Card";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Loading from "../../components/Loading/Loading";

const AllProperties = () => {
  const axiosSecure = useAxiosSecure()
  const [properties, setProperties] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(()=> {
    setLoading(true)
    axiosSecure('/properties')
    .then(res => {
      setLoading(false)
      setProperties(res.data)
      
    })
  }, [axiosSecure])
  
  
  if(loading){
    return <Loading/>
  }
  return (
    <div>
      <Banner title="Properties" image={banner1} />
      <Container>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties?.map(property => <Card key={property.title} property={property}></Card>)}
        </div>
      </Container>
    </div>
  );
};

export default AllProperties;
