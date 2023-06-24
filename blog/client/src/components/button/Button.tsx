interface buttonProps {
  text: string;
  type: "button" | "submit" | "reset";
  className: string;
  disabled: boolean;
}

export default function Button({ text, type, className , disabled }: buttonProps) {
  return (
    <button disabled={disabled} type={type} className={className}>
      {text}
    </button>
  );
}
