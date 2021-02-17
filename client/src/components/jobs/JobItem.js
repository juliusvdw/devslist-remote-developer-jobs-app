import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const JobItem = ({ job }) => {
  let { link, title, categories, date, description, company, source } = job;

  //manipulate categories display

  categories = categories.map((cat) => {
    return (
      <span
        className="badge  badge-light my-1 mx-1  "
        style={{ fontSize: "13.5px", border: "1px solid black" }}
      >
        <strong>{cat}</strong>
      </span>
    );
  });

  //manipulate title
  if (title.split(" ").indexOf("at") !== -1) {
    title = title.split(" ").slice(0, title.split(" ").indexOf("at")).join(" ");
  }

  if (title.indexOf("()") !== -1) {
    title = title.slice(0, title.indexOf("()"));
  }

  //manipulate image letters
  let imageLetters = ` ${company[0][0]}`;

  //Manipulate company name
  company.indexOf("(") !== -1
    ? (company = company.slice(0, company.indexOf("(")))
    : (company = company);

  //Manipulate date
  let now = new Date().toISOString();
  let months = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Oct",
    "Nov",
    "Dev",
  ];

  console.log(date);
  console.log(now);
  if (date.slice(0, date.indexOf("T")) === now.slice(0, now.indexOf("T"))) {
    date = "Today";
  } else {
    date = date.slice(0, date.indexOf("T"));
    date = date.split("-");

    date = `Posted on ${date[1]}/ ${date[2]}`;
  }

  return (
    <div className="card">
      <h1>testing</h1>
    </div>
  );
};

const imageStyle = {
  height: "100%",
  width: "100px",
  backgroundColor: "white",
  paddingTop: "26px",
};

const cardStyle = {
  backgroundColor: "#ffff",
};

const btnStyle = {
  width: "120px",
  backgroundColor: "#b666d2",
  border: "1px solid #b666d2",
};

export default JobItem;
