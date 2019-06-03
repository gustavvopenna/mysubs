import React from 'react'

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
        style={{ border: `2px solid ${subscription.color}` }}
      >
        <li className="collection-item avatar">
          <img src={subscription.imageURL_color} alt="" className="circle" />
          <p style={{ textAlign: 'left' }} className="title">
            {name}
          </p>
          {/* <p style={{ textAlign: 'left' }}>{period}</p> */}
          <p style={{ textAlign: 'left' }}>$ {planSelected.price} | {period}</p>
          <p style={{ textAlign: 'left' }}>
            Proxima fecha de pago: {paymentDate}
          </p>
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
