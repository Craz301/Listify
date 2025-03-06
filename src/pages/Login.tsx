import { useAuth } from "../AuthContext";
import Header from "../components/Header"; // Import the Header
import Carousel from "../components/Carousel"; // Import the Carousel

const Login = () => {
  const { loginWithGoogle } = useAuth();

  return (
    <div className="flex flex-col items-center justfy-center  p-8">
      {/* Header always at the top */}
      <Header />
      {/* Login Box */}
      <div>
        <Carousel />
      </div>
    </div>
  );
};

export default Login;
