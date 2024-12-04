/* eslint-disable react/prop-types */
const UserProfile = ({ user }) => {
  if (!user) return null;
  return (
    <>
      <div className="flex flex-col items-center font-poppins border border-[#E6E6E6] my-2 w-[500px]">
        <div>
          <img
            src={user.profilePicture}
            alt={user.name}
            className="mb-4 w-[100px] h-[100px]"
          ></img>
        </div>
        <div>
          <h3 className="text-[#1A1A1A] font-semibold">{user.name}</h3>
          <p className="text-[#808080] text-center">Customer</p>
          <button className="text-[#20B526] text-center px-4 py-3">
            Edit Profile
          </button>
        </div>
      </div>
    </>
  );
};
export default UserProfile;
