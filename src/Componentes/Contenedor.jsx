export const Contenedor = ({ children }) => {
  return (
    <div className="flex justify-center bg-[#F4F5F0] min-h-screen">
      <div className="text-base bg-[#E6DFD7] w-5/6 md:w-3/6 my-4 p-4 rounded-xl shadow-md">{children}</div>
    </div>
  );
};
