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
    <Accordion>
      <Card style={{ marginBottom: "5px" }}>
        <Accordion.Toggle
          as={Card.Header}
          eventKey="0"
          className="hover"
          id="card"
          style={{
            minHeight: "110px",
            display: "flex",
            paddingTop: "0px",
            paddingBottom: "0px",
            paddingLeft: "0px",

            backgroundColor: "#ffff",
          }}
        >
          <div className="image  px-0 py-0 d-none d-md-block">
            <div style={imageStyle} className="  text-center">
              <span
                style={{
                  color: "lightGray",
                  fontSize: "26px",
                }}
              >
                {imageLetters}
              </span>
            </div>
          </div>

          <div className="job-info ml-3 mt-4">
            <h5 style={{ marginBottom: "0px", fontSize: "21px" }}>
              <strong>{title}</strong>
            </h5>
            <p
              style={{
                fontSize: "16px",
                marginTop: "7px",
                marginBottom: "2px",
              }}
            >
              <strong>{company}</strong>

              <span style={{ color: "#6e6e6e", marginLeft: "12px" }}>
                <strong>{date}</strong>
              </span>
            </p>
          </div>

          <div
            className="job-categories  flex-row d-none d-md-block  ml-auto my-auto"
            style={{ paddingRight: "10px" }}
          >
            <span className="ml-auto">{categories.slice(0, 3)}</span>
          </div>

          <div className="apply ml-auto my-auto">
            <p className="mt-4 mr-4" style={{ fontSize: "13px" }}>
              <a
                className="btn btn-primary"
                href={`${link}`}
                target="_blank"
                style={btnStyle}
              >
                Apply
              </a>
            </p>
          </div>
        </Accordion.Toggle>

        <Accordion.Collapse eventKey="0">
          <Card.Body style={{ fontSize: "20px", padding: "5%" }}>
            <div dangerouslySetInnerHTML={{ __html: description }}></div>
            <div className="source mt-3">
              <strong> Source: {source}</strong>
            </div>
            <div>
              <a
                className="btn btn-lg btn-primary form-control mt-4"
                style={{
                  backgroundColor: "#b666d2",
                  border: "1px solid #b666d2",
                }}
                target="_blank"
                href={`${link}`}
              >
                Apply
              </a>
            </div>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
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
