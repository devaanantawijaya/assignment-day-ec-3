type ButtonProps = {
  title?: string;
  onClick?: () => void;
  bg: string;
};

const Button = ({ title, onClick, bg }: ButtonProps) => {
  return (
    <button className={`px-5 py-2 rounded-xl w-full ${bg}`} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
