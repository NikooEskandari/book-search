import React from "react";

export default function BookWidget(props) {
  const createList = (properties) => {
    const propertyArray = properties?.map((property, index) => {
      return property;
    });

    return propertyArray? propertyArray.join(", "): '';
  };

  return (
    <div className="each-book-container">
      <div className="book-widget-title">{props.doc.title}</div>
      <div className="book-details">
        <div className="book-details-title">Book Cover:</div>
        <div>{props.doc.cover_i}</div>
      </div>
      <div className="book-details">
        <div className="book-details-title">Authors:</div>
        <div className="book-details-content">{createList(props.doc.author_name)}</div>
      </div>
      <div className="book-details">
        <div className="book-details-title">Publish Date:</div>
        <div className="book-details-content">{createList(props.doc.publish_date)}</div>
      </div>
    </div>
  );
}
