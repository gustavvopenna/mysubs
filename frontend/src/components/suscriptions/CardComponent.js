import React from 'react'
import logo from '../../images/logo.png'

export default function CardComponent({
  name,
  period,
  paymentDate,
  subscription
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
          <div className="secondary-content">
            <i className="material-icons">more_vert</i>
          </div>
        </li>
      </ul>
    </div>
  )
}
