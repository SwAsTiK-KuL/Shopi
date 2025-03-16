import Navbar from "./navbar";
import ProfileImage from "../assets/Profile.jpg"

function MyAccount() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-full w-full mt-6">
  <h2 className="text-md text-black">My Account</h2>
</div>

      <div className="flex justify-center items-center mt-5 bg-white">
        <div className="border border-gray-300 rounded-lg p-8 w-[650px] text-center">
          

          <p className="text-md font-semibold mb-4">Created by:</p>

          <img
            src={ProfileImage} 
            alt="Profile"
            className="w-60 h-60 mx-auto rounded-full object-cover border border-gray-300"
            />

          <p className="text-lg font-bold mt-4">Swastik Kulkarni</p>
          <p className="text-blue-600 cursor-pointer">@SwastikKulkarni 👆</p>
        </div>
      </div>
    </>
  );
}

export default MyAccount;
