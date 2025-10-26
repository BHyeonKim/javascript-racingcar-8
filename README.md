# javascript-racingcar-precourse

## 프로세스

### 사용자 입력
1. 사용자에게 플레이어의 이름을 입력을 받는다.
2. 입력에서 사용자 이름을 파싱한다.   
  2-1. 사용자 이름이 1자 이상인지 검증한다.   
  2-2. 사용자 이름이 5자 이하인지 검증한다.   
  2-3. 중복된 이름이 있는지 검증한다.   
3. 사용자에게 `이동횟수`를 입력을 받는다.   
  3-1. 입력값이 숫자인지 검증한다.   
  3-2. 입력값이 양수인지 검증한다.   

### 게임 진행
1. 플레이어 이름으로 Car 인스턴스를 생성한다.

2. `이동횟수` 만큼 아래 과정을 반복한다.
```
  loop. 이동횟수 마다
    loop. 각 플레이어 마다.
      1. 랜덤함수를 실행하여 4이상의 값이 나오는지 확인한다.
      2. 4이상이 나올경우 Car를 전진시킨다.
  1. 차수별 실행 결과를 출력한다.
```

### 결과 출력
1. 우승자가 2명 이상인지 판별한다.   
  1-1. 우승자가 2명 이상이면 `, `으로 우승자의 이름을 `join`하여 하나의 문자열로 만든다.
2. 우승자를 출력한다.


## 컴포넌트 구성
1. View
2. Controller(app)
3. Model
  - Car
  - Referee
4. ETC
  - Validator
  - Parser

## 기능 목록

### View
#### `getInput(string) => string`
> - [x] 사용자에게 입력을 받는 메서드

#### `print() => void`
> - [x] 출력 메서드

### Car

#### `move() => void`
> - [x] 차량을 앞으로 1칸 움직이는 메서드

### Referee

#### `getWinningCars(Car[]) => Car[]`
> - [x] 우승자 차량을 반환하는 메서드

#### `getDriverNames(Car[]) => string[]`
> - [x] 차량들의 드라이버를 배열에 담아 반환하는 메서드


### Validator

#### `validateNotEmptyString(string) => void`
> - [x] 문자열 길이가 1이상인지 검증하는 메서드

#### `validateNotExceedFiveCharacter(string) => void`
> - [x] 문자열 길이가 5이하인지 검증하는 메서드

#### `validateNoDuplication(string[]) => void`
> - [x] 배열에 중복된 문자열이 있는지 검증하는 메서드

#### `validateNumber(any) => void`
> - [x] 숫자인지 검증하는 메서드

#### `validatePositiveNumber(number) => void`
> - [x] 양수인지 검증하는 메서드

#### `validateIsArray(arr) => void`
> - [x] 배열인지 검증하는 메서드

### Parser

#### `parsePlayersFromString(string) => string[]`
> - [x] 문자열로부터 플레이어를 파싱하는 메서드