const styles = {
  formControl: {
    sx: {
      position: "relative",
      maxWidth: 500,
      marginBottom: 3,
    },
  },
  logIn: {
    style: {
      textAlign: "center",
      color: "white",
      fontSize: "1.7rem",
      marginBottom: 20,
    },
  },
  h2: {
    style: {
      color: "white",
      fontSize: "1.7rem",
      marginBottom: 20,
    },
  },
  inputGroup: {
    sx: {
      borderColor: "white",
      backgroundColor: "#15202B",
      borderRadius: 5,
      marginBottom: 3,
    },
  },
  label: {
    htmlFor: "name",
    style: {
      color: "white",
    },
  },
  Input: {
    name: "userName",
    // pr: "1rem",
    type: "text",
    id: "name",
    placeholder: "Fill in your user name...",
    // resize: "none",
    sx: {
      backgroundColor: "#15202B",
      padding: "25px 15px",
      marginTop: 1,
      color: "white",
    },
  },
  Button: {
    type: "submit",
    size: "sm",
    colorScheme: "blue",
    sx: {
      borderRadius: 5,
      float: "right",
    },
  },
  // badge: {
  //   colorScheme: "red",
  //   textTransform: "none",
  //   sx: {
  //     padding: "5px 10px",
  //     borderRadius: 5,
  //     marginBottom: 10,
  //     position: "absolute",
  //     bottom: -6,
  //     left: 3,
  //   },
  // },
};

export default styles;
