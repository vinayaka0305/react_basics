import React from "react";
import useFetch from "./useFetch";

const ExamaPle = ({ query }) => {
  const data = useFetch("https://jsonplaceholder.typicode.com/users");
  console.log(query);
  console.log(data);

  return (
    <>
      {data
        .filter((val) => val.name.toLowerCase().includes(query))
        .map((val, index) => {
          return (
            <p key={val.id}>
              {val.id} {val.name}
            </p>
          );
        })}
    </>
  );
};

export default ExamaPle;
