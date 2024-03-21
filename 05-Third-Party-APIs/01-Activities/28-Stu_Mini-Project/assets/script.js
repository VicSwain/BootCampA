 var today = dayjs();
 $('#time').text(today.format('MMM DD, YYYY HH mm ss'));
 console.log(today);

 function updateTime() {
    let time = today * 1.2;
 } 