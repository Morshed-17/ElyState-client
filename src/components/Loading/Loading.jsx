import { ClipLoader } from "react-spinners";

const Loading = () => {
    return (
        <div>
        <div className="h-[30vh] flex items-center justify-center">
        <h2 className="text-xl font-bold mr-3">Loading</h2>
        <ClipLoader

        color={'#000000'}
        loading={true}
        
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      
        </div>
        </div>
    );
};

export default Loading;