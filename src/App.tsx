import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{t("title")}</h1>
      <div>
        <select
          value={i18n.language}
          onChange={(e) => {
            i18n.changeLanguage(e.target.value);
          }}
        >
          <option value="en">English</option>
          <option value="ja">Japanese</option>
          <option value="th">Thai</option>
          <option value="zh-Hant">Chinese</option>
        </select>
      </div>
    </>
  );
}

export default App;
