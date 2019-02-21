import React from "react";
import PropTypes from "prop-types";
import { PhotoList, PhotoLoading } from "./PhotoList.theme";

export const Component = ({ photo_list, photo_loading }) => (
  <PhotoList>
    {photo_loading ? (
      <PhotoLoading />
    ) : (
      (photo_list || []).map(photo_item => (
        <img
          key={photo_item.id}
          alt={photo_item.title}
          src={photo_item.thumbnailUrl}
        />
      ))
    )}
  </PhotoList>
);

Component.displayName = "PhotoList";

Component.propTypes = {
  photo_list: PropTypes.array,
  photo_loading: PropTypes.bool
};

export default Component;
