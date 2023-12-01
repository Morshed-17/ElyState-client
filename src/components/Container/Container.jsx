

const Container = ({children}) => {
    return (
        <div className="max-w-screen-xl px-5 md:px-7 lg:px-10 mx-auto">
            {children}
        </div>
    );
};

export default Container;