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
    // Fetch billing address data from API
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
      {/* First grid for overall layout - splits into sidebar and main content */}
      <div className="grid grid-cols-12 gap-6 p-6">
        {/* Sidebar Navigation - takes 2 columns on large screens */}
        <div className="col-span-12 lg:col-span-2">
          {/* <div className="bg-white rounded-lg shadow-sm">
                        <Navigation />
                    </div> */}
        </div>

        {/* Main Content Area - takes remaining 10 columns */}
        <div className="col-span-12 lg:col-span-10">
          {/* Second grid for the top row (Profile and Billing) */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            {/* User Profile - takes first column */}
            <div className="col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6">
                {user && <UserProfile user={user} />}
              </div>
            </div>

            {/* Billing Address - takes second column */}
            <div className="col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6">
                {billingAddress && <BillingAddress address={billingAddress} />}
              </div>
            </div>
          </div>

          {/* Order History - full width below */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <OrderHistoryTable orders={orders} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
