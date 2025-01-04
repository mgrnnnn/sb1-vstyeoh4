import React from 'react';

export function PropertyMap() {
  return (
    <div className="h-full w-full bg-gray-100">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d19868.687835989246!2d-0.1276474!3d51.5073219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1629789999999!5m2!1sen!2suk"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}