export const Contenedor = ({ children }) => {
  return (
    <div className="flex justify-center bg-[#000000ec] min-h-screen">
      <div className="text-base bg-[#e6d1ba] w-5/6 md:w-3/6 my-4 p-4 rounded-xl shadow-md gap-6 flex flex-col">{children}</div>
    </div>
  );
};
