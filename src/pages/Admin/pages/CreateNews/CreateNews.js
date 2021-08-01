import React, { useState } from "react";
import s from "./CreateNews.module.css";
import { connect } from "react-redux";
import Input from "../../../../misc/Input/Input";
import Button from "../../../../misc/Button/Button";
import { withFormik } from "formik";
import { createNewsAction } from "../../../../store/actions/newsAction";
import Select from "react-select";
import { toBase64 } from "../../../../utils/utils";

const CreateNews = ({
  values,
  handleChange,
  handleSubmit,
  setValues,
  gallery,
  errors
}) => {
  const [base64Image, setBase64Image] = useState();

  const handleImageUpload = ({ target: { files } }) => {
    const formData = new FormData();

    formData.append("gallery", files[0]);
    setValues({ ...values, gallery: formData });
    toBase64(files[0]).then(data => setBase64Image(data)).catch(e => console.error(e))
  };

  const options = [
    { value: "news", label: "Новинy" },
    { value: "adv", label: "Подію" },
  ];

  const typeSelect = (options) => {
    setValues({ ...values, type: options.value });
  };

  return (
    <div>
      <div className={s.container}>
        <div className={s.title__container}>
          <h1 className={s.title}>Створення новини/події</h1>
        </div>
        <div className={s.body}>
          <Select
            placeholder="Виберіть що створювати"
            options={options}
            onChange={typeSelect}
            name="type"
          />
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
            label="Опис"
            value={values.desc}
            name="desc"
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
              disabled={!!errors.name}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
const formikHOC = withFormik({
  mapPropsToValues: () => ({
    title: "",
    desc: "",
    type: "",
    gallery: "",
  }),

  // validate: (values) => {
  //   const errors = {};
  //   if (
  //     !values.title || values.desc || values.type
  //   ) {
  //     errors.name = "Required";
  //   }
  //   return errors;
  // },
  handleSubmit: async (values, { props: { createNews, history } }) => {
    const newsToSubmit = {
      title: values.title,
      desc: values.desc,
      type: values.type,
    };
    const isSuccess = await createNews(newsToSubmit, values.gallery);
    if (isSuccess) {
      alert("Створено");
      history.push("/admin-news")
    } else {
      alert("Помилка");
    }
  },
})(CreateNews);

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => ({
  createNews: (news, gallery) => dispatch(createNewsAction(news, gallery)),
});

export default connect(mapStateToProps, mapDispatchToProps)(formikHOC);
