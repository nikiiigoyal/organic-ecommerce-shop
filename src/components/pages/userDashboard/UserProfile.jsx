/* eslint-disable react/prop-types */
const UserProfile = ({user}) => {
    return (
        <>
        <div className="flex items-center font-poppins border border-[#E6E6E6] mx-auto my-2">
            <div>
                <img src={user.profilePicture} alt={user.name}></img>
            </div>
         <div>
            <h3 className="text-[#1A1A1A]">{user.name}</h3>
            <p className="text-[#808080]">Customer</p>
            <button className="text-[#20B526] p-2">Edit Profile</button>
         </div>
        </div>
        </>
    )
}
export default UserProfile;