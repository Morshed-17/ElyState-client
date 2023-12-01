

const Banner = () => {
    return (
        <div 
        style={{
            backgroundImage: `url('banner.png')`
        }}
        className="h-[60vh] bg-cover bg-center flex items-center justify-center"
        >
            <div className="text-center space-y-3">
            <h2 className="text-6xl text-white font-bold">Search Your Next Home</h2>
            <p className="text-xl text-gray-300 font-bold">Find new & featured property located in your local city.</p>
            {/* <div className="bg-white py-5  rounded-md flex gap-3 px-3 text-left items-center justify-between">
                <div className="flex flex-col">
                    <label htmlFor="">Location</label>
                    <input placeholder="location" className="focus:outline-none border px-3 rounded-lg py-1" type="text" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="">Property Type</label>
                    <input placeholder="Propert Type" className="focus:outline-none border px-3 rounded-lg py-1" type="text" />
                </div>
                <button className="btn btn-neutral ">Search</button>
                
            </div> */}
            </div>
        </div>
    );
};

export default Banner;