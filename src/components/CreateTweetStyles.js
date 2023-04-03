const styles = {
  formControl: {
    sx: {
      position: "relative",
      maxWidth: 500,
      marginBottom: 3,
    },
  },
  inputGroup: {
    sx: {
      borderColor: "white",
      backgroundColor: "#15202B",
    },
  },
  textArea: {
    pr: "1rem",
    placeholder: "What do you have in mind...",
    resize: "none",
    sx: {
      height: 160,
      color: "white",
    },
  },
  button: {
    size: "sm",
    colorScheme: "blue",
    sx: {
      position: "absolute",
      bottom: 15,
      right: 15,
    },
  },
  badge: {
    colorScheme: "red",
    textTransform: "none",
    sx: {
      padding: "5px 10px",
      borderRadius: 5,
      marginBottom: 10,
      position: "absolute",
      bottom: -6,
      left: 3,
    },
  },
};

export default styles;
