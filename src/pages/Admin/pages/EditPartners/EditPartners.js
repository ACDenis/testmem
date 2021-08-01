import React, { useEffect, useState } from "react";
import s from "./EditPartners.module.css";
import { connect } from "react-redux";
import { withFormik } from "formik";
import Button from "../../../../misc/Button/Button";
import Input from "../../../../misc/Input/Input";
import {
  editPartnersAction,
  getSinglePartnersAction,
} from "../../../../store/actions/partnersAction";

import { useParams } from "react-router-dom";
import { toBase64 } from "../../../../utils/utils";

const EditPartners = ({
  values,
  handleChange,
  handleSubmit,
  setValues,
  gallery,
  fetchSinglePartners,
  singlePartner,
}) => {
  const [base64Image, setBase64Image] = useState();
  const { id } = useParams();
  useEffect(() => {
    fetchSinglePartners(id);
  }, [id, fetchSinglePartners]);

  useEffect(() => {
    const { title, url, gallery, _id } = singlePartner;
    if (singlePartner._id) {
      setValues({
        // ...values,
        title,
        url,
        gallery,
        _id,
      });
    }
  }, [singlePartner, setValues]);

  const handleImageUpload = ({ target: { files } }) => {
    const formData = new FormData();
    formData.append("gallery", files[0]);
    setValues({ ...values, gallery: formData });
    toBase64(files[0])
      .then((data) => setBase64Image(data))
      .catch((e) => console.error(e));
  };

  return (
    <div>
      <div className={s.container}>
        <div className={s.title__container}>
          <h1 className={s.title}>Редагування партнера</h1>
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
              <img
                alt={"test"}
                src={values.gallery[0] || base64Image}
                className={s.img}
              />
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
    url: "",
    gallery: "",
  }),
  handleSubmit: async (
    values,
    {
      props: {
        createPartners,
        h,
        singlePartner: { _id },
      },
    }
  ) => {
    const newsToSubmit = {
      title: values.title,
      url: values.url,
    };
    const isSuccess = await createPartners(newsToSubmit, _id, values.gallery);
    if (isSuccess) {
      alert("Змінено");
      h.push("/admin-news");
    } else {
      alert("Помилка");
    }
  },
})(EditPartners);

const mapStateToProps = (state) => ({ singlePartner: state.partners.single });
const mapDispatchToProps = (dispatch) => ({
  fetchSinglePartners: (id) => dispatch(getSinglePartnersAction(id)),
  createPartners: (partners, id, gallery) =>
    dispatch(editPartnersAction(partners, id, gallery)),
});

export default connect(mapStateToProps, mapDispatchToProps)(formikHOC);
