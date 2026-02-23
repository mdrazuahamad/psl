import players from "../data/players";
import matches from "../data/matches";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const topPlayers = players.slice(0, 3);
  const upcomingMatches = matches;
  const navigate = useNavigate();

  return (
    <div className='w-full'>
      {/* Hero Section */}
      <section className='relative w-full h-screen flex flex-col justify-center items-center text-center overflow-hidden'>
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className='absolute top-0 left-0 w-full h-full object-cover'>
          <source src='/videos/hero1.mp4' type='video/mp4' />
        </video>

        {/* Dark Overlay */}
        <div className='absolute top-0 left-0 w-full h-full bg-black/60'></div>

        {/* Hero Content */}
        <div className='relative z-10 px-6'>
          <h1 className='text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg'>
            Pairahat Super League 2026
          </h1>
          <p className='text-gray-200 mt-4 text-lg md:text-xl max-w-2xl mx-auto'>
            Official Player Registration, Live Matches, and League Leaderboards
          </p>

          <div className='mt-8 flex justify-center gap-6'>
            {/* View Profile Button */}
            <button
              onClick={() => navigate(`/players`)}
              className='px-4 py-2 bg-blue-600 text-white font-semibold rounded-full shadow hover:scale-105 transition duration-300 cursor-pointer'>
              View Players
            </button>

            {/* View Schedule Button */}
            <button
              onClick={() => navigate(`/schedule`)}
              className='px-4 py-2 bg-green-600 text-white font-semibold rounded-full shadow hover:scale-105 transition duration-300 cursor-pointer'>
              View Schedule
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className='p-8 space-y-20'>
        <section>
          <h2 className='text-3xl md:text-4xl font-extrabold text-accent mb-8'>
            Top Players
          </h2>
          <div className='grid md:grid-cols-3 sm:grid-cols-2 gap-8'>
            {topPlayers.map((player) => (
              <div
                key={player.id}
                className='p-6 pt-38 pb-38 relative rounded-3xl overflow-hidden shadow-lg hover:scale-105 transition-transform border border-white/20'
                style={{
                  backgroundImage: `url(${player.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}>
                {/* Optional Overlay */}
                <div className='absolute inset-0 bg-black/0'></div>

                {/* Content */}
                <div className='relative z-10 p-6 flex flex-col justify-end h-64'>
                  <h2 className='pb-6 text-5xl font-extrabold uppercase tracking-wide text-amber-400 bg-clip-text'>
                    {player.name}
                  </h2>

                  <div className='text-white mt-2 space-y-1 text-sm'>
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

                  <div className='mt-10'>
                    <button
                      onClick={() => navigate(`/player/${player.id}`)}
                      className='px-4 py-2 bg-blue-600 text-white font-semibold shadow hover:scale-105 transition duration-300 cursor-pointer'>
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Upcoming Matches Section */}
        <section>
          <h2 className='text-3xl md:text-4xl font-extrabold text-accent mb-8'>
            Upcoming Matches
          </h2>
          <div className='grid md:grid-cols-3 gap-10'>
            {upcomingMatches.map((match) => (
              <div
                key={match.id}
                className='bg-gradient-to-br from-gray-100 to-gray-100 backdrop-blur-xl rounded-3xl p-6 shadow-lg hover:scale-105 hover:shadow-accent transition border border-white/20'>
                <h3 className='text-xl font-bold text-accent mb-2'>
                  {match.teamA} vs {match.teamB}
                </h3>
                <p className='text-black-300 mb-1'>📅 {match.date}</p>
                <p className='ttext-black-300 mb-1'>⏰ {match.time}</p>
                <p className='text-black-300'>📍 {match.venue}</p>
                <div className='mt-4 text-center'>
                  <a
                    onClick={() => navigate("/schedule")}
                    className='text-accent font-semibold hover:underline cursor-pointer'>
                    View Full Schedule
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
