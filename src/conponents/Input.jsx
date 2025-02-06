import React from "react";
import { useState } from "react";


export default function Input({ className, InputLabel, type, placeholder, onChange }) {

  return (
    <section className={className}>
      <label htmlFor="name">{InputLabel}</label>
      <input type={type} name="" id="name" onChange={onChange}  placeholder={placeholder} />
    </section>
  );
}
