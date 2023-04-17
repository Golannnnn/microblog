const styles = {
  formControl: {
    sx: {
      position: "relative",
      maxWidth: 300,
      marginBottom: 3,
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
      padding: "20px 10px",
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
      padding: "20px 10px",
      marginTop: 1,
      color: "white",
      borderRadius: 5,
      marginBottom: 5,
    },
  },
  Divider: {
    sx: {
      width: 300,
      marginTop: 2,
      marginBottom: 5,
    },
  },
  Button: {
    type: "submit",
    size: "sm",
    colorScheme: "blue",
    sx: {
      width: 300,
      borderRadius: 5,
      float: "right",
    },
  },
};

export default styles;
