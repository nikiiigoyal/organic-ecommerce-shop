const CountdownTimer = () => {
  return (
    // < className="flex justify-center items-center space-x-2 font-poppins text-xl mx-auto">
    <>
      <div className="flex flex-col items-center">
        <span className="font-bold">00</span>
        <span className="text-sm text-white">Days</span>
      </div>
      <span className="font-bold">:</span>
      <div className="flex flex-col items-center">
        <span className="font-bold">02</span>
        <span className="text-sm text-white">Hours</span>
      </div>
      <span className="font-bold">:</span>
      <div className="flex flex-col items-center">
        <span className="font-bold">18</span>
        <span className="text-sm text-white">Mins</span>
      </div>
      <span className="font-bold">:</span>
      <div className="flex flex-col items-center">
        <span className="font-bold">46</span>
        <span className="text-sm text-white">Secs</span>
      </div>
    </>
  );
};
export default CountdownTimer;
