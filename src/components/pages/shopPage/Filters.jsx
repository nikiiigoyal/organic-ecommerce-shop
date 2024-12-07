export const Filters = () => {
  return (
    <>
      <div className="flex flex-col font-poppins text-sm border-gray-50 mx-auto w-[80%] mb-4">
        <div className="flex flex-row justify-between ">
          <div className="">
            <select className="border p-2 rounded mr-2">
              <option>Select Category</option>
              <option>Fresh fruit</option>
              <option>Vegetables</option>
              <option>Cooking</option>
              <option>Snacks</option>
              <option>Beverages</option>
              <option>Beauty & Health</option>
              <option>Bread & Bakery</option>
            </select>
            <select className="border p-2 rounded mr-2">
              <option>Select Price</option>
              <option>50-100</option>
              <option>100-500</option>
              <option>500-1000</option>
              <option>1000-1500</option>
            </select>
            <select className="border p-2 rounded">
              <option>Select Rating</option>
              <option>5.0</option>
              <option>4.0 & up</option>
              <option>3.0 & up</option>
              <option>2.0 & up</option>
              <option>1.0 & up</option>
            </select>
          </div>
          <div className="flex justify-around">
            <select className="border p-2 rounded mr-2">
              <option>Sort by: Latest</option>
            </select>
            <select className="border p-2 rounded">
              <option>Show: 16</option>
            </select>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};
