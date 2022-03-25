const quotes = `교묘하게 속이는 것보다 서투르더라도 성실한 것이 좋다. - 한비자 

근면과 성실로 재산을 모은 것은 신의 섭리에 어긋나지 않는다. - 켈빈

 

독창성의 장점은 참신이 아니라 성실이다.믿는 사람은 독창적인 인간이다. - 토마스 칼라일

 

성실은 모든 영웅의 특징이다.깊고 위대하고 진실한 성실 말이다. - 토마스 칼라일

 

백 권의 책에 쓰인 말보다 한 가지 성실한 마음이 사람을 움직인다. - B.프랭클린

 

성실로 들어가는 길은 헛된 말을 하지 않는 것으로 시작한다. - 사마온공

 

성실은 안정된 생활을 가져오고, 안정된 생활은 성실한 인간을 만든다. - 아우구스티누스

 

성실은 어디에나 통용되는 유일한 화폐다.성실이야말로 가장 우수한 정책이다. - 서양격언



지혜가 부족해서 일에 실패하는 경우는 적다.부족한 것은 성실이다. - 디즈레일리

 

성실을 얻는 데는 5가지 덕목이 있다.첫째 널리 배우는 것, 둘째 자세히 묻는 것, 셋째 조심스럽게 생각하는 것, 넷째 분명하게 판별하는 것, 다섯째 독실하게 행하는 것이다. - 중용

 

성실한 사람일수록 자신을 이기려고 애쓰는 법이다. - 나폴레옹

 

시간과 정성을 들이지 않고 얻을 수 있는 결실은 없다. - 그라시안

 

약한 사람이 성실 하나로 산다는 것은 무리다. - 우고 베티

 

옥도 닦지 않으면 그릇을 이루지 못하는 법.성실로써 삶의 그릇을 빛내자 - 보나베차

 

자신을 신뢰할 수 있는 사람만이 남에게도 성실할 수 있다. - 에리히 프롬

 

정성과 마음을 다하고 생각이 깊은 사람일수록 상대에게서 정성과 진심을 잘 발견한다. - 톨스토이

 

지극한 정성은 쉼이 없고 그 힘은 영원하고 지대하다. - 중용

 

최후에 웃는 이가 되기 위해서 성실한 마음을 늘 간직하도록 하자. - 에머슨

 

나는 내가 더 노력할수록 운이 더 좋아진다는 걸 발견했다. - 토마스 제퍼슨

 

아무 하는 일 없이 시간을 허비하지 않겠다고 맹세하라.우리가 항상 무언가를 한다면 놀라우리만치 많은 일을 해낼 수 있다. - 토마스 제퍼슨




누구든 열정에 불타는 때가 있다.어떤 사람은 30분 동안, 또 어떤 사람은 30일 동안, 인생에 성공하는 사람은 30년 동안 열정을 갖는다. - 노만 빈센트 필

 

노력은 수단이 아니라 그 자체가 목적이다.노력하는 것 자체에 보람을 느낀다면 누구든지 인생의 마지막 시점에서 미소를 지을 수 있을 것이다. - 톨스토이`;

const splitSpace = quotes.split('\n');
const splitEnter = filterItems('-');
const dividePoint = '-';

const array = new Array();

function divideResult() {
    for (let i = 0; i < splitEnter.length; i++) {
        const a = splitEnter[i].toString();
        const stringIndex = a.indexOf(dividePoint);
        const quote = a.substring(0, stringIndex);
        const author = a.substring(stringIndex + 1);

        toJson(quote, author);

    }

    console.log(array);
    return array;
}

function toJson(a, b) {
    const divideResult = { quote: `${a}`, author: `${b}` };
    const jsonResult = JSON.stringify(divideResult);

    array.push(jsonResult);

}

function filterItems(query) {
    return splitSpace.filter(function (el) {
        return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
    })
}


const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

