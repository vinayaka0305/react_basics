import React from 'react'

const Form = ({handleSubmit,newItem,setItem}) => {
  return (
    <div>
        <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">new item</label>
          <input
            type="text"
            id="item"
            value={newItem}
            onChange={(e) => setItem(e.target.value)}
          />
        </div>
        <button className="btn">Add</button>
      </form>
    </div>
  )
}

export default Form