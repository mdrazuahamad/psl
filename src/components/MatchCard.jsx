const MatchCard = ({ match }) => {
  return (
    <div className='relative bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl shadow-lg hover:shadow-accent/40 transition transform hover:-translate-y-1'>
      {/* Match Title */}
      <h3 className='text-xl md:text-2xl font-extrabold text-white mb-3'>
        {match.teamA} vs {match.teamB}
      </h3>

      {/* Match Info */}
      <p className='text-gray-300 mt-1'>📅 {match.date}</p>
      <p className='text-gray-300'>⏰ {match.time}</p>
      <p className='text-gray-400'>📍 {match.venue}</p>
    </div>
  );
};

export default MatchCard;
