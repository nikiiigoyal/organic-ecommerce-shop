/* eslint-disable react/prop-types */
const UserProfile = ({ user }) => {
  if (!user) return null;
  return (
    <div className="flex flex-col items-center font-poppins border border-[#E6E6E6] rounded-lg p-4 md:p-6 w-full max-w-[500px] mx-auto my-2 md:my-4">
      <div className="mb-4 md:mb-6">
        <img
          src={user.profilePicture}
          alt={user.name}
          className="w-16 h-16 md:w-[100px] md:h-[100px] rounded-full object-cover"
        />
      </div>
      <div className="text-center">
        <h3 className="text-lg md:text-xl text-[#1A1A1A] font-semibold mb-1">
          {user.name}
        </h3>
        <p className="text-sm md:text-base text-[#808080] mb-4 md:mb-6">
          Customer
        </p>
        <button className="text-sm md:text-base text-[#20B526] hover:text-[#178a1c] hover:underline transition-colors duration-200 px-3 py-2 md:px-4 md:py-3">
          Edit Profile
        </button>
      </div>
    </div>
  );
};
export default UserProfile;
