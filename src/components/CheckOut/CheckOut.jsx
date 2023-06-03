import React from 'react';
import { useState } from "react";
import './Checkout.css';

export const CheckOut = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', address: '' });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};
    let isValid = true;

    if (!formData.name) {
      newErrors.name = 'El campo nombre es obligatorio';
      isValid = false;
    }

    if (!formData.email) {
      newErrors.email = 'El campo email es obligatorio';
      isValid = false;
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) {
      newErrors.email = 'Por favor, ingrese un email válido';
      isValid = false;
    }

    if (!formData.phone) {
      newErrors.phone = 'El campo teléfono es obligatorio';
      isValid = false;
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = 'Por favor, ingrese un número de teléfono válido (10 dígitos)';
      isValid = false;
    }

    if (!formData.address) {
      newErrors.address = 'El campo dirección es obligatorio';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const HandleOnSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Gracias ' + formData.name + ' Su Orden de compra ha sido confirmada!');
    }
  };

  return (
    <div className='Form-container'>
      <form onSubmit={HandleOnSubmit}>
        <input type="text" name="name" id="name" onChange={handleOnChange} placeholder='Ingrese su nombre' value={formData.name} />
        {errors && errors.name && <span>{errors.name}</span>}

        <input type="email" name="email" id="email" onChange={handleOnChange} placeholder='Ingrese su email' value={formData.email} />
        {errors && errors.email && <span>{errors.email}</span>}

        <input type="text" name="phone" id="phone" onChange={handleOnChange} placeholder='Ingrese su teléfono' value={formData.phone} />
        {errors && errors.phone && <span>{errors.phone}</span>}

        <input type="text" name="address" id="address" onChange={handleOnChange} placeholder='Ingrese su dirección' value={formData.address} />
        {errors && errors.address && <span>{errors.address}</span>}

        <button>Enviar</button>
      </form>
    </div>
  );
};