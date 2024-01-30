import bg from "../assets/destination/background-destination-desktop.jpg";
import data from "../assets/data.json"
const Destination = () => {
con
  const p = data.destinations
  console.log(p)

  return (
    <div
      style={{
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${bg})`,
      }}
      className=" h-screen px-36 pt-24 text-white flex flex-col justify-center items-start"
    >
      <h2><b>01</b> PICK YOUR DESTINATION</h2>
      <div className="flex">
        <img src="" alt="" />
        <div>
          <div className="flex  gap-2">
            <p>mars</p>
            <p>mars</p>
            <p>mars</p>
            <p>mars</p>
          </div>
          <div className="flex flex-col">
            <h1>MARS</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad
              beatae ab maiores est repellat dolore esse quas consequatur quia
              temporibus.
            </p>
          </div>
          <div className="flex">
            <div>
              <p>avg distance</p>
              <h3>225 MIL. KM</h3>
            </div>
            <div>
              <p>Estimated tavel</p>
              <h3>9 months</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
