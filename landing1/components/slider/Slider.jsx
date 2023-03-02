import Image from "next/image";

const Slider = ({ sliderImgs, cls }) => {
  return (
    <div className={`${cls} flex flex-col`}>
      {sliderImgs.map(([imgName, id]) => (
        <div key={id}>
          <Image
            className="transition duration-300 hover:skew-x-2 hover:scale-105 rounded-[15px] cursor-pointer"
            src={imgName}
            alt={imgName}
            // layout="responsive"
          />
        </div>
      ))}
    </div>
  );
};

export default Slider;
