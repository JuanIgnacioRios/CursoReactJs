import React from 'react'
import {useState } from "react"
import './Checkout.css'

export const CheckOut = () => {
    const [formData, setFormData] = useState({name: '', email: '', address: ''})
    const [errors, setErrors] = useState({})

    const validateForm = () => {
        let newErrors = {}
        let isValid = true
    
        if (!formData.name) {
            newErrors.name = 'El campo name es obligatorio'
            isValid= false
        }
        if (!formData.email) {
            newErrors.email = 'El campo email es obligatorio'
            isValid= false
        }
        if (!formData.address) {
            newErrors.address = 'El campo direccion es obligatorio'
            isValid= false
        }
            setErrors(newErrors)
            return isValid
    }

    const handleOnChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const HandleOnSubmit = (e) => {
        e.preventDefault();
        if (validateForm()){
            alert('Gracias '+formData.name+' Su Orden de compra ha sido confirmada! ')
        }
    }


  return (
    <div className='Form-container'>
        <form onSubmit={HandleOnSubmit}>
            <input type="text" name="name" id="name" onChange={handleOnChange} placeholder='Ingrese su nombre' value= {formData.name} />
            {errors && errors.name && <span>{errors.name}</span>}
            <input type="email" name="email" id="email"onChange={handleOnChange}  placeholder='Ingrese su email' value= {formData.email}/>
            {errors && errors.email && <span>{errors.email}</span>}
            <input type="address" name="address" id="address"onChange={handleOnChange}  placeholder='Ingrese su direccion' value= {formData.address}/>
            {errors && errors.address && <span>{errors.address}</span>}
            <button>Enviar</button>
        </form>
    </div>
  )
}
