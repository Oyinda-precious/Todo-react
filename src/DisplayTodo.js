import React from "react";

const DisplayTodo = (props) => {
  const { arr } = props;
  console.log("props from App component", arr);
  return (
    <>
      <h1>Display Todo List</h1>
      {arr.map((ele, index) => (
        <div className="d-flex" key={index}>
          <div className="m-1">{ele.title}</div>
          <div className="m-1">{ele.content}</div>
          <button
            className="btn btn-danger m-1"
            onClick={() => {
              //   handleDelete(index);
            }}
          >
            Delete
          </button>
          <button
            className="btn btn-warning m-1"
            // onClick={() => handleEdit(ele, index)}
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Edit
          </button>
        </div>
      ))}
    </>
  );
};

export default DisplayTodo;
