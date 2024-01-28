import Image from "next/image";

type Props = {
  type: "email" | "password";
  value?: string;
  placeholder?: string;
  iconAlt: string;
  iconSrc?: string;
  className?: string;
  onChangedHandler: (value: string) => void;
  onBlurHandler?: () => void;
};

const InputContainer = ({
  type,
  value,
  placeholder,
  iconAlt,
  iconSrc,
  className,
  onChangedHandler,
  onBlurHandler,
}: Props) => {
  return (
    <div className="auth__input-container w-full">
      {iconSrc && <Image width={25} height={25} src={iconSrc} alt={iconAlt} />}
      <input
        type={type}
        value={value}
        className={`auth__input ${className}`}
        placeholder={placeholder}
        onBlur={onBlurHandler}
        onChange={(e) => onChangedHandler(e.target.value)}
      />
    </div>
  );
};

export default InputContainer;
