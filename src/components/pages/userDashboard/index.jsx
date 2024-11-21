import { useEffect, useState } from "react"
import UserProfile from "./UserProfile";
import OrderHistoryTable from "./OrderHistoryTable";
import {BillingAddress} from "./BillingAddress";
import Navigation from "../Navigation";

const Dashboard = () => {
    const [user, setUser] = useState (null);
    const [orders,setOrders] = useState([]);
    const [billingAddress, setBillingAddress] = useState(null);
    useEffect(() => {
        fetchUserData();
        fetchOrderHistory();
        fetchBillingAddress();
    },[]);
    const fetchUserData = () => {
        setUser ({
            name: 'Dianee Russell',
            profilePicture: 'images/avatar.png'
        })
    }
    const fetchOrderHistory = () => {
        setOrders([
            { id: '#738', date: '8 Sep, 2020', total: 135.00, status: 'Processing' },
            { id: '#703', date: '24 May, 2020', total: 25.00, status: 'On the way' },
            { id: '#130', date: '22 Oct, 2020', total: 250.00, status: 'Completed' },
            { id: '#561', date: '1 Feb, 2020', total: 35.00, status: 'Completed' },
            { id: '#536', date: '21 Sep, 2020', total: 578.00, status: 'Completed' },
            { id: '#492', date: '22 Oct, 2020', total: 345.00, status: 'Completed' }
          ]);
    }
    const fetchBillingAddress = () => {
        // Fetch billing address data from API
        setBillingAddress({
          fullName: 'Dianne Russell',
          streetAddress: '4140 Parker Rd',
          city: 'Allentown',
          state: 'New Mexico',
          zipCode: '31124',
          email: 'dianne.russell@gmail.com',
          phone: '(671) 555-0110'
        });
      };
    return(
        <div>
            <Navigation />
            <UserProfile user={user} />
            <OrderHistoryTable orders={orders}/>
            <BillingAddress address={billingAddress}/>
            
        </div>
    )
}
export default Dashboard;