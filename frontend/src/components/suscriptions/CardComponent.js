import React from 'react'
import { Dropdown, Button, Divider } from 'react-materialize'

export default function CardComponent({
  _id,
  name,
  period,
  paymentDate,
  subscription,
  handleDelete,
  planSelected
}) {
  return (
    <div>
      <ul
        className="collection"
        style={{ border: `1px solid ${subscription.color}` }}
      >
        <li className="collection-item avatar">
          <img src={subscription.imageURL_color} alt="" className="circle" />
          <p style={{ textAlign: 'left' }} className="title">
            {name}
          </p>
          <p style={{ textAlign: 'left' }}>{period}</p>
          <p style={{ textAlign: 'left' }}>{paymentDate}</p>
          <p style={{ textAlign: 'left' }}>{planSelected.price}</p>
          <div className="secondary-content">
            <i className="material-icons">more_vert</i>
          </div>
          <div onClick={() => handleDelete(_id)} className="secondary-content">
            <i className="material-icons">delete</i>
          </div>
        </li>
      </ul>
    </div>
  )
}
