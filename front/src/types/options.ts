export const daysOptions = [
  "월~일",
  "월~토",
  "월~금",
  "주말(토,일)",
  "주 6일",
  "주 5일",
  "주 4일",
  "주 3일",
  "주 2일",
  "주 1일",
];

export const timeOptions = [
  "오전 파트",
  "오후 파트",
  "저녁 파트",
  "새벽 파트",
  "오전~오후 파트",
  "오후~저녁 파트",
  "저녁~새벽 파트",
  "새벽~오전 파트",
  "풀타임(8시간 이상)",
];

export const fieldOptions = [
  "프론트엔드 개발자",
  "백엔드 개발자",
  "풀스택 개발자",
  "UI/UX 디자이너",
];

export const participantOptions = Array.from(
  { length: 14 },
  (_, i) => `${i + 1}명`,
);
