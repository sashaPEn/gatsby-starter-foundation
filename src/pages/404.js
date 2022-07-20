import React from "react"
import { Link } from "gatsby"
import { RiArrowLeftSLine, RiBugLine, RiSkullLine } from "react-icons/ri"

import Seo from "../components/seo"
import Layout from "../components/layout"

const NotFound = () => (
  <Layout className="not-found-page">
    <Seo title="Страница не найдена" />
    <div
      className="wrapper"
      style={{
        textAlign: "center",
      }}
    >
      <header>
        <RiSkullLine
          style={{
            fontSize: "128px",
            color: "var(--primary-color)",
          }}
        />
        <h1>Что-то не так! Страница не найдена...</h1>
        <p>
        В мире есть очень много страница и мы думаем вы найдете нужную
        </p>
      </header>
      <Link to="/" className="button">
        <RiArrowLeftSLine className="icon -left" />
        Вернуться назад
      </Link>
      <Link to="/contact" className="button -outline">
         Сообщить об этой ошибке <RiBugLine className="icon -right" />
      </Link>
    </div>
  </Layout>
)

export default NotFound
