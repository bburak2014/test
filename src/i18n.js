import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      Welcome: "Welcome",
      Error: "Error",
      Loading: "Loading",
      Email: "Email",
      Password: "Password",
      Login: "Login",
      user_list: "Users List",
      logout: "Logout",
    },
  },
  tr: {
    translation: {
      Welcome: "Hoşgeldiniz",
      Error: "Hata",
      Loading: "Yükleniyor",
      Email: "E-posta",
      Password: "Sifre",
      Login: "Giriş",
      user_list: "Kullanıcı Listesi",
      logout: "Çıkış",

    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("lang") || "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
