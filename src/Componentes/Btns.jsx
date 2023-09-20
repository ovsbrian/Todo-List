export const Btns = ({ children, onClick, color }) => {
  const colorMap = {
    yellow: "bg-yellow-400",
    red: "bg-red-400",
    success: "bg-green-400"
    // Agrega más colores aquí si es necesario
  };
  return (
    <>
      <div
        className={`${colorMap[color]} p-2 w-8 flex justify-center items-center rounded-lg font-semibold cursor-pointer hover:opacity-80`}
        onClick={onClick}
      >
         {children}
      </div>
    </>
  );
};
