// Importing necessary styles and components
import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ContactMeStyle from './ContactMe.module.css';

export default function ContactMe() {
  const validationSchema = Yup.object({
    name: Yup.string().required('Le nom est requis'),
    email: Yup.string()
      .required('L\'email est requis')
      .matches(
        /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        'L\'adresse email est invalide. Veuillez saisir une adresse email valide.'
      ),
    phone: Yup.string()
      .required('Le numéro de téléphone est requis')
      .matches(
        /^[0-9]{10}$/,
        'Le numéro de téléphone n\'est pas valide. Veuillez saisir un numéro de téléphone à 10 chiffres.'
      ),
    message: Yup.string().required('Le message est requis'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main className="pt-5 mt-5">
        <section className="py-5">
          <div className="container px-5">
            <div className={`${ContactMeStyle['bg-cont']} rounded-4 py-5 px-4 px-md-5`}>
              <div className="text-center mb-5">
                <div className={`${ContactMeStyle['feature']} ${ContactMeStyle['bg-gradient-primary-to-secondary']} bg-primary text-white rounded-3 mb-3`}>
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <h1 className="fw-bolder">Prenez contact</h1>
                <p className={`${ContactMeStyle['lead']} fw-normal mb-0}`}>Travaillons ensemble !</p>
              </div>

              <div className="row gx-5 justify-content-center">
                <div className="col-lg-8 col-xl-6">
                  <form onSubmit={formik.handleSubmit}>
                    <div className={`form-floating mb-3 ${formik.touched.name && formik.errors.name ? 'has-invalid' : 'has-valid'}`}>
                      <input
                        className={`form-control ${formik.touched.name && formik.errors.name ? 'is-invalid' : ''} ${formik.touched.name && !formik.errors.name ? 'is-valid' : ''}`}
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Entrez votre nom..."
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.name && formik.errors.name && (
                        <div className="invalid-feedback">{formik.errors.name}</div>
                      )}
                      {formik.touched.name && !formik.errors.name && (
                        <div className="valid-feedback">Valide</div>
                      )}
                      <label htmlFor="name">Nom complet</label>
                    </div>

                    <div className={`form-floating mb-3 ${formik.touched.email && formik.errors.email ? 'has-invalid' : 'has-valid'}`}>
                      <input
                        className={`form-control ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''} ${formik.touched.email && !formik.errors.email ? 'is-valid' : ''}`}
                        id="email"
                        type="email"
                        name="email"
                        placeholder="exemple@adresse.com"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.email && formik.errors.email && (
                        <div className="invalid-feedback">{formik.errors.email}</div>
                      )}
                      {formik.touched.email && !formik.errors.email && (
                        <div className="valid-feedback">Valide</div>
                      )}
                      <label htmlFor="email">Adresse email</label>
                    </div>

                    <div className={`form-floating mb-3 ${formik.touched.phone && formik.errors.phone ? 'has-invalid' : 'has-valid'}`}>
                      <input
                        className={`form-control ${formik.touched.phone && formik.errors.phone ? 'is-invalid' : ''} ${formik.touched.phone && !formik.errors.phone ? 'is-valid' : ''}`}
                        id="phone"
                        type="tel"
                        name="phone"
                        placeholder="(123) 456-7890"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.phone && formik.errors.phone && (
                        <div className="invalid-feedback">{formik.errors.phone}</div>
                      )}
                      {formik.touched.phone && !formik.errors.phone && (
                        <div className="valid-feedback">Valide</div>
                      )}
                      <label htmlFor="phone">Numéro de téléphone</label>
                    </div>

                    <div className={`form-floating mb-3 ${formik.touched.message && formik.errors.message ? 'has-invalid' : 'has-valid'}`}>
                      <textarea
                        className={`form-control ${formik.touched.message && formik.errors.message ? 'is-invalid' : ''} ${formik.touched.message && !formik.errors.message ? 'is-valid' : ''}`}
                        id="message"
                        type="text"
                        name="message"
                        placeholder="Saisissez votre message ici..."
                        value={formik.values.message}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      ></textarea>
                      {formik.touched.message && formik.errors.message && (
                        <div className="invalid-feedback">{formik.errors.message}</div>
                      )}
                      {formik.touched.message && !formik.errors.message && (
                        <div className="valid-feedback">Valide</div>
                      )}
                      <label htmlFor="message">Message</label>
                    </div>

                    <div className="d-grid">
                      <button className="btn btn-primary btn-lg" id="submitButton" type="submit">
                        Envoyer
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
