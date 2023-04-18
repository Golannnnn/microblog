const styles = {
  formControl: {
    sx: {
      position: "relative",
      maxWidth: 300,
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
    type: "text",
    id: "name",
    placeholder: "Fill in your user name...",
    sx: {
      backgroundColor: "#15202B",
      padding: "25px 15px",
      marginTop: 1,
      color: "white",
    },
  },
  fileLabel: {
    htmlFor: "file",
    style: {
      width: "100%",
      height: "100%",
      border: "1px solid white",
      borderRadius: "4px",
      cursor: "pointer",
      color: "white",
      marginTop: "5px",
      padding: "10px 10px",
      transition:
        "border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
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
  icon: {
    style: {
      objectFit: "cover",
      with: "60px",
      height: "60px",
      borderRadius: "50%",
      marginRight: "15px",
      backgroundColor: "transparent",
    },
  },
  Text: {
    fontWeight: "bold",
    color: "white",
    fontSize: 25,
    mr: 3,
  },
};

export default styles;
