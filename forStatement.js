// 반복문 (For statement)
// for (시작조건; 종료조건; 변화조건) { }

const ulEl = document.querySelector("ul");

for(let i = 0; i < 10; i += 1){
    const li = document.createElement("li");    // 메모리 상에 li태그 생성, const li에 저장
    li.textContent = `list - ${i + 1}`;

    if ((i + 1) % 2 === 0) {
        li.addEventListener("click", function () {
            console.log(li.textContent);
        });
    }
    
    ulEl.appendChild(li);                       // ulEl의 자식으로 li를 생성
}