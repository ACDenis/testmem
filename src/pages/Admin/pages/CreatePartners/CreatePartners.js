import React, { useState } from 'react';
import s from './CreatePartners.module.css';
import { connect } from 'react-redux';
import { withFormik } from 'formik';
import Button from '../../../../misc/Button/Button';
import Input from '../../../../misc/Input/Input';
import { createPartnersAction } from '../../../../store/actions/partnersAction';
import { toBase64 } from '../../../../utils/utils';

const CreatePartners = ({
    values,
    handleChange,
    handleSubmit,
    setValues,
    gallery,
}) => {
  const [base64Image, setBase64Image] = useState();
    const handleImageUpload = ({ target: { files } }) => {
        const formData = new FormData();
        formData.append("gallery", files[0]);
        setValues({ ...values, gallery: formData });
        toBase64(files[0]).then(data => setBase64Image(data)).catch(e => console.error(e))
      };
  return ( <div>
    <div className={s.container}>
      <div className={s.title__container}>
        <h1 className={s.title}>Створення партнера</h1>
      </div>
      <div className={s.body}>
        <Input
          label="Назва"
          value={values.title}
          name="title"
          onChange={handleChange}
          containerClass={s.input__container}
        />
        <div className={s.input__container}>
          <div className={s.input__container}>
            <p className={s.label}>Фото</p>
            <input
              type="file"
              name="gallery"
              value={gallery}
              onChange={handleImageUpload}
            />
            <img alt={'test'} src={values.gallery[0] || base64Image} className={s.img} />
          </div>
        </div>
        <Input
          label="Ссилка"
          value={values.url}
          name="url"
          onChange={handleChange}
          containerClass={s.input__container}
          isTextarea
        />
        <div className={s.submit__container}>
          <Button
            onClick={handleSubmit}
            type="submit"
            title="Створити"
            size="lg"
          />
        </div>
      </div>
    </div>
  </div>);
};
const formikHOC = withFormik({
    mapPropsToValues: () => ({
      title: "",
      url: "",
      gallery: "",
    }),
    handleSubmit: async (values, { props: { createPartners, h } }) => {
      const newsToSubmit = {
        title: values.title,
        url: values.url,
      };
      const isSuccess = await createPartners(newsToSubmit, values.gallery);
      if (isSuccess) {
        alert("Створено");
        h.push("/admin-news")
      } else {
        alert("Помилка");
      }
    }})(CreatePartners)

const mapStateToProps = (state) => ({})
  const mapDispatchToProps = (dispatch) => ({
    createPartners: (partners, gallery) => dispatch(createPartnersAction(partners, gallery)),

  });

export default connect(mapStateToProps, mapDispatchToProps)(formikHOC);
