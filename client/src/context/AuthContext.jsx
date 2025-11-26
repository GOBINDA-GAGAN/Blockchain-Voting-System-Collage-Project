import { createContext, useEffect, useState,} from "react";
import axiosInstance from "../../Api/axiosInstance";
import API from "../../Api/apiEndpoints";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {null});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    fetchUser();
  }, []);


  const fetchUser = async () => {
    try {
      const res = await axiosInstance.get(API.AUTH.ME, {
        withCredentials: true,
      });
      setUser(res.data.user);
    } catch (err) {
      setUser(null);
      console.error(err);
      toast.error(err.response?.data?.message || "Failed to fetch user");
    } finally {
      setLoading(false);
    }
  };

  const login = async ({ email, password }) => {
    setLoading(true);
    setError(null);
    try {
      const res = await axiosInstance.post(
        API.AUTH.LOGIN,
        { email, password },
        { withCredentials: true }
      );
      await fetchUser();
      setLoading(false);
      return res.data;
    } catch (err) {
      setError(err.response?.data?.message || "Login Failed");
      setUser(null);
      setLoading(false);
      throw err;
    }
  };

  const signup = async ({ email, password, name }) => {
    setLoading(true);
    setError(null);
    try {
      const res = await axiosInstance.post(
        API.AUTH.SIGNUP,
        { email, password, name },
        { withCredentials: true }
      );
      await fetchUser();
      setLoading(false);
      return res.data;
    } catch (err) {
      setLoading(false);
      setUser(null);
      console.error("Signup error:", err);
      throw err;
    }
  };

  const logout = async () => {
    try {
      await axiosInstance.post(API.AUTH.LOGOUT, {}, { withCredentials: true });
      navigate("/")
    } catch (err) {
      console.error("Logout error:", err);
    }
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{ fetchUser, login, logout, signup, user, loading, error }}
    >
      {children}
    </AuthContext.Provider>
  );
};
