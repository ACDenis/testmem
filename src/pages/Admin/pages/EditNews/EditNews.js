import React, {useEffect, useCallback, useState} from "react";
import s from "./EditNews.module.css";
import {connect} from "react-redux";
import {
  editNewsAction,
  getSingleNewsAction,
} from "../../../../store/actions/newsAction";
import {useParams} from "react-router-dom";
import Button from "../../../../misc/Button/Button";
import Input from "../../../../misc/Input/Input";
import {withFormik} from "formik";
import { toBase64 } from "../../../../utils/utils";

const EditNews = ({
                    getSingleNews,
                    singleNews,
                    values,
                    setValues,
                    handleChange,
                    handleSubmit,
                    gallery,
                  }) => {
  const {id} = useParams();
  const [base64Image, setBase64Image] = useState();

  useEffect(() => {
    getSingleNews(id);
  }, [getSingleNews, id]);

  const setValuesToFormik = useCallback(() => {
    const {desc, title, gallery, _id} = singleNews;
    if (singleNews._id) {
      setValues({
        // ...values,
        desc,
        title,
        gallery,
        _id,
      });
    }
  }, [setValues, singleNews])

  useEffect(() => {
    setValuesToFormik()
  }, [setValuesToFormik]);

  const handleImageUpload = ({target: {files}}) => {
    const formData = new FormData();
    formData.append("gallery", files[0]);
    setValues({...values, gallery: formData});
    toBase64(files[0]).then(data => setBase64Image(data)).catch(e => console.error(e))
  };

  return (
    <div>
      <div className={s.container}>
        <div className={s.title__container}>
          <h1 className={s.title}>Редагування новини</h1>
        </div>
        <div className={s.body}>
          {/* <Select
            placeholder="Виберіть що створювати"
            options={options}
            onChange={typeSelect}
            name="type"
          /> */}
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
              <span>Натисніть, щоб обрати нове</span>
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
              title="Змінити"
              size="lg"
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
    gallery: "",
  }),
  handleSubmit: async (values, {props: {editNews, h, singleNews: {_id}}}, ...args) => {
    const newsToSubmit = {
      title: values.title,
      desc: values.desc,
      // type: values.type,
    };
    const isSuccess = await editNews(newsToSubmit, _id, values.gallery, h);
    if (isSuccess) {
      alert("Змінено");
      h.push('/admin-news')
    } else {
      alert("Помилка");
    }
  },
})(EditNews)

const mapStateToProps = (state) => ({singleNews: state.news.single});
const mapDispatchToProps = (dispatch) => ({
  editNews: (news, id, gallery) => dispatch(editNewsAction(news, id, gallery)),
  getSingleNews: (id) => dispatch(getSingleNewsAction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(formikHOC);
