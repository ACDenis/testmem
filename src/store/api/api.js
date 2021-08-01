import _axios from "./_axios";

export const loginRequest = (data) => {
  return _axios.post("/login", data);
};

export const fetchAdv = () => _axios.get("/adv");
export const fetchAllNews = () => _axios.get("/news");
export const fetchPartners = () => _axios.get("/partners");
export const fetchShedule = () => _axios.get("/schedule");
export const fetchSingleNews = (id) => _axios.get(`/news/${id}`);
export const fetchSinglePartners = (id) => _axios.get(`/partners/${id}`);

export const createPartners = (partners, token) => {
  return _axios.post("/partners", partners, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export const createNews = (news, token) => {
  return _axios.post("/news", news, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const createShedule = (shedule, token) => {
  return _axios.post("/schedule/upload", shedule, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    }
  })
}

export const uploadImageToPartners = (gallery, id, token, ...agrs) => {
  return _axios.post(`/partners/upload/${id}`, gallery, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });
};


export const uploadImageToNews = (gallery, id, token, ...args) => {
  return _axios.post(`/news/upload/${id}`, gallery, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const uploadSheldue = (sheldueFile, token, ...args) => {
  return _axios.post(`/schedule/upload`, sheldueFile, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const patchNews = (news, id, token) => {
  return _axios.patch(`/news/${id}`, news, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const patchPartners = (partners, id, token) => {
  return _axios.patch(`partners/${id}`, partners, {
    headers: {
      Authorization: `Bearer ${token}`,

    }
  })
}

export const deleteNews = (id, token) => {
  return _axios.delete(`/news/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const deleteAdv = (id, token) => {
  return _axios.delete(`/adv/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}
export const deletePartners = (id, token) => {
  return _axios.delete(`/partners/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}

export const fetchPages = () => {
  const token = document.cookie.split('token=')[1]
  return _axios.get('/pages', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}
export const fetchPagesByPath = (path) => {
  const token = document.cookie.split('token=')[1]
  return _axios.get(`/page-by-path${path}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}


export const patchPage = (id, body) => {
  const {html, title, path} = body;
  const token = document.cookie.split('token=')[1]
  return _axios.patch('/page/' + id, {html, title, path}, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}
