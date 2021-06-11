let unixToDate = '';

export default unixToDate = (u) =>{
    var timestamp = u; // UNIX timestamp in seconds
    var xx = new Date();
    xx.setTime(timestamp*1000); // javascript timestamps are in milliseconds
    let weekday = xx.toLocaleString('nl-NL', { weekday: 'long' });
    weekday = weekday[0].toUpperCase() + weekday.substring(1);
    let day = xx.toLocaleString('nl-NL', { day: 'numeric' });
    let month = xx.toLocaleString('nl-NL', { month: 'long' });
    let year = xx.toLocaleString('nl-NL', { year: 'numeric' });
    const date = day + ' ' + month + ' ' + year
    return(date)

}