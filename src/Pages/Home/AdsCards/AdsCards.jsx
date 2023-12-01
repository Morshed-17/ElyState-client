import { useEffect, useState } from "react";
import Container from "../../../components/Container/Container";
import Heading from "../../../components/Heading/Heading";
import AdsCard from "./AdsCard";

const AdsCards = () => {

    const [properties, setProperties] = useState([])
    useEffect( () => {
        fetch('properties.json')
        .then(res => res.json())
        .then(data => setProperties(data))
    }, [] )

  return (
    <div className="mt-12">
      <Container>
        <Heading title={"Featured Properties"} subTitle={""} />
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                properties.map(property => <AdsCard key={property.title} property={property}/>)
            }
        </div>
      </Container>
    </div>
  );
};

export default AdsCards;
