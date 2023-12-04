import Container from "../../../../components/Container/Container";
import Heading from "../../../../components/Heading/Heading";
import Loading from "../../../../components/Loading/Loading";
import useWishlist from "../../../../hooks/useWishlist";
import Card from "../../../AllProperties/Card";
import GuestWishCard from "./GuestWishCard";



const GuestWishlist = () => {
    
const [wishlist, isLoading, refetch] = useWishlist()

    if(isLoading){
        return <Loading/>
    }
  return (
    <div>
      <Heading title="My Wishlist" />
      <Container>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2  gap-6">
            {wishlist?.data.map(property => <GuestWishCard key={property.title} property={property} refetch={refetch}></GuestWishCard>)}
        </div>
      </Container>
      
    </div>
  );
};

export default GuestWishlist;