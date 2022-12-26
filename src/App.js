import "./styles.css";
import React, { useState } from "react";
import data from "./components/data";
import LanguageArray from "./components/LanguageArray";

export default function App() {
  const [userData, setuserData] = useState(data);
  const [pagination, setpagination] = useState(1);
  const [startDate, setStartDate] = useState("1-1-1970");
  const [finalDate, setFinalDate] = useState("12-12-33658");
  const totalPages = userData.length / 100;
  const dateFormator = function (date) {
    let a = date.split("/");
    let b = [a[2], a[0], a[1]];
    return b.join("-");
  };

  const country = LanguageArray(userData);
  console.log(country);
  const pageData = userData.slice((pagination - 1) * 100, pagination * 100);
  const pageButton = [];
  if (pageButton !== []) {
    for (let p = 0; p < totalPages; p++) {
      pageButton.push(
        <button
          style={{
            backgroundColor: `${pagination === p + 1 ? "lightgrey" : "grey"}`
          }}
          onClick={() =>
            setpagination(
              p < totalPages && pagination <= totalPages ? p + 1 : p
            )
          }
        >
          {p + 1}
        </button>
      );
    }
  }

  return (
    <div className="App">
      <div class="navigation">
        <input
          type="date"
          onChange={(input) => setStartDate(input.target.value)}
        ></input>
        <input
          type="date"
          onChange={(input) => setFinalDate(input.target.value)}
        ></input>
      </div>
      <div className="users">
        {country.map((country) =>
          pageData
            .filter(function (obj) {
              return obj.country === country;
            })
            .map((animal) =>
              Date.parse(dateFormator(animal.date)) > Date.parse(startDate) &&
              Date.parse(dateFormator(animal.date)) < Date.parse(finalDate) ? (
                <div className="block">
                  <div>{country}</div>
                  <div>{animal.first_name}</div>
                  <div>{animal.last_name}</div>
                  <div>{animal.ip_address}</div>
                  <div>{animal.email}</div>
                  <div>{animal.gender}</div>
                  <div>{animal.date}</div>
                  <div>{animal.country}</div>
                </div>
              ) : (
                console.log("not available")
              )
            )
        )}
      </div>
      <div className="button_container">{pageButton.map((page) => page)}</div>
    </div>
  );
}
