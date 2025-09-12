import React from "react";

function TodoItem1() {
  let todoName = "Go for Running at 5:30 am";
  let todoDate = "09/09/2025";
  return (
    <>
      <div class="row">
        <div class="col-6">{todoName}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default TodoItem1;
