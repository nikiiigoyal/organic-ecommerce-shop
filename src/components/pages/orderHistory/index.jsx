import { useEffect, useState } from 'react';
import OrderHistoryTable from './OrderHistory';

export const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetchOrderHistory();
  }, []);
  const fetchOrderHistory = () => {
    setOrders([
      { id: '#3933', date: '8 Sep, 2020', total: 135.0, status: 'Processing' },
      { id: '#5045', date: '24 May, 2020', total: 25.0, status: 'On the way' },
      { id: '#5028', date: '22 Oct, 2020', total: 250.0, status: 'Completed' },
      { id: '#4600', date: '1 Feb, 2020', total: 35.0, status: 'Completed' },
      { id: '#4152', date: '21 Sep, 2020', total: 578.0, status: 'Completed' },
      { id: '#8811', date: '22 Oct, 2020', total: 345.0, status: 'Completed' },
      { id: '#3933', date: '8 Sep, 2020', total: 135.0, status: 'Processing' },
      { id: '#5045', date: '24 May, 2020', total: 25.0, status: 'On the way' },
      { id: '#5028', date: '22 Oct, 2020', total: 250.0, status: 'Completed' },
      { id: '#4600', date: '1 Feb, 2020', total: 35.0, status: 'Completed' },
      { id: '#4152', date: '21 Sep, 2020', total: 578.0, status: 'Completed' },
      { id: '#8811', date: '22 Oct, 2020', total: 345.0, status: 'Completed' },
    ]);
  };
  return (
    <>
      <div className="flex flex-row my-5">
        <OrderHistoryTable orders={orders} />
      </div>
    </>
  );
};
