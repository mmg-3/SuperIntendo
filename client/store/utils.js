// takes an object and will change it to a formdata type with same k:v pairs
export const objToFormData = obj => {
  const formData = new FormData()
  Object.keys(obj).forEach(k => {
    const v = obj[k]
    formData.append(k, v)
  })
  return formData
}
