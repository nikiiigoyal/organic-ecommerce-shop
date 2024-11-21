/* eslint-disable react/prop-types */
const OrderHistoryTable = ({ orders }) => {
    return (
        <>
        <div className="flex flex-col border border-[#E6E6E6] font-poppins">
        <div className="flex flex-row">
          <h1 className="text-[#1A1A1A] font-semibold text-[20px]">Recent Order History</h1>
          <button className="text-[#20B526] text-sm">View All</button>
        </div>
        <table>
    <thead>
        <tr className="bg-[#F2F2F2] text-[#4D4D4D] text-sm">
           <th>ORDER ID</th>
           <th>DATE</th>
           <th>tOTAL</th>
           <th>STATUS</th>
           <th></th>
        </tr>
    </thead>
    <tbody>
        {orders.map((order) => {
            <tr key={order.id}>
                <td>{order.date}</td>
                <td>{order.total}</td>
                <td>{order.status}</td>
                <td><a href={`/orders/${order.id}`}>View Details</a></td>
            </tr>
        })}
    </tbody>
        </table>
        </div>
        </>
    )
}
export default OrderHistoryTable;