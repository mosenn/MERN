
interface propsToast {
  text: string;
  toast: Boolean;
}
const Toast = ({ text, toast }: propsToast) => {
  return (
    <div
      className={` bg-green-300 w-[250px] fixed text-center  p-[10px] rounded font-semibold text-[#6f6f6f]  ${
        toast && "showToast"
      } `}
    >
      <p>
        <span>🎉</span> {text}
      </p>
      <div
        className={`absolute bg-blue-300 w- h-[3px] bottom-[-3px] left-0 rounded-sm ${
          toast && "loadingRedirect"
        }`}
      ></div>
    </div>
  );
};

export default Toast;
