let unixToTime = '';

export default unixToTime = (u) =>{
    var timestamp = u; // UNIX timestamp in seconds
    var xx = new Date();
    xx.setTime(timestamp*1000); // javascript timestamps are in milliseconds
    return(xx.toLocaleTimeString('nl-NL')); // the Day
}