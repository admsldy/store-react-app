import type { ChangeEvent } from "react";
import type { SelectOption } from "../data/mockData.ts";

interface SelectFieldProps {
  id: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  options: SelectOption[];
  required?: boolean;
}
const SelectField = ({
    id,
    value,
    onChange,
    options,
    required = true,
    }: SelectFieldProps   ) => {
  return (
      <div className='form-group'>
        <label className='form-label' htmlFor='category'>{id.charAt(0).toUpperCase() + id.slice(1)}</label>
        <select
            className='form-control'
            id={id}
            value={value}
            onChange={onChange}
            required={required} >
          {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
          ))}
        </select>
      </div>
  )
}

export default SelectField  