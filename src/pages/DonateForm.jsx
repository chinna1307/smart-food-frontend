import { useParams } from 'react-router-dom'
import { useState } from 'react'

const orders = [
  { id: '1', name: 'Geetha Residency' },
  { id: '2', name: 'Sri Lakshmi Function Hall' },
  { id: '3', name: 'Sai Baba Trust' },
  { id: '4', name: 'Green Palace Residency' }
]

export default function DonateForm(){
  const { id } = useParams()
  const order = orders.find(o => o.id === id)

  const [food, setFood] = useState('')
  const [qty, setQty] = useState('')
  const [msg, setMsg] = useState('')

  return (
    <div style={{minHeight:'100vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
      <div style={{background:'#1f2933',padding:40,borderRadius:10,width:320}}>
        <h2>{order?.name}</h2>

        <input
          placeholder='Food name'
          value={food}
          onChange={e=>setFood(e.target.value)}
          style={{width:'100%',margin:'10px 0',padding:10}}
        />

        <input
          placeholder='Food quantity'
          value={qty}
          onChange={e=>setQty(e.target.value)}
          style={{width:'100%',margin:'10px 0',padding:10}}
        />

        <button onClick={()=>setMsg('Donation submitted!')} style={{width:'100%'}}>
          Submit
        </button>

        {msg && <p style={{marginTop:10,color:'#22c55e'}}>{msg}</p>}
      </div>
    </div>
  )
}
