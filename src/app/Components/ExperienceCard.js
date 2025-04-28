import { formatDateRange } from "../helpers/formatDateRange";

const ExperienceCard = ({ date, actual, title, company, jobType, description }) => {
  const isList = description.includes('\n');

  return (
    <div className='flex flex-col md:flex-row justify-center items-start gap-5'>
      <div className='flex justify-center items-start gap-8'>
        <div className="relative inline-block bg-[#3A3A3A] text-white px-4 py-2 text-sm rounded-l-sm mt-[-5px] after:content-[''] after:absolute after:top-1/2 after:right-[-20px] after:-translate-y-1/2 after:border-y-[18.5px] after:border-l-[20px] after:border-y-transparent after:border-l-[#3A3A3A]">
          <span>{formatDateRange(date.start, date.end)}</span>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <div className={`w-6 h-6 ${actual ? '' : 'rounded-full'} bg-[#3DA661] mb-4`}></div>
          <div className='w-1 h-60 bg-white'></div>
        </div>
      </div>

      <div className="text-start">
        <h5 className='font-bold text-3xl text-white mb-2'>{title}</h5>
        <p className='font-[Montserrat] text-xl text-white mb-4'>{company} | {jobType}</p>

        {isList ? (
          <div className="text-[rgba(255,255,255,0.5)] max-w-md">
            {description.split('\n').map((line, index) => (
              <p key={index} className="mt-0">{line.replace(/^- /, '')}</p>
            ))}
          </div>
        ) : (
          <p className="text-[rgba(255,255,255,0.5)] max-w-md">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

export default ExperienceCard;
