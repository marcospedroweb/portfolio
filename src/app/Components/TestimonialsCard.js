
const TestimonialsCard = ({ user, role, team_role, testimonial }) => {
  return (
    <div className="bg-[#323232] p-6 border-b-4 border-[#3DA661] text-start w-full  h-fit">
      <div className="flex justify-start items-center">
        <div className="rounded-full bg-[#3DA661] w-12 h-12 flex justify-center items-center"><span className="inline-block text-2xl text-white font-bold">{user.split('')[0]}</span></div>
        <div className="flex flex-col ms-4">
          <h4 className="font-bold text-xl text-white">{user}</h4>
          <p className="text-[rgba(255,255,255,0.4)]">{role} | {team_role}</p>
        </div>
      </div>
      <p className="mt-8 text-[rgba(255,255,255,0.8)]">{testimonial}</p>
    </div>
  )
}

export default TestimonialsCard