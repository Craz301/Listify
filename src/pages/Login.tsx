import { useAuth } from "../AuthContext";

const Login = () => {
  const { loginWithGoogle } = useAuth();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-xl text-center">
        <h1 className="text-3xl font-bold mb-4">Login</h1>
        <button
          onClick={loginWithGoogle}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
