export default function date(date) {
  let dates = new Date(Number(date));

  let day = dates.getDate();
  let month = dates.getMonth() + 1;
  let year = dates.getFullYear();
  let fullDate = `${month}/${day}/${year}`;

  return fullDate;
}
