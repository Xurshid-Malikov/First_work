import React, { useEffect, useState } from "react";
import "./Sotib_ol.scss";
import { BsSearch } from "react-icons/bs";
import axios from "axios";

function Sotib_olingan_kurs() {
  const [nameList, setNameList] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=9")
      .then((response) => {
        setNameList(response.data.results);
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <main>
      <section className="hero">
        <div className="hero__sec">
          <p className="hero__text">Creative mind, creative works</p>
          <h1 className="hero__title">
            We’re <span className="hero__title__span">trading agency.</span>
          </h1>
          <div class="wrap">
            <div class="search">
              <input
                type="text"
                class="searchTerm"
                placeholder="Kursni qidirish"
                onChange={(e) => setSearch(e.target.value)}
              />
              <button type="submit" class="searchButton">
                <i class="fa fa-search">
                  <BsSearch />
                </i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="ourCourses">
        <div className="ourCourses_div">
          <span className="line">
            <hr />
          </span>
          <h2 className="title">Bizning Kurslar.</h2>
          <div className="ourCourses__card">
            {nameList
              .filter((item) => {
                if (search === "") {
                  return item;
                } else if (
                  item.name.toLowerCase().includes(search.toLowerCase())
                ) {
                  return item;
                }
              })
              .map((item) => {
                return (
                  <ul className="ourCourses__car" key={item.name}>
                    <li>
                      <h3 className="ourCorses__title">{item.url}</h3>
                    </li>
                    <li>
                      <h3 className="ourCorses__name">{item.name}</h3>
                    </li>
                  </ul>
                );
              })}
          </div>
        </div>
      </section>
      <section className="freeCourses">
        <div className="freeCourses__div">
          <span className="line">
            <hr />
          </span>
          <h2 className="title">Bepul Kurslar.</h2>
          <p><code>wrapAround: true</code></p>
          <div
            class="gallery js-flickity"
            data-flickity-options='{ "wrapAround": true }'
          >
            <div className="gallery-cell"></div>
            <div className="gallery-cell"></div>
            <div className="gallery-cell"></div>
            <div className="gallery-cell"></div>
            <div className="gallery-cell"></div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Sotib_olingan_kurs;
