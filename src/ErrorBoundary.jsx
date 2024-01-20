import React from "react";
import { Typography } from "antd";
import propTypes from "prop-types";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    console.log(error);
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error("Caught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <Typography.Title level={4}>Something went wrong.</Typography.Title>;
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: propTypes.object.isRequired
};
