let table = document.createElement('table');
table.classList.add('table-board');
document.querySelector('.board').append(table);

let tr, td, m, letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'], num=['8','7','6','5','4','3','2','1'], chess = ['&#9812', '&#9813', '&#9814', '&#9815', '&#9816', '&#9817', '&#9818', '&#9819', '&#9820', '&#9821', '&#9822', '&#9823']

for (let i = 0; i < 10; i++) {
    tr = document.createElement('tr');
    table.append(tr);
    for (let j = 0; j < 10; j++) {
        td = document.createElement('td');
        tr.append(td);
        if (i == 2) {
            td.innerHTML = chess[11];
        }
        if (i == 1 && (j == 1 || j == 8)) {
            td.innerHTML = chess[8];
        }
        if (i == 1 && (j == 2 || j == 7)) {
            td.innerHTML = chess[10];
        }
        if (i == 1 && (j == 3 || j == 6)) {
            td.innerHTML = chess[9];
        }
        if (i == 1 && j == 4) {
            td.innerHTML = chess[7];
        }
        if (i == 1 && j == 5) {
            td.innerHTML = chess[6];
        }
        if (i == 7) {
            td.innerHTML = chess[5];
        }
        if (i == 8 && (j == 1 || j == 8)) {
            td.innerHTML = chess[2];
        }
        if (i == 8 && (j == 2 || j == 7)) {
            td.innerHTML = chess[4];
        }
        if (i == 8 && (j == 3 || j == 6)) {
            td.innerHTML = chess[3];
        }
        if (i == 8 && j == 4) {
            td.innerHTML = chess[1];
        }
        if (i == 8 && j == 5) {
            td.innerHTML = chess[0];
        }
        if (((i + j) % 2) && j != 0 && j != 9 && i != 0 && i != 9) {
            td.classList.add('gray')
        }
        if ((i == 0 || i == 9) && j != 0 && j != 9) {
            td.innerText = letters[j - 1];
        }
        if ((i != 0 && i != 9) && (j == 0 || j == 9)) {
            td.innerText = num[i-1];
        }
    }
}

