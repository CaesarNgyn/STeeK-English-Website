import React from 'react';
import './Forbidden.scss';

const Forbidden = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-heading">STeeK English</h1>
      <h1 className="not-found-heading">403</h1>

      <p className="not-found-message">Forbidden</p>
      <p className="not-found-message">Xin lỗi, bạn không có quyền truy cập trang này.</p>
    </div>
  );
};

export default Forbidden;
