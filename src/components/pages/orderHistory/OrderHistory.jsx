/* eslint-disable react/prop-types */
const OrderHistoryTable = ({ orders }) => {
  return (
    <div className="font-poppins w-full md:w-[90%] lg:w-[70%] p-2 md:p-4 mx-auto">
      <div className="flex flex-col justify-between border border-[#E6E6E6] rounded-md overflow-x-auto">
        <div className="flex flex-row justify-between items-center p-4">
          <h1 className="text-[#1A1A1A] font-semibold text-lg md:text-[20px]">
            Recent Order History
          </h1>
          <button className="text-[#20B526] text-sm">View All</button>
        </div>

        <div className="min-w-[600px]">
          <table className="w-full">
            <thead>
              <tr className="bg-[#F2F2F2] text-[#4D4D4D] text-sm">
                <th className="text-left p-3">ORDER ID</th>
                <th className="text-left p-3">DATE</th>
                <th className="text-left p-3">TOTAL</th>
                <th className="text-left p-3">STATUS</th>
                <th className="text-left p-3">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {orders.length === 0 ? (
                <tr>
                  <td
                    colSpan="5"
                    className="text-center p-4 text-[#333333] text-sm"
                  >
                    No orders found
                  </td>
                </tr>
              ) : (
                orders.map((order) => (
                  <tr key={order.id} className="border-t border-[#E6E6E6]">
                    <td className="p-3 text-[#333333] text-sm">{order.id}</td>
                    <td className="p-3 text-[#333333] text-sm">{order.date}</td>
                    <td className="p-3 text-[#333333] text-sm">
                      {order.total}
                    </td>
                    <td className="p-3 text-[#333333] text-sm">
                      {order.status}
                    </td>
                    <td className="p-3 text-[#20B526] text-sm">
                      <a
                        href={`/orders/${order.id}`}
                        className="hover:underline"
                      >
                        View Details
                      </a>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default OrderHistoryTable;
