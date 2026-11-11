


import axios from 'axios';
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import FormErrorComponent from '../components/SubmitRequestPage/FormErrorComponent';
import { useNavigate } from 'react-router-dom';


const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Занадто коротке')
    .max(50, 'Занадто довге')
    .required("Ім'я є обов'язковим полем."),
  surname: Yup.string()
    .min(2, 'Занадто коротке')
    .max(50, 'Занадто довге')
    .required("Прізвище є обов'язковим полем."),
  countries: Yup.number()
    .typeError("Це поле має бути числом.")
    .min(1, "Значення має бути більшим за 0.")
    .positive("Кількість має бути більшою за нуль."),
  email: Yup.string()
    .email("Електронна пошта вказана неправильно.")
    .required("Електронна пошта є обов'язковою."),
  phone: Yup.string().matches(/^\+?3?8?0\d{9}$/, "Номер телефону має бути у форматі +380XXXXXXXXX або 0XXXXXXXXX.").required("Номер телефону є обов'язковим полем."),
  payer: Yup.string().required(),
  message: Yup.string(),
});

export default function SubmitRequestPage() {
  
  const navigate = useNavigate();


  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      countries: 1,
      email: '',
      phone: '',
      payer: 'Фізична особа',
      message: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      const apiUrl = process.env.REACT_APP_API_URL;
      const orderAPIUrl = process.env.REACT_APP_API_ORDER_URI;
      const requestUrl = apiUrl + orderAPIUrl;

      try {
        const response = await axios.post(requestUrl, values);
        const isSuccess = response.status >= 200 && response.status < 300 ? true : false;
        // isSuccess = true;

        if (isSuccess) {
          console.log("Дані успішно надіслано:", isSuccess);
          navigate('/order-success');
        }
      } catch (error) {
        console.error("Помилка при відправці:", error);
        alert("Не вдалося надіслати замовлення. Спробуйте пізніше.");
      }
    },
  });

  return (
    <div className="card bct-float border-0 container py-5">
      <div className="card-body p-4">
        <h1 className="mb-4">Оформити замовлення</h1>

        <FormErrorComponent 
          errors={formik.errors} 
          submitCount={formik.submitCount} 
        />
        
        <form 
          className={`row g-3 bct-float-form`} 
          noValidate 
          onSubmit={formik.handleSubmit}
        >
          <div className="col-sm-6">
            <div className="form-floating">
              <input
                type="text"
                className={`form-control ${formik.touched.name && formik.errors.name ? 'is-invalid' : ''}`}
                id="bct-float-name"
                placeholder="Ім'я"
                autoComplete="given-name"
                {...formik.getFieldProps('name')}
              />
              <label htmlFor="bct-float-name">Ім'я</label>
              <div className="invalid-feedback">{formik.errors.name}</div>
            </div>
          </div>


          <div className="col-sm-6">
            <div className="form-floating">
              <input
                type="text"
                className={`form-control ${formik.touched.surname && formik.errors.surname ? 'is-invalid' : ''}`}
                id="bct-float-surname"
                placeholder="Прізвище"
                autoComplete="family-name"
                {...formik.getFieldProps('surname')}
              />
              <label htmlFor="bct-float-surname">Прізвище</label>
              <div className="invalid-feedback">{formik.errors.surname}</div>
            </div>
          </div>


          <div className="col-sm-6">
            <div className="form-floating">
              <input
                type="text"
                className={`form-control ${formik.touched.countries && formik.errors.countries ? 'is-invalid' : ''}`}
                id="bct-float-countries"
                placeholder="Скільки держав плануєте відвідати"
                autoComplete="family-name"
                {...formik.getFieldProps('countries')}
              />
              <label htmlFor="bct-float-surname">Скільки держав плануєте відвідати</label>
              <div className="invalid-feedback">{formik.errors.countries}</div>
            </div>
          </div>


          <div className="col-sm-6">
            <div className="form-floating">
              <input
                type="email"
                className={`form-control ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`}
                id="bct-float-email"
                placeholder="name@example.com"
                autoComplete="email"
                {...formik.getFieldProps('email')}
              />
              <label htmlFor="bct-float-email">Електронна пошта</label>
              <div className="invalid-feedback">{formik.errors.email}</div>
            </div>
          </div>


          <div className="col-sm-6">
            <div className="form-floating">
              <input
                type="text"
                className={`form-control ${formik.touched.phone && formik.errors.phone ? 'is-invalid' : ''}`}
                id="bct-float-phone"
                placeholder="телефон"
                autoComplete="tel"
                {...formik.getFieldProps('phone')}
              />
              <label htmlFor="bct-float-phone">Номер телефону</label>
              <div className="invalid-feedback">{formik.errors.phone}</div>
            </div>
          </div>


          <div className="col-12">
            <div className="form-floating">
              <select
                className="form-select"
                id="bct-float-payer"
                {...formik.getFieldProps('payer')}
              >
                <option value="Фізична особа">Фізична особа</option>
                <option value="Юридична особа">Юридична особа</option>
              </select>
              <label htmlFor="bct-float-payer">Замовник</label>
            </div>
          </div>


          <div className="col-12">
            <div className="form-floating">
              <textarea
                className="form-control bct-float-msg"
                id="bct-float-msg"
                placeholder="Ваші побажання"
                style={{ fieldSizing: "content", resize: "none", minHeight: "120px" }}
                {...formik.getFieldProps('message')}
              />
              <label htmlFor="bct-float-msg">Ваші побажання</label>
            </div>
          </div>


          <div className="col-12 d-flex flex-wrap align-items-center gap-3">
            <button type="submit" className="btn hover-shadow" style={{
                  background: 'rgb(66, 66, 66)',
                  color: '#ffffff',
                  fontSize: '18px',
                  padding: '10px 20px',
                  borderRadius: '16px',
                  fontWeight: 'bold',
                  border: 'none',
                }}>
              Підтвердити замовлення 
            </button>
            <span className="small text-body-secondary">З Вами зв'яжуться протягом 3-ох робочих днів</span>
          </div>
        </form>

        <p className="bct-float-status small mt-3 mb-0" role="status" />
      </div>
    </div>
  );
}


