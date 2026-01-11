import type { ChangeEvent, Ref } from 'react';

interface InputFieldProps {
    id: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => void;
    placeholder: string;
    type?: string;
    required?: boolean;
    textarea?: boolean;
    ref?: Ref<HTMLInputElement>;
}
const InputField = ({
    id,
    value,
    onChange,
    placeholder,
    type = 'text',
    required = true,
    textarea = false,
    ref
}: InputFieldProps) => {
    
  return (
    <div className='form-group'>
          <label className='form-label' htmlFor={id}>{id.charAt(0).toUpperCase() + id.slice(1)}</label>
          {
              textarea ? (
                    <textarea
                        className='form-control'
                        id={id}
                        value={value}
                        onChange={onChange}
                        placeholder={placeholder}
                        required={required}
                    />
              ) : (
                      <input
                        ref={ref}   
                        className='form-control'
                        id={id}
                        type={type}
                        value={value}
                        onChange={onChange}
                        placeholder={placeholder}
                        required={required} />
                  )   
          }
              
          </div>
  )
}

export default InputField