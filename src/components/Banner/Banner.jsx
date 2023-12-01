

const Banner = ({title, subTitle, image}) => {
    return (
        <div 
        style={{
            backgroundImage: `url('${image}')`
        }}
        className="bg-cover bg-center flex items-center justify-center"
        >
            <div className="h-full py-32 w-full bg-slate-700 bg-opacity-60">
            <div className="text-center space-y-3">
            <h2 className="text-6xl text-white font-bold">{title}</h2>
            <p className="text-xl text-gray-300 font-bold">{subTitle}</p>
            </div>
            
            </div>
        </div>
    );
};

export default Banner;