import Heading from "../../../../components/Heading/Heading";
import useAuth from "../../../../hooks/useAuth";
import useMyAdded from "../../../../hooks/useMyAdded";
import AddedCard from "./AddedCard";

const AddedProperties = () => {

    const [properties] = useMyAdded()
    console.log(properties?.data);
    
    if(properties?.data.length === 0){
        return <h3 className="text-3xl text-center">You have not Added any properties yet</h3>
    }
    return (
        <div>
            <Heading title="My Added Properties"/>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-12">
                {
                    properties?.data?.map(property => <AddedCard key={property._id} property={property}/>)
                }
            </div>
        </div>
    );
};

export default AddedProperties;