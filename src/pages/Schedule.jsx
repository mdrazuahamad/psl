import matches from "../data/matches";
import MatchCard from "../components/MatchCard";

const Schedule = () => {
  return (
    <div className='min-h-screen pt-38 flex flex-col px-6 md:px-12 py-12 bg-gray-700'>
      {/* Page Title */}
      <h2 className='text-3xl md:text-4xl font-extrabold mb-10 text-white text-center'>
        Match Schedule
      </h2>

      {/* Match Cards Grid */}
      <div className='grid md:grid-cols-2 gap-6'>
        {matches.map((match) => (
          <MatchCard key={match.id} match={match} />
        ))}
      </div>
    </div>
  );
};

export default Schedule;
