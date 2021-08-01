import React, {useEffect, useState} from "react";
import Select from "react-select";
import s from "./Admin.module.css";
import {Editor} from '@tinymce/tinymce-react';
import {fetchPages, patchPage} from "../../store/api/api";

const Admin = () => {
  const [pages, setPages] = useState([]);
  const [page, setPage] = useState({gallery: []});
  const [isEditorVisible, setIsEditorVisible] = useState(false);

  useEffect(() => {
    fetchPages()
      .then(({data}) => {
        const formattedData = data.map(item => {
          return {label: item.title, value: item.path, rest: item};
        })
        setPages(formattedData)
      }).catch(e => console.error('Admin fetchPages === ', e))
  }, []);

  const onChange = ({rest}) => {
    setPage(rest);
    setIsEditorVisible(true)
  }

  const handleEditorChange = (content) => {
    setPage({...page, html: content})
  }

  const handleImageUpload = (blobInfo, success, failure, progress) => {
    const baseImage = blobInfo.base64();
    success('data:image/png;base64, ' + baseImage)
  }

  const onFocus = () => {
    setIsEditorVisible(false)
  }

  const handleSave = () => {
    patchPage(page._id, page)
      .then(data => {
        alert("Змінено")
        console.log(data)
      })
      .catch(err => {
        console.log(err)
        alert('Сталася помилка')
      })
  }

  return (
    <div>
      <div className={s.title__container}>
          <h2 className={s.title}>Редагування сторінок</h2>
        </div>
      <div className={s.main__wrapper}>
        <div className={s.select}>
          <Select
            onMenuOpen={onFocus}
            options={pages}
            onChange={onChange}
            placeholder="Виберіть сторрінку для редагування"
          />
        </div>
        {isEditorVisible && <> <Editor
          initialValue={page.html}
          value={page.html}
          apiKey='42g6dqq1pkropr8mmiygujgq2ij57udq8rb8im2rmwti3ysm'
          init={{
            automatic_uploads: true,
            height: 500,
            menubar: true,
            plugins: [
              'advlist autolink lists link image imagetools charmap print preview anchor',
              'searchreplace visualblocks code fullscreen',
              'insertdatetime media table paste code help table'
            ],
            // eslint-disable-next-line no-multi-str
            toolbar: 'undo redo | image | formatselect | bold italic backcolor | table | \
              alignleft aligncenter alignright alignjustify | \
              bullist numlist outdent indent | removeformat ',
            images_upload_handler: handleImageUpload
          }}
          onEditorChange={handleEditorChange}
        ></Editor>
          <button className={s.save_btn} onClick={handleSave}>Оновити</button>
        </>}
      </div>
    </div>
  );
};

export default Admin;
