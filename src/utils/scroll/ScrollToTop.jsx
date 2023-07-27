export const scrollTop = (params) => {
  return window.scrollTo({
    top: params,
    behavior: "smooth",
  });
};
