const calculateTime = (created_at: Date) => {
  const now = new Date();

  const timeDifferenceSeconds = Math.floor(
    (now.getTime() - created_at.getTime()) / 1000
  );
  const timeDifferenceMinutes = Math.floor(timeDifferenceSeconds / 60);
  const timeDifferenceHours = Math.floor(timeDifferenceMinutes / 60);
  const timeDifferenceDays = Math.floor(timeDifferenceHours / 24);
  const timeDifferenceMonths = Math.floor(timeDifferenceDays / 31);
  const timeDifferenceYears = Math.floor(timeDifferenceMonths / 12);

  // 경과 시간 설정
  if (timeDifferenceMinutes < 2) {
    return '1분 전';
  }
  if (timeDifferenceHours < 1) {
    return `${timeDifferenceMinutes}분 전`;
  }
  if (timeDifferenceHours < 2) {
    return '1시간 전';
  }
  if (timeDifferenceDays < 1) {
    return `${timeDifferenceHours}시간 전`;
  }
  if (timeDifferenceDays < 2) {
    return '1일 전';
  }
  if (timeDifferenceMonths < 1) {
    return `${timeDifferenceDays}일 전`;
  }
  if (timeDifferenceMonths < 2) {
    return '1달 전';
  }
  if (timeDifferenceYears < 1) {
    return `${timeDifferenceMonths}달 전`;
  }
  if (timeDifferenceYears < 2) {
    return '1년 전';
  }

  return `${timeDifferenceYears}년 전`;
};

export default calculateTime;
