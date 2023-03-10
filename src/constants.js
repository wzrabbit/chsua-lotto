const MESSAGE = {
  INPUT_PURCHASE_AMOUNT: "구입금액을 입력해 주세요.\n",
  INPUT_LOTTO_NUMBERS: "\n당첨 번호를 입력해 주세요.\n",
  INPUT_BONUS_NUMBER: "\n보너스 번호를 입력해 주세요.\n",
  INPUT_RESTART_COMMAND: "\n다시 시작하시겠습니까? (y/n)\n",
  RESTART: "\n게임을 다시 시작합니다.\n",
  QUIT: "\n게임을 종료합니다.\n",
};
Object.freeze(MESSAGE);

const AMOUNT_OF_PURCHASE = (amount) => `${amount}개를 구매했습니다.`;
Object.freeze(AMOUNT_OF_PURCHASE);

const ERROR = {
  NUMBER: "[ERROR] 숫자를 입력해주세요.",
  OVER_UNIT: "[ERROR] 천 원 이상 입력해주세요.",
  SIZE: "[ERROR] 1 ~ 45 사이의 서로 다른 숫자 6개를 입력해주세요.",
  RANGE: "[ERROR] 1 ~ 45 사이의 값을 입력하세요.",
  DUPLICATED: "[ERROR] 중복된 숫자가 있습니다.",
  DIVIDE: "[ERROR] 로또 1매 가격으로 나누어 떨어지는 금액을 입력하세요.",
  RESTART: "[ERROR] y 혹은 n으로 입력해주세요.",
};
Object.freeze(ERROR);

const NUMBER = {
  UNIT: 1_000,
  MIN_RANGE: 1,
  MAX_RANGE: 45,
  SIZE: 6,
  RANK: 5,
};
Object.freeze(NUMBER);

const COMMAND = {
  RESTART: "y",
  QUIT: "n",
};
Object.freeze(COMMAND);

const PRIZE = [5_000, 50_000, 1_500_000, 30_000_000, 2_000_000_000];
Object.freeze(PRIZE);

export { NUMBER, MESSAGE, ERROR, AMOUNT_OF_PURCHASE, COMMAND, PRIZE };
