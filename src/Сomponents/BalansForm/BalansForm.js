import { Link } from "react-router-dom";
import { useState } from "react";
import ConfirmBtn from "../Buttons/ConfirmBtn/ConfirmBtn.js";
import imageChart from "../../images/other/bar_chart.svg";
import s from "./balansForm.module.css";

export default function BalansForm() {
  const uan = "UAH";
  const [balans, setBalans] = useState("00.00");
  /*
   * Отвечает за обновление состояния
   */
  const handleChange = (e) => {
    setBalans(e.target.value);
  };

  /*
   * Вызывается при отправке формы
   */
  function handleSubmit(evt) {
    evt.preventDefault();
    console.log(`Отправляем баланс: ${balans}`);

    // Проп который передается форме для вызова при сабмите
    // this.props.onSubmit(balans);
  }

  return (
    <div className={s.field}>
      <form className={s.form} onSubmit={handleSubmit}>
        <label>
          <span className={s.labelText}>Баланс:</span>
          <input
            type="text"
            className={s.inputField}
            placeholder="баланс"
            value={balans}
            onChange={handleChange}
          />
        </label>
        <p className={s.uan}>{uan}</p>
        <ConfirmBtn />
      </form>
      <Link
        className={s.link}
        to={{
          pathname: "/reportview",
          //   search: "?category=adventure",
          //   hash: "#treasure-island",
          state: { from: "/homeview" },
        }}
      >
        <div className={s.linkfield}>
          <span className={s.linkText}>Перейти к отчетам</span>
          {/* <img src={imageChart} alt="link to charts" className={s.charts} /> */}
          <svg
            className={s.charts}
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5 9.2h3V19H5V9.2zM10.6 5h2.8v14h-2.8V5zm5.6 8H19v6h-2.8v-6z" />
          </svg>
        </div>
      </Link>
    </div>
  );
}
