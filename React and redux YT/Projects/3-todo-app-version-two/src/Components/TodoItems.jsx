import React from "react";

function TodoItems({ items }) {
  return (
    <div className="items-container">
      {items.map((item, index) => (
        <div key={index} className="row">
          <div className="col-6">{item.name}</div>
          <div className="col-4">{item.dueDate}</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoItems;
