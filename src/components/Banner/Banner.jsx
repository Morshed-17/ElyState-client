

const Banner = ({title, subTitle}) => {
    return (
        <div 
        style={{
            backgroundImage: `url('banner.png')`
        }}
        className="py-36 bg-cover bg-center flex items-center justify-center"
        >
            <div className="text-center space-y-3">
            <h2 className="text-6xl text-white font-bold">{title}</h2>
            <p className="text-xl text-gray-300 font-bold">{subTitle}</p>
            
            </div>
        </div>
    );
};

export default Banner;