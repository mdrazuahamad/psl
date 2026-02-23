import { useParams, useNavigate } from "react-router-dom";
import players from "../data/players";

const PlayerProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const player = players.find((p) => p.id === parseInt(id));

  if (!player)
    return <h2 className='p-10 text-center text-white text-2xl'>Player Not Found</h2>;

  return (
    <div className='min-h-screen bg-gray-900 flex items-center justify-center p-6 flex gap-20 pt-20'>
      {/* Back Button */}
      <button
        onClick={() => navigate("/players")}
        className='mb-6 px-4 py-2 bg-blue-600 text-white font-semibold rounded-full shadow hover:scale-105 transition duration-300 cursor-pointer'>
        ← Back to Players
      </button>

      <div className='bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-2xl'>
        {/* Right Side — Player Details + Background Image */}
        <div
          className='p-10 pt-40 pb-40 flex flex-col justify-center relative'
          style={{
            backgroundImage: `url(${player.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}>
          {/* Overlay for readability */}
          <div className='absolute inset-0 bg-black/0'></div>

          {/* Content */}
          <div className='relative z-10 text-white'>
            <h1 className='pb-6 text-7xl font-extrabold uppercase tracking-wide text-amber-400 bg-clip-text animate-pulse'>
              {player.name}
            </h1>

            <div className='space-y-3 text-lg'>
              <p>
                <strong>Position:</strong>{" "}
                <span className='text-amber-400 uppercase font-bold'>
                  {player.position}
                </span>
              </p>
              <p>
                <strong>Preferred Foot:</strong>{" "}
                <span className='text-amber-400 uppercase font-bold'>
                  {player.preferredFoot}
                </span>
              </p>
              <p>
                <strong>Age:</strong>{" "}
                <span className='text-amber-400 uppercase font-bold'>
                  {player.age} years
                </span>
              </p>
              <p>
                <strong>Height:</strong>{" "}
                <span className='text-amber-400 uppercase font-bold'>
                  {player.height}
                </span>
              </p>
              <p>
                <strong>Nationality:</strong>{" "}
                <span className='text-amber-400 uppercase font-bold'>
                  {player.nationality}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerProfile;
