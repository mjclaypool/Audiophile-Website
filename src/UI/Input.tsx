type inputProps = {
  type: string,
  id: string,
  name: string,
  value: string,
  placeholder: string,
  labelStyle: string
  inputStyle: string,
  error: boolean,
  errorMsg: string,
  didEdit: () => void,
  didChange: (id: string, name: string, value: string) => void
}

const Input = ( props: inputProps ) => {

  function handleInputBlur() {
    props.didEdit();
  }

  function handleChange(e: any) {
    props.didChange( e.target.id, e.target.name, e.target.value )
  }

  return (
    <>
      {props.error ?
        <div className="flex flex-col md:flex-1 mb-6 md:mb-0">
          <div className="flex justify-between">
            <label htmlFor={props.id} className={`${props.labelStyle} text-p-error-red`}>{props.name}</label>
            <p className="text-[12px] font-medium text-p-error-red">{props.errorMsg}</p>
          </div>
          <input
            type={props.type}
            id={props.id}
            name={props.id}
            value={props.value}
            placeholder={props.placeholder}
            className={`${props.inputStyle} border-2 border-p-error-red focus:border-p-error-red`}
            onChange={handleChange}
            onBlur={handleInputBlur}
          />
        </div>
      :
        <div className="flex flex-col md:flex-1 mb-6 md:mb-0">
          <label htmlFor={props.id} className={props.labelStyle}>{props.name}</label>
          <input
            type={props.type}
            id={props.id}
            name={props.id}
            value={props.value}
            placeholder={props.placeholder}
            className={`${props.inputStyle}`}
            onChange={handleChange}
            onBlur={handleInputBlur}
          />
        </div>
      }
    </>
  )
}

export default Input;