const Review = ({ review }) => {
  return (
    <div className="mx-5 my-12 text-center  ">
      <div className="card flex-col card-side ">
        <div className="avatar mx-auto">
          <div className="w-24 mask mask-squircle">
            <img src={review?.image}/>
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title mx-auto">{review?.name}</h2>
          <p>{review?.description}</p>
          
        </div>
      </div>
    </div>
  );
};

export default Review;
