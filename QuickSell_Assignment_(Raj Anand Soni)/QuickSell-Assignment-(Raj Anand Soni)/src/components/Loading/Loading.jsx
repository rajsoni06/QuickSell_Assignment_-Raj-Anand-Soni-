import React from "react";
import { Circles } from "react-loader-spinner";

const Loading = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "10px", // Increased gap for better spacing
        backgroundColor: "#f0f0f0", // Added background color
      }}
    >
      <Circles
        height={80}
        width={80}
        color="##0000ff"
        ariaLabel="circles-loading"
        visible={true}
      />
      <h2
        style={{
          color: "#333", 
          fontWeight: "bold", 
          letterSpacing: "2px",
          marginTop: "10px", 
        }}
      >
        Loading...
      </h2>
    </div>
  );
};

export default Loading;
