import React from 'react';
import './NotFound.scss';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-heading">STeeK English</h1>
      <h1 className="not-found-heading">404</h1>

      <p className="not-found-message">Page not found</p>
      <p className="not-found-message">Xin lỗi, địa chỉ bạn yêu cầu hiện không thể
        tìm thấy trên máy chủ của chúng tôi.</p>
    </div>
  );
};

export default NotFound;
