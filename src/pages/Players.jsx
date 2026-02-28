// src/pages/Players.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import playersData from "../data/players";

const Players = () => {
  const navigate = useNavigate();

  const categoryOrder = { A: 1, B: 2, C: 3 };

  // Load initial data from localStorage or playersData
  const [players, setPlayers] = useState([]);
  const [soldPlayers, setSoldPlayers] = useState([]);
  const [modalPlayer, setModalPlayer] = useState(null);

  useEffect(() => {
    const sold = JSON.parse(localStorage.getItem("soldPlayers")) || [];
    const available = playersData.filter((p) => !sold.some((s) => s.id === p.id));
    setPlayers(available);
    setSoldPlayers(sold);
  }, []);

  const createSlug = (name) =>
    name
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-");

  const handleSold = (player) => {
    const updatedAvailable = players.filter((p) => p.id !== player.id);
    const updatedSold = [...soldPlayers, player];

    setPlayers(updatedAvailable);
    setSoldPlayers(updatedSold);

    localStorage.setItem("soldPlayers", JSON.stringify(updatedSold));
  };

  const handleUndo = (player) => {
    const updatedSold = soldPlayers.filter((p) => p.id !== player.id);
    const updatedAvailable = [...players, player];

    setSoldPlayers(updatedSold);
    setPlayers(updatedAvailable);

    localStorage.setItem("soldPlayers", JSON.stringify(updatedSold));
  };

  // Sort by category
  const sortedPlayers = [...players].sort(
    (a, b) => categoryOrder[a.category] - categoryOrder[b.category],
  );

  const positions = [
    { title: "Forwards", key: "forward" },
    { title: "Midfielders", key: "midfielder" },
    { title: "Defenders", key: "defender" },
    { title: "Goalkeepers", key: "goalkeeper" },
  ];

  const Section = ({ title, players }) => {
    const categories = ["A", "B", "C"];

    return (
      <section className='mb-16 mt-16 w-full'>
        <h2 className='text-3xl md:text-4xl font-extrabold text-white mb-8 uppercase tracking-wide'>
          {title}
        </h2>

        {categories.map((cat) => {
          const filteredPlayers = players.filter((p) => p.category === cat);
          if (filteredPlayers.length === 0) return null;

          return (
            <div key={cat} className='mb-10'>
              <h3 className='text-xl font-bold text-yellow-400 mb-4'>Category {cat}</h3>

              <div className='space-y-4'>
                {filteredPlayers.map((player) => (
                  <div
                    key={player.id}
                    className='flex items-center justify-between bg-gray-900 rounded-xl p-4 hover:bg-gray-800 transition duration-300 shadow-md'>
                    <div
                      className='flex w-full items-center gap-4 cursor-pointer'
                      onClick={() => setModalPlayer(player)}>
                      <img
                        src={player.profileImage}
                        alt={player.name}
                        className='w-16 h-16 object-cover rounded-full border-2 border-white/20'
                      />
                      <div>
                        <h3 className='text-xl font-bold text-white'>{player.name}</h3>
                        <p className='text-gray-400 text-sm'>{player.team}</p>
                      </div>
                    </div>

                    <div className='flex items-center gap-4'>
                      <button
                        onClick={() => setModalPlayer(player)}
                        className='px-4 py-2 bg-blue-600 text-white font-semibold rounded-full shadow hover:scale-105 transition duration-300 cursor-pointer'>
                        View
                      </button>

                      <button
                        onClick={() => handleSold(player)}
                        className='px-4 py-2 bg-red-600 text-white font-semibold rounded-full shadow hover:scale-105 transition duration-300 cursor-pointer'>
                        Sold
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </section>
    );
  };

  return (
    <div className='min-h-screen bg-gradient-to-b from-black via-gray-950 to-black px-10 py-20'>
      <div className='grid grid-cols-1 md:grid-cols-4 xl:grid-cols-4 gap-12'>
        {positions.map((pos) => {
          const filtered = sortedPlayers.filter(
            (p) => p.position.toLowerCase() === pos.key,
          );
          return <Section key={pos.key} title={pos.title} players={filtered} />;
        })}
      </div>

      {/* Sold Section */}
      {soldPlayers.length > 0 && (
        <section className='mt-20'>
          <h2 className='text-3xl md:text-4xl font-extrabold text-red-500 mb-6 uppercase tracking-wide'>
            Sold Players
          </h2>
          <div className='space-y-4'>
            {soldPlayers.map((player) => (
              <div
                key={player.id}
                className='bg-red-900/40 border border-red-500 text-white p-4 rounded-xl flex justify-between items-center'>
                <div>
                  <p className='font-bold'>{player.name}</p>
                  <p className='text-sm text-gray-300'>
                    {player.position} • Category {player.category}
                  </p>
                </div>

                <button
                  onClick={() => handleUndo(player)}
                  className='px-4 py-2 bg-green-600 rounded-full text-sm font-semibold hover:bg-green-700 transition'>
                  Undo
                </button>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Modal */}
      {modalPlayer && (
        <div
          onClick={() => setModalPlayer(null)}
          className='fixed inset-0 bg-black/70 flex items-center justify-center z-50 cursor-pointer'>
          <div
            onClick={(e) => e.stopPropagation()}
            className='bg-gray-900 p-10 rounded-3xl shadow-2xl max-w-2xl w-full text-white animate-fadeIn'>
            {/* Header */}
            <div className='flex justify-between items-start'>
              <h2 className='text-4xl font-bold mb-4'>{modalPlayer.name}</h2>
              <button
                onClick={() => setModalPlayer(null)}
                className='px-3 py-1 bg-red-600 rounded-full font-bold hover:bg-red-700 transition'>
                X
              </button>
            </div>

            {/* Player Details */}
            <div className='bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-2xl'>
              <div
                className='p-10 pt-52 pb-52 flex flex-col justify-center relative'
                style={{
                  backgroundImage: `url(${modalPlayer.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}>
                <div className='absolute inset-0 bg-black/0'></div>
                <div className='relative z-10 text-white'>
                  <h1 className='pb-6 text-7xl font-extrabold uppercase tracking-wide text-amber-400 bg-clip-text animate-pulse'>
                    {modalPlayer.name}
                  </h1>

                  <div className='space-y-3 text-lg'>
                    <p>
                      <strong>Position:</strong>{" "}
                      <span className='text-amber-400 uppercase font-bold'>
                        {modalPlayer.position}
                      </span>
                    </p>
                    <p>
                      <strong>Preferred Foot:</strong>{" "}
                      <span className='text-amber-400 uppercase font-bold'>
                        {modalPlayer.preferredFoot}
                      </span>
                    </p>
                    <p>
                      <strong>Age:</strong>{" "}
                      <span className='text-amber-400 uppercase font-bold'>
                        {modalPlayer.age} years
                      </span>
                    </p>
                    <p>
                      <strong>Height:</strong>{" "}
                      <span className='text-amber-400 uppercase font-bold'>
                        {modalPlayer.height}
                      </span>
                    </p>
                    <p>
                      <strong>Nationality:</strong>{" "}
                      <span className='text-amber-400 uppercase font-bold'>
                        {modalPlayer.nationality}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Players;
