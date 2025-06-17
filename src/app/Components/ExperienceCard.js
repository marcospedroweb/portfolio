import { formatDateRange } from "../helpers/formatDateRange";

const ExperienceCard = ({ date, actual, title, company, jobType, description }) => {
  const isList = description.includes('\n');

  return (
    <div className='flex flex-col items-start justify-center gap-5 md:flex-row'>
      <div className='items-start justify-center hidden gap-8 md:flex'>
        <div className="
          relative inline-block bg-[#3A3A3A] text-white px-4 py-2 text-sm rounded-l-sm mt-[-5px] after:content-[''] after:absolute after:top-1/2 after:right-[-20px] after:-translate-y-1/2 after:border-y-[18.5px] after:border-l-[20px] after:border-y-transparent after:border-l-[#3A3A3A]

        ">
          <span>{formatDateRange(date.start, date.end)}</span>
        </div>
        <div className='flex flex-row items-center justify-center md:flex-col'>
          <div className={`w-6 h-6 ${actual ? '' : 'rounded-full'} bg-[#3DA661] mb-4`}></div>
          <div className='w-20 h-1 bg-white md:w-1 md:h-60'></div>
        </div>
      </div>

      <div className="text-start max-sm:border-[3px] max-sm:p-5 max-sm:rounded-y-xl max-sm:rounded-r-xl max-sm:border-[rgba(255,255,255,0.1)] max-sm:border-l-[#3DA661]">
        <div className="
          inline-block md:hidden bg-[#3A3A3A80] text-white px-4 py-2 text-sm mt-[-5px]
            mb-4 rounded-lg
        ">
          <span>{formatDateRange(date.start, date.end)}</span>
        </div>
        <h5 className='mb-2 text-3xl font-bold text-white'>{title}</h5>
        <p className='font-[Montserrat] text-xl text-white mb-4'>{company} | {jobType}</p>

        {isList ? (
          <div className="text-[rgba(255,255,255,0.5)] max-w-md leading-relaxed">
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
