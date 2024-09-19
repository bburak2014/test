import LanguageChanger from "./components/LanguageChanger";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <main className="flex flex-col gap-10">
      <LanguageChanger />
      {children}
    </main>
  );
};
export default Layout;
