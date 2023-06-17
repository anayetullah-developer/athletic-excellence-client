import golf from "../../../assets/camps/1.jpg";
import tennis from "../../../assets/camps/2.jpg";
import basketball from "../../../assets/camps/3.jpg";
import football from "../../../assets/camps/4.jpg";

const Venue = () => {
  return (
    <div className="mt-20">
      <h2 className="text-4xl font-extrabold text-center uppercase my-10">
        2023 CAMP VENUES
      </h2>
      <div className="md:grid grid-cols-4 gap-10 w-[90%] mx-auto">
        <div className="card bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={tennis} alt="Shoes" className="rounded-xl w-full" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-3xl font-extrabold">
              BRADFIELD COLLEGE READING
            </h2>
            <p>
              Situated above the south coast, Lancing’s rural location and
              campus layout suits younger players.
            </p>
          </div>
        </div>
        <div className="card  bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={football} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-3xl font-extrabold">
              RADLEY COLLEGE OXFORD
            </h2>
            <p>
              One of England’s most prestigious private schools, located south
              of London.
            </p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={golf} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-3xl font-extrabold">
              CHARTERHOUSE SCHOOL SURREY
            </h2>
            <p>
              Conveniently close to Oxford and London, Radley’s excellent
              facilities make it an exciting new venue.{" "}
            </p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={basketball} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-3xl font-extrabold">
              LANCING COLLEGE BRIGHTON
            </h2>
            <p>
              Leading private school in Berkshire with impressive sports
              facilities, just an hour west of central London.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Venue;
