const ProgressBar = ({ percentage }: { percentage: number | any }) => {
  return (
    <div className="w-full bg-[#EAEAEA] rounded-full h-3 overflow-hidden">
      <div
        className="bg-primary h-full transition-all duration-300 rounded-full"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

export default ProgressBar;
