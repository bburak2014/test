import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../slices/usersSlice";
import { logout } from "../slices/authSlice";
import Layout from "../Layout";
import { useTranslation } from "react-i18next";

const Home = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const { data, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

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
      <div className="flex flex-col min-h-screen bg-gray-100 gap-5 p-5">
        <div className="flex gap-5 justify-between items-center">
          <h2> {t("user_list")}</h2>
          <button onClick={() => dispatch(logout())}>{t("logout")}</button>
        </div>
        <ul>
          {data.map((user) => (
            <li key={user.id}>
              {user.name
                ? user.name.replace(/</g, "&lt;").replace(/>/g, "&gt;")
                : "Unknown name"}
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Home;
