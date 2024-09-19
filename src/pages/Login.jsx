import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginValidate } from "../slices/authSlice";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Layout from "../Layout";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { loading, error } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const isDisabled = loading || !credentials.email || !credentials.password;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginValidate(credentials));
    navigate("/");
  };

  if (loading) {
    return <p>{t("Loading")}...</p>;
  }

  if (error) {
    return (
      <p>
        {t("Error")}: {error}
      </p>
    );
  }
  return (
    <Layout>
      <div className="flex flex-col min-h-screen bg-gray-100 gap-5 p-5 justify-center items-center">
        <h1 className="text-3xl">{t("Welcome")}</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 max-w-sm w-full"
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="email">{t("Email")}:</label>
            <input
              id="email"
              type="email"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              required
              className="p-2 border border-gray-300 rounded"
              autoComplete="off"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password">{t("Password")}:</label>
            <input
              id="password"
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              required
              className="p-2 border border-gray-300 rounded"
              autoComplete="off"
            />
          </div>
          <button
            className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
            disabled={isDisabled}          >
            {t("Login")}
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
