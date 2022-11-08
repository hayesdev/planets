const Stats = ({ planet }) => (
  <section className="flex w-full justify-between items-start">
    <div className="flex flex-col justify-center items-start w-[255px] h-[128px] border border-[#FFFFFF]/20">
      <p className="uppercase font-spartan font-bold text-[11px] text-[#FFFFFF]/50 leading-[25px] tracking-[1.5px] ml-8">
        rotation time
      </p>
      <p className="uppercase font-antonio font-normal text-[40px] text-[#FFFFFF] leading-[52px] -tracking-[1.5px] ml-8 mb-4">
        {planet.rotTime}
      </p>
    </div>
    <div className="flex flex-col justify-center items-start w-[255px] h-[128px] border border-[#FFFFFF]/20">
      <p className="uppercase font-spartan font-bold text-[11px] text-[#FFFFFF]/50 leading-[25px] tracking-[1.5px] ml-8">
        revolution time
      </p>
      <p className="uppercase font-antonio font-normal text-[40px] text-[#FFFFFF] leading-[52px] -tracking-[1.5px] ml-8 mb-4">
        {planet.revTime}
      </p>
    </div>
    <div className="flex flex-col justify-center items-start w-[255px] h-[128px] border border-[#FFFFFF]/20">
      <p className="uppercase font-spartan font-bold text-[11px] text-[#FFFFFF]/50 leading-[25px] tracking-[1.5px] ml-8">
        radius
      </p>
      <p className="uppercase font-antonio font-normal text-[40px] text-[#FFFFFF] leading-[52px] -tracking-[1.5px] ml-8 mb-4">
        {planet.radius}
      </p>
    </div>
    <div className="flex flex-col justify-center items-start w-[255px] h-[128px] border border-[#FFFFFF]/20">
      <p className="uppercase font-spartan font-bold text-[11px] text-[#FFFFFF]/50 leading-[25px] tracking-[1.5px] ml-8">
        average temp.
      </p>
      <p className="uppercase font-antonio font-normal text-[40px] text-[#FFFFFF] leading-[52px] -tracking-[1.5px] ml-8 mb-4">
        {planet.avgTemp}
      </p>
    </div>
  </section>
);

export default Stats;
