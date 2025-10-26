# javascript-racingcar-precourse

## 프로세스

### 사용자 입력
1. 사용자에게 플레이어의 이름을 입력받는다.
2. 입력에서 사용자 이름을 파싱한다.
  2-1. 사용자 이름이 1자 이상인지 검증한다.
  2-2. 사용자 이름이 5자 이하인지 검증한다.
  2-3. 중복된 이름이 있는지 검증한다.
3. 플레이어 이름으로 Car 인스턴스를 생성한다.
4. 사용자에게 `이동횟수`를 입력받는다.
  4-1. 입력값이 숫자인지 검증한다.
  4-2. 입력값이 양수인지 검증한다.

### 게임 진행
1. 빈 줄을 출력한다.
2. 실행 결과 안내 메시지를 출력한다.
3. `이동횟수` 만큼 아래 과정을 반복한다.
```
  loop. 이동횟수 마다
    1. Referee.playRound()를 호출하여 한 라운드를 진행한다.
      1-1. 각 플레이어마다 랜덤함수를 실행하여 4이상의 값이 나오는지 확인한다.
      1-2. 4이상이 나올 경우 Car를 전진시킨다.
    2. 각 차량의 상태를 출력한다.
    3. 빈 줄을 출력한다.
```

### 결과 출력
1. 최고 거리를 이동한 차량들을 우승자로 선정한다.
2. 우승자들의 이름을 `, `로 join하여 하나의 문자열로 만든다.
3. 우승자를 출력한다.


## 컴포넌트 구성
1. View
2. Controller(App)
3. Model
  - Car
  - Referee
4. Utils
  - Validator
  - Parser
5. Constants
  - message
  - error

## 기능 목록

### View
#### `getInput(string) => string`
> - [x] 사용자에게 입력을 받는 메서드

#### `print(string) => void`
> - [x] 출력 메서드

#### `printEmptyLine() => void`
> - [x] 빈 줄을 출력하는 메서드

#### `printCarState(Car) => void`
> - [x] 차량의 상태를 출력하는 메서드

### Car

#### `move() => void`
> - [x] 차량을 앞으로 1칸 움직이는 메서드

### Referee

#### `getWinningCars(Car[]) => Car[]`
> - [x] 우승자 차량을 반환하는 메서드

#### `getDriverNames(Car[]) => string[]`
> - [x] 차량들의 드라이버를 배열에 담아 반환하는 메서드

#### `playRound(Car[]) => void`
> - [x] 한 라운드를 진행하는 메서드 (각 차량을 랜덤값에 따라 전진시킴)

#### `generateRandomNumber() => number`
> - [x] 0~9 사이의 랜덤 숫자를 생성하는 메서드


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

#### `validateIsCar(car) => void`
> - [x] Car 인스턴스인지 검증하는 메서드

#### `validateIsString(string) => void`
> - [x] 문자열인지 검증하는 메서드

### Parser

#### `parsePlayersFromString(string) => string[]`
> - [x] 문자열로부터 플레이어를 파싱하는 메서드

#### `parseRound(string) => number`
> - [x] 문자열로부터 라운드 수를 파싱하는 메서드