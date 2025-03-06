import { useAuth } from "../AuthContext";

const Header = () => {
  const { loginWithGoogle, user } = useAuth(); // Use the authentication context

  return (
    <div className="w-full h-[18vh] bg-[#9f835e] fixed top-0 left-0 z-50 flex items-center justify-between p-5">
      {/* App Logo */}
      <h1 className="text-4xl font-bold">Listify</h1>

      {/* Google Login Button (or user profile) */}
      {!user ? (
        <button
          onClick={loginWithGoogle}
          className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-105 transition"
        >
          <img
            src="src/assets/google-g-logo.png"
            alt="Google Login"
            className="w-6 h-6"
          />
        </button>
      ) : (
        <img
          src={user.picture}
          alt="User"
          className="w-12 h-12 rounded-full border border-white"
        />
      )}
    </div>
  );
};

export default Header;
