import React from "react";
import { connect } from "react-redux";
import { createSelector } from "reselect";
import { getPhotoList, getPhotoLoading } from "../selectors/getPhoto";
import PhotoList from "../components/PhotoList";
import { apiGet } from "../actions/api";

class PhotoListContainer extends React.Component {
  componentDidMount() {
    this.props.apiGet({
      path: "/photos",
      data: {
        _limit: 20
      }
    });
  }

  render() {
    return <PhotoList {...this.props} />;
  }
}

const mapStateToProps = () =>
  createSelector(
    getPhotoList,
    getPhotoLoading,
    (photo_list, photo_loading) => {
      return {
        photo_list,
        photo_loading
      };
    }
  );

const mapDispatchToProps = {
  apiGet
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoListContainer);
