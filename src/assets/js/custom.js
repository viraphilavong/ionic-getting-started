function sendTwilioMessage(sid, token, tnumber, mnumber, message, number) {
    if (!number) {
        number = mnumber;
    }
    $.ajax({
        type: "POST",
        url: `https://api.twilio.com/2010-04-01/Accounts/${sid}/Messages.json`,
        data: 'From='+encodeURIComponent(tnumber)+'&Body='+encodeURIComponent(message)+'&To='+encodeURIComponent('+1')+number,
        dataType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader ("Authorization", "Basic " + btoa(sid + ":" + token));
        },
      });
    return true;
}
function emailRejection() {
    window.open('mailto:alexander.philavong.0640@gmail.com?subject=Rejected&body=No bueno! :(');
}
function emailHired() {
    window.open('mailto:alexander.philavong.0640@gmail.com?subject=Good News!&body=Offer incoming!');
}