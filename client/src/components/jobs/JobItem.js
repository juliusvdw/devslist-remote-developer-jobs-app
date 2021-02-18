import React, { useContext } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import JobContext from "../../context/jobs/jobContext";

const JobItem = ({ job }) => {
  const jobContext = useContext(JobContext);
  const { setActiveJob } = jobContext;
  let { link, title, categories, date, description, company, source, id } = job;

  //manipulate categories display

  categories = categories.map((cat) => {
    return (
      <span
        className="badge  badge-light mr-1
        p-2  "
        style={{
          color: "rgb(120,120,120)",
          fontSize: "11px",
          border: "0px solid black",
          borderRadius: "0px",
        }}
      >
        {cat}
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

  if (date.slice(0, date.indexOf("T")) === now.slice(0, now.indexOf("T"))) {
    date = "Today";
  } else {
    date = date.slice(0, date.indexOf("T"));
    date = date.split("-");

    date = ` ${date[1]}/ ${date[2]}`;
  }

  return (
    <div
      style={jobStyle}
      className="single-job"
      onClick={() => setActiveJob(id)}
    >
      <div className="cardTop d-flex">
        <div style={companyLetterStyle} className="p-2 text-center">
          <h6>{imageLetters}</h6>
        </div>
        <h6 className="p-2" style={companyTitleStyle}>
          {company}
        </h6>
        <h6 className="p-2" style={dateStyle}>
          {date}
        </h6>
      </div>

      <div className="card-title mt-2 mb-2">
        <h5 style={titleStyle}>{title}</h5>
      </div>

      <div className="categories mb-3 mt-3">{categories}</div>
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

const jobStyle = {
  paddingTop: "20px",
  paddingBottom: "20px",
  paddingLeft: "30px",
  paddingRight: "30px",
  borderBottom: "1px solid lightgray",
};

const companyTitleStyle = {
  fontSize: "14px",
};

const companyLetterStyle = {
  fontSize: "12 px",
  width: "30px",
  height: "30px",
  color: "rgb (220,220,220) ",
  backgroundColor: "rgb(245,245,245)",
};

const dateStyle = {
  fontSize: "10px",
  fontColor: "rgb(250,250,250)",
};

const titleStyle = {
  fontSize: "16px",
  fontWeight: "600",
};

export default JobItem;
