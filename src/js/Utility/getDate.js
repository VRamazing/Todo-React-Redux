const initDate = () => {
  const date = new Date();
  let month = (date.getMonth() + 1);
  month = month / 10 === 0 ? month : `0${month}`;
  let dateInMonth = date.getDate();
  dateInMonth = dateInMonth / 10 !== 0 ? dateInMonth : `0${dateInMonth}`;
  let hours = date.getHours();
  hours = hours / 10 !== 0 ? hours : `0${hours}`;
  let mins = date.getMinutes();
  mins = mins / 10 !== 0 ? mins : `0${mins}`;
  const initialDate = `${date.getFullYear()}-${month}-${dateInMonth}T${hours}:${mins}`;
  return initialDate;
}

export default initDate;