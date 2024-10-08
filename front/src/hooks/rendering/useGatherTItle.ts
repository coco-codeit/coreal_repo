export const useGatherTitle = ({
  location,
  type,
}: {
  location: string;
  type: string;
}) => {
  const titleMap: Record<string, string> = {
    OFFICE_STRETCHING: `오피스 스트레칭 ${location} 모임`,
    MINDFULNESS: `마인드풀니스 ${location} 모임`,
    WORKATION: `워케이션 ${location} 모임`,
  };
  console.log(titleMap[type]);
  return titleMap[type] || "";
};
