const styles = {
  formControl: {
    sx: {
      position: "relative",
      maxWidth: 320,
      marginBottom: 3,
    },
  },
  h1: {
    style: {
      textAlign: "center",
      color: "white",
      fontSize: "2rem",
      marginBottom: 15,
      borderRadius: 5,
      fontWeight: "bold",
    },
  },
  h2: {
    style: {
      color: "white",
      fontSize: "1.7rem",
      marginBottom: 20,
    },
  },
  email: {
    name: "email",
    type: "email",
    id: "email",
    placeholder: "Fill in your email...",
    sx: {
      backgroundColor: "#15202B",
      padding: "25px 10px",
      marginTop: 1,
      color: "white",
      borderRadius: 5,
      marginBottom: 4,
    },
  },
  password: {
    name: "password",
    type: "password",
    id: "password",
    placeholder: "Fill in your password...",
    sx: {
      backgroundColor: "#15202B",
      padding: "25px 10px",
      marginTop: 1,
      color: "white",
      borderRadius: 5,
      marginBottom: 5,
    },
  },
  Divider: {
    sx: {
      width: 320,
      marginTop: 2,
      marginBottom: 5,
    },
  },
  Button: {
    type: "submit",
    size: "sm",
    colorScheme: "blue",
    sx: {
      width: 320,
      borderRadius: 5,
      padding: "25px 0px",
    },
  },
};

export default styles;
