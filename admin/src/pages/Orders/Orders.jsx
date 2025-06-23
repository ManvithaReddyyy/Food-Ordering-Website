import { useState } from 'react'
const token = localStorage.getItem('token')
import './Orders.css'
import axios from 'axios'
import { toast } from'react-toastify'
import { useEffect } from 'react'
import { assets } from '../../assets/assets'

const Orders = ({url}) => {
  const [orders, setOrders] = useState([])

  const fetchAllOrders = async () => {
    const response = await axios.get(url + '/api/order/admin')

    if (response.data.success) {
      setOrders(response.data.data)
      console.log(response.data.data)
    } else {
      toast.error('Error getting orders')
    } 
  }

  const statusHandler = async (e, orderId) => {
    const response = await axios.post(url + '/api/order/status', {
  orderId,
  status: e.target.value
}, {
  headers: {
    Authorization: `Bearer ${token}`
  }
})


    if (response.data.success) {
      await fetchAllOrders()
    }
  }

  useEffect(() => {
    fetchAllOrders()
  }, [])
  return (
    <div className='order add'>
      <h3>Order Page</h3>
      <div className='order-list'>
        {
          orders.map((order, index) => (
            <div key={index} className='order-item'>
              <img src={assets.parcel_icon} alt='Parcel Icon' />
              <div>
                <p className='order-item-food'>
                  {
                    order.items.map((item, index) => {
                      if (index === order.items.length - 1) {
                        return item.name + ' x ' + item.quantity
                      } else {
                        return item.name + ' x ' + item.quantity + ', '
                      }
                    })
                  }
                </p>
                <p className='order-item-name'>Address:</p>
                <div className='order-item-address'>
                  <p>{order.address}</p>
                </div>

              </div>
              <p>Items: {order.items.length}</p>
              <p>Rs.{order.amount}</p>
              <select onChange={(e) => statusHandler(e, order._id)} value={order.status}>
                <option value='Food Processing'>Food Processing</option>
                <option value='Out for Delivery'>Out for Delivery</option>
                <option value='Delivered'>Delivered</option>
              </select>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Orders