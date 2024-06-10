
// console 객체는 global 모듈에 포함되어 있는 대표적인 글로벌 객체로 
// global 모듈 이름을 생략하고 사용할 수 있다.
global.console.log("글로벌 모듈");
console.log("글로벌 모듈");

console.log(`현재 모듈이 있는 폴더 이름 : ${__dirname}`);
console.log(`현재 모듈이 있는 파일 이름 : ${__filename}`);

let remaingingTime = 3000; // 남은 시간을 3초로 설정
const intervalTime = 500;  // 대기시간 간격을 0.5초로 설정
// 0.5초 주기로 실행되는 함수
const timer = setInterval(()=>{
    // 남은 시간 출력
    console.log(`${remaingingTime/1000}초 남음.`);
    // 남은 시간 감소
    remaingingTime -= intervalTime;
    if(remaingingTime <= 0){
        console.log("종료합니다.");
        clearInterval(timer);
    }
}, intervalTime);

