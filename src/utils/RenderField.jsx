// renderiza los campos del formulario por tipo
export const RenderField = (fields) => {
  const { field } = fields

  switch (field.type) {
    case 'text':
      return (
        <div key={field.id}>
          <input
            id={field.id}
            className={field.class}
            label={field.label}
            type={field.type}
            data={field.data}
            mask={field.mask}
            placeholder={field.placeholder}
            required={field.required}
            name={field.name}
          />
          {/* <InputExample /> */}
        </div>
      )
    case 'email':
      return (
        <div key={field.id}>
          <input
            id={field.id}
            className={field.class}
            label={field.label}
            type={field.type}
            data={field.data}
            mask={field.mask}
            placeholder={field.placeholder}
            required={field.required}
            name={field.name}
          />
        </div>
      )
    case 'password':
      return (
        <div key={field.id}>
          <input
            id={field.id}
            className={field.class}
            label={field.label}
            type={field.type}
            data={field.data}
            mask={field.mask}
            placeholder={field.placeholder}
            required={field.required}
            name={field.name}
          />
        </div>
      )
    case 'date':
      return (
        <div key={field.id}>
          <input
            id={field.id}
            className={field.class}
            label={field.label}
            type={field.type}
            data={field.data}
            mask={field.mask}
            placeholder={field.placeholder}
            required={field.required}
            name={field.name}
          />
        </div>
      )
    case 'checkbox':
      return (
        <div key={field.id}>
          <input
            id={field.id}
            className={field.class}
            label={field.label}
            type={field.type}
            required={field.required}
            name={field.name}
            optionindex={field.optionindex}
            defaultChecked={field.defaultChecked}
          />
        </div>
      )
    default:
      return null
  }
}
