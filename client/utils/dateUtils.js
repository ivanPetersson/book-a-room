export const formatDate = (date) => {
  const options = { day: "numeric", month: "short" };
  return new Intl.DateTimeFormat("en-GB", options).format(new Date(date));
};

export const calculateDates = (datesToShow) => {
  const today = new Date();
  return Array.from({ length: datesToShow }, (_, index) => {
    const newDate = new Date(today);
    newDate.setDate(today.getDate() + index - Math.floor(datesToShow / 2));
    return newDate.toISOString().split("T")[0];
  });
};
