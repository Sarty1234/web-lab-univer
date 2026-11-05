



export default function FormErrorComponent({ errors, submitCount }) {
  if (submitCount === 0 || Object.keys(errors).length === 0) {
    return null;
  }

  
  const fieldNames = {
    name: "Ім'я",
    surname: "Прізвище",
    email: "Електронна пошта",
    phone: "Номер телефону",
    payer: "Замовник",
    message: "Повідомлення"
  };

  return (
    <div className="alert alert-danger mb-4 shadow-sm" role="alert">
      <h5 className="alert-heading fs-6 fw-bold mb-2">
        Виправте помилки у замовленні:
      </h5>
      <ul className="mb-0 ps-3">
        {Object.keys(errors).map((fieldKey) => (
          <li key={fieldKey} className="small">
            <strong>{fieldNames[fieldKey] || fieldKey}:</strong> {errors[fieldKey]}
          </li>
        ))}
      </ul>
    </div>
  );
}


