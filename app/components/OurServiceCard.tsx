interface IProps {
  title: string;
  label: string;
  imgSrc: string;
  className?: string;
}

const OurServiceCard = ({ title, label, imgSrc, className }: IProps) => {
  return (
    <div
      className={`border-2 rounded-xl border-[#032759] relative ${className}`}
    >
      <div className="h-24 absolute bottom-10 right-5 left-5 bg-white py-3 px-1 z-10 border-2 border-[#032759] flex flex-col justify-center items-center">
        <h1 className="text-[#26343D] font-semibold">{title}</h1>
        <p className="mt-1 text-center text-[#757575] text-sm font-medium">
          {label}
        </p>
      </div>
      <img
        src={imgSrc}
        alt={title}
        className="w-full h-full rounded-xl border-2 border-[#032759] relative"
      />
    </div>
  );
};

export default OurServiceCard;
