
const Container = ({ children }) => {
  return (
    <div className="max-w-[1800px] w-full px-[10px] sm:px-[20px] md:px-[40px] lg:px-[80px]">
      {children}
    </div>
  );
};

export default Container;
