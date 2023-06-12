const liveClock = () => {
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const leadingZero = (number) => {
    if (number < 10) {
      return `0${number}`;
    }
    return number;
  };
    const date = new Date();
    const time = `${weekdays[date.getDay()]} ${
      months[date.getMonth()]
    } ${leadingZero(date.getDate())} ${date.getFullYear()} ${leadingZero(
      date.getHours()
    )}:${leadingZero(date.getMinutes())}:${leadingZero(date.getSeconds())}`;
    dateDiv.innerHTML = time;
}

export default liveClock;

// setInterval(liveClock, 1000);
