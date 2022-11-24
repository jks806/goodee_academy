
lotto_number = new Array(6);
my_number = [1, 2, 3, 4, 5, 6];  // 내 구매 로또
bonus_number = 0;

dw("내 로또 번호: " + my_number);
hr();

//추첨 번호 뽑기

// 첫번째 번호:
lotto_number[0] = Math.floor(Math.random() * 45 + 1);
dw("첫번째 번호: " + lotto_number[0]);
hr();
// 두번째 번호:
while (true) {
    lotto_number[1] = Math.floor(Math.random() * 45 + 1);
    if (lotto_number[0] == lotto_number[1]) {
        continue;
    } else {
        dw("두번째 번호:" + lotto_number[1]);
        hr();
        break;
    }
}
// 세번째 번호:
while (true) {
    lotto_number[2] = Math.floor(Math.random() * 45 + 1);
    if (lotto_number[0] == lotto_number[2]) {
        continue;
    } else if (lotto_number[1] == lotto_number[2]) {
        continue;
    } else {
        dw("세번째 번호:" + lotto_number[2]);
        hr();
        break;
    }
}
// 네번째 번호:
while (true) {
    lotto_number[3] = Math.floor(Math.random() * 45 + 1);
    if (lotto_number[0] == lotto_number[3]) {
        continue;
    } else if (lotto_number[1] == lotto_number[3]) {
        continue;
    } else if (lotto_number[2] == lotto_number[3]) {
        continue;
    } else {
        dw("네번째 번호:" + lotto_number[3]);
        hr();
        break;
    }
}
// 다섯번째 번호:
while (true) {
    lotto_number[4] = Math.floor(Math.random() * 45 + 1);
    if (lotto_number[0] == lotto_number[4]) {
        continue;
    } else if (lotto_number[1] == lotto_number[4]) {
        continue;
    } else if (lotto_number[2] == lotto_number[4]) {
        continue;
    } else if (lotto_number[3] == lotto_number[4]) {
        continue;
    } else {
        dw("다섯번째 번호:" + lotto_number[4]);
        hr();
        break;
    }
}
// 여섯번째 번호:
while (true) {
    lotto_number[5] = Math.floor(Math.random() * 45 + 1);
    if (lotto_number[0] == lotto_number[5]) {
        continue;
    } else if (lotto_number[1] == lotto_number[5]) {
        continue;
    } else if (lotto_number[2] == lotto_number[5]) {
        continue;
    } else if (lotto_number[3] == lotto_number[5]) {
        continue;
    } else if (lotto_number[4] == lotto_number[5]) {
        continue;
    } else {
        dw("여섯번째 번호:" + lotto_number[5]);
        hr();
        break;
    }
}
// 보너스번호
while (true) {
    bonus_number = Math.floor(Math.random() * 45 + 1);
    if (lotto_number[0] == bonus_number) {
        continue;
    } else if (lotto_number[1] == bonus_number) {
        continue;
    } else if (lotto_number[2] == bonus_number) {
        continue;
    } else if (lotto_number[3] == bonus_number) {
        continue;
    } else if (lotto_number[4] == bonus_number) {
        continue;
    } else if (lotto_number[5] == bonus_number) {
        continue;
    } else {
        dw("보너스 번호:" + bonus_number);
        hr();
        break;
    }
}



/* 일치 수 비교 */
var win = 0;
for (var i = 0; i < my_number.length; i++) {
    for (var j = 0; j < lotto_number.length; j++) {
        if (my_number[i] == lotto_number[j]) {
            dw("하나 당첨");
            hr();
            win++;
        }
    }
}

dw("당첨갯수 :" + win);

hr();
/* 등수 출력 */
var rank = "";
switch (win) {
    case 3:
        rank = "5등입니다.";
        break;
    case 4:
        rank = "4등입니다.";
        break;
    case 5:
        rank = "3등입니다.";
        for (var i = 0; i < 6; i++) {
            if (my_number[i] == bonus_number) {
                rank = "2등입니다.";
            }
        }
        break;
    case 6:
        rank = "1등입니다.";
        break;
    default:
        rank = "꽝입니다."
        break;
}
dw("등수: " + rank);
