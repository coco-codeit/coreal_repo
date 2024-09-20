export interface DataInterface {
  study_id: string; // 스터디 ID
  title: string; // 모임 제목
  oranizer: string; // 모임 주최자
  duration: {
    // 모임 기간 정보
    start_date: string; // 모임 시작일
    end_date: string; // 모임 종료일
  };
  recurring_time: {
    // 모임 시간 정보
    day_of_week: string; // 모임이 열리는 요일
    start_time: string; // 모임 시작 시간
    end_time: string; // 모임 종료 시간
  };
  skills: string[]; // 모임에서 다루는 기술 스택
  main_image: string; // 모임 대표 이미지
  progress_method: string; // 진행 방식
  location: string; // kakao 맵 API 지도 첨부
  status: string; // 모임 상태 upcoming, ongoing, completed
  participants_count: number; // 현재 모임 참가 인원 수
  max_participants: number; // 모임 최대 인원 수
}
