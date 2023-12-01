

const Heading = ({title, subTitle}) => {
    return (
        <div className="text-center">
            <h2 className="text-4xl font-semibold">{title}</h2>
            <h4 className="text-lg mt-2">{subTitle}</h4>
        </div>
    );
};

export default Heading;