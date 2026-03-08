"use client";

import React, { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  errorCount: number;
}

export class WebGLErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      errorCount: 0,
    };
  }

  static getDerivedStateFromError(error: Error): State {
    // Handle WebGL context lost errors
    if (
      error.message.includes("Context Lost") ||
      error.message.includes("WebGL")
    ) {
      console.error("WebGL Error caught:", error);
      return {
        hasError: true,
        errorCount: 0,
      };
    }
    return {
      hasError: false,
      errorCount: 0,
    };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("Error caught by WebGL Error Boundary:", error, info);
  }

  handleRetry = () => {
    this.setState({ hasError: false, errorCount: this.state.errorCount + 1 });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full h-full flex items-center justify-center bg-black/50">
          <div className="text-center">
            <p className="text-white mb-4">WebGL rendering error occurred</p>
            <button
              onClick={this.handleRetry}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Retry
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
