export function formatDateRange(startDate, endDate = null) {
  const months = [
    "Jan", "Fev", "Mar", "Abr", "Mai", "Jun",
    "Jul", "Ago", "Set", "Out", "Nov", "Dez"
  ];

  const format = (date) => {
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${month} ${year}`;
  };

  const start = format(startDate);
  const end = endDate ? format(endDate) : "atualmente";

  return `${start} - ${end}`;
}
