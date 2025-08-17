import Categories from "../Category";
const Filter = ({ filterCard }) => {
  return (
    <div className="flex w-full items-center justify-center gap-5 flex-wrap">
      {Categories.map((item) => (
        <div
          className="flex p-3 justify-between flex-col flex-wrap bg-white w-[90px] h-[95px]
        shadow-lg rounded-lg hover:bg-green-200 transition-all duration-300 ease-in
        "
          onClick={() => filterCard(item.name)}
        >
          <div>{item.icon}</div>
          <div className="font-semibold text-[13px]">{item.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Filter;
