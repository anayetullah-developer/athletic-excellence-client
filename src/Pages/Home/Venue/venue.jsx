import golf from "../../../assets/camps/Nike-Golf-Camps-UK.jpg"
import tennis from "../../../assets/camps/tennis.jpg"
import basketball from "../../../assets/camps/nike-basketball-camp.jpg"
import football from "../../../assets/camps/Chelsea-Girls-Camp-UK.jpg"

const Venue = () => {
  return (
    <div>
        <h2 className="text-4xl font-extrabold text-center uppercase">2023 CAMP VENUES</h2>
      <div className="md:grid grid-cols-4 my-5 gap-md-4 w-[90%] mx-auto">
      <div className="card bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={tennis}
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-3xl font-extrabold">TENNIS CAMP</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
      <div className="card  bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={football}
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-3xl font-extrabold">FOOTBALL CAMP</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={golf}
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-3xl font-extrabold">GOLP CAMP</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={basketball}
              alt="Shoes"
              className="rounded-xl"
            /> 
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-3xl font-extrabold">BASKETBALL CAMP</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Venue;
