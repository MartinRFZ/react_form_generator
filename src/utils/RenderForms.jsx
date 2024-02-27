import { RenderField } from './RenderField.jsx'

export const RenderForm = (fields, index) => (
  <form key={index}>{fields.map((field) => RenderField(field))}</form>
)
