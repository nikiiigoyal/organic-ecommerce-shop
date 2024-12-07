/* eslint-disable react/prop-types */
const OrderHistoryTable = ({ orders }) => {
  return (
    <>
      <div className="flex flex-col justify-between border border-[#E6E6E6] font-poppins w-[70%] p-4 mx-auto rounded-md">
        <div className="flex flex-row justify-between">
          <h1 className="text-[#1A1A1A] font-semibold text-[20px] py-5">
            Recent Order History
          </h1>
          <button className="text-[#20B526] text-sm">View All</button>
        </div>
        <table>
          <thead>
            <tr className="bg-[#F2F2F2] text-[#4D4D4D] text-sm py-6">
              <th className="text-left">ORDER ID</th>
              <th className="text-left">DATE</th>
              <th className="text-left">TOTAL</th>
              <th className="text-left">STATUS</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.length === 0
              ? 'No orders found'
              : orders.map((order) => (
                  <tr key={order.id}>
                    <td className="py-3 text-[#333333] text-sm">{order.id}</td>
                    <td className="py-3 text-[#333333] text-sm">
                      {order.date}
                    </td>
                    <td className="py-3 text-[#333333] text-sm">
                      {order.total}
                    </td>
                    <td className="py-3 text-[#333333] text-sm">
                      {order.status}
                    </td>
                    <td className="text-[#20B526] text-sm">
                      <a href={`/orders/${order.id}`}>View Details</a>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default OrderHistoryTable;
