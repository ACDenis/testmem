import React from "react";
import s from "./AdminShadule.module.css";
import {connect} from "react-redux";
import Button from "../../../../misc/Button/Button";
import {withFormik} from "formik";
import {createShaldueAction} from "../../../../store/actions/sheduleAction";


const AdminShadule = ({

                        values,
                        handleChange,
                        handleSubmit,
                        setValues,
                        shaduleFile,
                        createShaldue
                      }) => {

  const handleImageUpload = ({target: {files}}) => {
    setValues({...values, shaduleFile: files[0]});
  };

  return (
    <div>
      <div className={s.container}>
        <div className={s.body}>
          <div className={s.input__container}>
            <div className={s.input__container}>
              <p className={s.label}>Файл розкладу</p>
              <input
                type="file"
                name="shaduleFile"
                value={shaduleFile}
                onChange={handleImageUpload}
              />
            </div>
          </div>
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
    shaduleFile: ''
  }),

  handleSubmit: async (values, {props: {createShaldue, history}}) => {
    const formData = new FormData();
    formData.append('schedule', values.shaduleFile)
    const isSuccess = await createShaldue(formData);
    if (isSuccess) {
      alert("Створено");
      history.push("/admin-news")
    } else {
      alert("Помилка");
    }
  },
})(AdminShadule);

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  createShaldue: (shadule) => dispatch(createShaldueAction(shadule)),
});

export default connect(mapStateToProps, mapDispatchToProps)(formikHOC);
