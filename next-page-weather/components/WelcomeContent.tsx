import weatherIcon from "@/public/weather-icon.png";
import Image from "next/image";
const WelcomeContent = () => {
  return (
    <div className="flex flex-col gap-2 items-center">
      <Image className="app__logo" src={weatherIcon} alt="weather icon" />
      <h3 className="text-2xl">Welcome!</h3>
    </div>
  );
};

export default WelcomeContent;
