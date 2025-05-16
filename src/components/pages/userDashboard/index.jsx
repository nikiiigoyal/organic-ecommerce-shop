import { useEffect, useState } from 'react';
import UserProfile from './UserProfile';
import OrderHistoryTable from './OrderHistoryTable';
import { BillingAddress } from './BillingAddress';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const [billingAddress, setBillingAddress] = useState(null);

  useEffect(() => {
    fetchUserData();
    fetchOrderHistory();
    fetchBillingAddress();
  }, []);

  const fetchUserData = () => {
    setUser({
      name: 'Dianee Russell',
      profilePicture: 'images/avatar.png',
    });
  };

  const fetchOrderHistory = () => {
    setOrders([
      { id: '#738', date: '8 Sep, 2020', total: 135.0, status: 'Processing' },
      { id: '#703', date: '24 May, 2020', total: 25.0, status: 'On the way' },
      { id: '#130', date: '22 Oct, 2020', total: 250.0, status: 'Completed' },
      { id: '#561', date: '1 Feb, 2020', total: 35.0, status: 'Completed' },
      { id: '#536', date: '21 Sep, 2020', total: 578.0, status: 'Completed' },
      { id: '#492', date: '22 Oct, 2020', total: 345.0, status: 'Completed' },
    ]);
  };

  const fetchBillingAddress = () => {
    setBillingAddress({
      fullName: 'Dianne Russell',
      streetAddress: '4140 Parker Rd',
      city: 'Allentown',
      state: 'New Mexico',
      zipCode: '31124',
      email: 'dianne.russell@gmail.com',
      phone: '(671) 555-0110',
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main grid layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 p-4 md:p-6">
        {/* Sidebar Navigation - hidden on mobile, appears on large screens */}
        <div className="hidden lg:block lg:col-span-2">
          {/* <div className="bg-white rounded-lg shadow-sm">
            <Navigation />
          </div> */}
        </div>

        {/* Main Content Area */}
        <div className="col-span-1 lg:col-span-10 space-y-4 md:space-y-6">
          {/* Top row - becomes vertical stack on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* User Profile */}
            <div className="bg-white rounded-lg shadow-sm p-4 md:p-6">
              {user && <UserProfile user={user} />}
            </div>

            {/* Billing Address */}
            <div className="bg-white rounded-lg shadow-sm p-4 md:p-6">
              {billingAddress && <BillingAddress address={billingAddress} />}
            </div>
          </div>

          {/* Order History Table */}
          <div className="bg-white rounded-lg shadow-sm p-4 md:p-6">
            <OrderHistoryTable orders={orders} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
