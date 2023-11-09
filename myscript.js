let mydate = document.getElementById('input-date');
mydate.max = new Date().toISOString().split("T")[0];

function calculateAge(){
    let birthDate = new Date(mydate.value);
    let y1 = birthDate.getFullYear();
    let m1 = birthDate.getMonth() + 1;
    let d1 = birthDate.getDate();

    let today = new Date();

    let y2 = today.getFullYear();
    let m2 = today.getMonth() + 1;
    let d2 = today.getDate();

    let y3, m3, d3;
    y3 = y2 - y1;

    if (m2 >= m1) {
        m3 = m2 - m1;
    } else {
        y3--;
        m3 = 12 + m2 - m1;
    }

    if (d2 >= d1) {
        d3 = d2 - d1;
    } else {
        m3--;
        d3 = daysInMonth(y1, m1) + d2 - d1;
    }
    if (m3 < 0) {
        m3 = 11;
        y3--;
    }
    let text = 'You are ' + y3.toString() + ' years, ' + m3.toString() + ' months and ' + d3.toString() + ' days old.';
    document.getElementById('result').innerHTML = text;
}

function daysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}
