import React from "react";

const InputField = ({ label, onChange, ...props }) => {
  return (
    <div className="form_group">
      {label && <label htmlFor="">{label}</label>}
      <input {...props} onChange={onChange} />
    </div>
  );
};

export default InputField;
