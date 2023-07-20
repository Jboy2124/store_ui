function settings(icon, title) {
    return {
      position: "bottom-right",
      icon: icon,
      title: title,
      showConfirmButton: false,
      timer: 1500,
    };
  }
  
  function settingConfirmation(icon,title, text, confirmText) {
    return {
      title: title,
      text: text,
      icon: icon,
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: confirmText,
    };
  }
  
  export const showAlert = {
    error: (title) => {
      return settings("error", title);
    },
    success: (title) => {
      return settings("success", title);
    },
    warning: (title) => {
      return settings("warning", title);
    },
    info: (title) => {
      return settings("info", title);
    },
    question: (title) => {
      return settings("question", title);
    },
    confirmationSignout: (text) => {
      return settingConfirmation("question", 'Signout', text, "Yes, signout");
    },
    confimattionDelete: (text) => {
      return settingConfirmation("question", 'Delete', text, "Yes, delete it");
    },
  };
  