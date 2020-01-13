/* eslint-disable react/no-multi-comp, react/no-did-mount-set-state, react/forbid-prop-types */
import React from "react";
import PropTypes from "prop-types";
import config from "../../../../heydays-config";

class Preview extends React.PureComponent {
  static propTypes = {
    document: PropTypes.object
  };

  static defaultProps = {
    document: null
  };

  render() {
    const { displayed } = this.props.document;

    const isLocal = window.location.host.includes("localhost");

    const url = `${
      isLocal ? config.previewUrl.dev : config.previewUrl.production
    }${displayed._id}`;

    if (!displayed._id) return null;

    return (
      <iframe
        style={{
          width: "100%",
          height: "100%"
        }}
        src={url}
        frameborder="0"
      ></iframe>
    );
  }
}

export default Preview;
