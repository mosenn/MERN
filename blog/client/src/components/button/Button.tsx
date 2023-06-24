interface buttonProps {
  text?: string | any;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  onClick?: () => Promise<void>;
}

export default function Button({
  text,
  type,
  className,
  disabled,
  onClick,
}: buttonProps) {
  return (
    <button
      disabled={disabled}
      type={type}
      className={className}
      onClick={onClick}
    >
      <span className="p-2"> {text}</span>
    </button>
  );
}
