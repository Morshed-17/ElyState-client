import Banner from "../../components/Banner/Banner";
import banner1 from "../../assets/banner1.jpg";
import { useLoaderData } from "react-router-dom";
import Container from "../../components/Container/Container";
import Card from "./Card";

const AllProperties = () => {
  const properties = useLoaderData();

  return (
    <div>
      <Banner title="Properties" image={banner1} />
      <Container>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties?.filter(property => property.verification === 'Verified').map(property => <Card key={property.title} property={property}></Card>)}
        </div>
      </Container>
    </div>
  );
};

export default AllProperties;
