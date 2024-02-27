import { useState, useEffect } from 'react'
import { RenderField } from '../utils/RenderField.jsx'
import { RenderForm } from '../utils/RenderForms.jsx'
import miJSON from '../../forms.json'

export function DynamicForm() {
  const [formFields, setFormFields] = useState([])
  const [readData, setReadData] = useState(null)
  const [savedData, setSavedData] = useState(null)
  const [deleteData, setDeleteData] = useState(false)

  useEffect(() => {
    getDataFetch()
  }, [savedData, deleteData])

  const getDataFetch = () => {
    fetch('http://localhost:3000/read-form')
      .then((response) => response.json())
      .then((data) => {
        setReadData(data)
      })
      .catch((error) => console.error('Error:', error))
  }

  const deleteDataFetch = (id) => {
    setDeleteData(false)
    fetch(`http://localhost:3000/delete-form/${id}`, {
      method: 'DELETE'
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error al eliminar el registro en la BD')
        }
        if (response.status === 204) {
          setDeleteData(true)
        } else {
          return response.json()
        }
      })
      .catch((error) => console.error(error.message))
  }

  const handleSubmit = () => {
    fetch('http://localhost:3000/create-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(miJSON)
    })
      .then((response) => response.json())
      .then((data) => setSavedData(data))
      .catch((error) => console.error('Error:', error))
  }

  const handleDelete = (id) => {
    deleteDataFetch(id)
  }

  useEffect(() => {
    const fields = miJSON?.data?.map((data) => data.section) ?? [] // extrallendo los campos del json si existen y su no
    setFormFields(fields)
  }, [miJSON]) // se ejecuta cada vez que el json cambia

  return (
    <div className='form-container' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
      <div className='form-creation-box' style={{ width: '50%', paddingRight: '20px' }}>
        {formFields.map((section, index) => RenderForm(section.fields, index))}
        <button onClick={handleSubmit}>Guardar</button>
      </div>
      <div className='form-display-box' style={{ width: '50%', paddingLeft: '20px', borderLeft: '2px solid #ccc' }}>
        {readData?.forms?.map((form) => (
          <div key={form._id} className='form-obtained'>
            {form?.data?.map((data, index) =>
              RenderForm(data?.section?.fields, index)
            )}
            <button onClick={() => handleDelete(form._id)}>Borrar</button>
          </div>
        ))}
      </div>
    </div>
  )
}
