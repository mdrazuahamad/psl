import { useNavigate } from "react-router-dom";
import players from "../data/players";

const Players = () => {
  const navigate = useNavigate();

  const forwards = players.filter((p) => p.position.toLowerCase() === "forward");
  const midfielders = players.filter((p) => p.position.toLowerCase() === "midfielder");
  const defenders = players.filter((p) => p.position.toLowerCase() === "defender");

  const Section = ({ title, players }) => (
    <section className='mb-16'>
      {/* Section Header */}
      <h2 className='text-3xl md:text-4xl font-extrabold text-white mb-6 uppercase tracking-wide'>
        {title}
      </h2>

      {/* Player List */}
      <div className='space-y-4'>
        {players.map((player) => (
          <div
            key={player.id}
            className='flex items-center justify-between bg-gray-900 rounded-xl p-4 hover:bg-gray-800 transition duration-300 shadow-md'>
            {/* Player Image + Name */}
            <div
              className='flex items-center gap-4 cursor-pointer'
              onClick={() => navigate(`/player/${player.id}`)}>
              <img
                src={player.image}
                alt={player.name}
                className='w-16 h-16 object-cover rounded-full border-2 border-white/20'
              />
              <div>
                <h3 className='text-xl font-bold text-white'>{player.name}</h3>
                <p className='text-gray-400 text-sm'>{player.team}</p>
              </div>
            </div>

            {/* Player Info */}
            <div className='flex items-center gap-6 text-gray-300 text-sm'>
              <span>Age: {player.age}</span>
              <span>Position: {player.position}</span>
            </div>

            {/* View Profile Button */}
            <button
              onClick={() => navigate(`/player/${player.id}`)}
              className='px-4 py-2 bg-blue-600 text-white font-semibold rounded-full shadow hover:scale-105 transition duration-300'>
              View Profile
            </button>
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <div className='min-h-screen bg-gradient-to-b from-black via-gray-950 to-black px-10 py-20'>
      <Section title='Forwards' players={forwards} />
      <Section title='Midfielders' players={midfielders} />
      <Section title='Defenders' players={defenders} />
    </div>
  );
};

export default Players;
