const Planet = ({ planet }) => (
  <div className="flex flex-col w-[380px] h-[500px] justify-center items-end mt-[120px] ml-5">
    <div
      className={`bg-[${planet.color}] rounded-full w-[290px] h-[290px]`}
    ></div>
  </div>
);

export default Planet;
