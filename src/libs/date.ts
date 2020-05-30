export interface PostDate {
  year: number;
  month: number;
  day: number;
}

export const PostDate: (
  year: string,
  month: string,
  day: string
) => PostDate = (year, month, day) => ({
  year: parseInt(year),
  month: parseInt(month),
  day: parseInt(day),
});

/**
 * PostDateをstring形式 yyyy-mm-dd に変換する。dがnullishだった場合はnullを返す
 */
export const PostDateToString: (d?: PostDate) => string | null = d => {
  if (d == null || Object.values(d).includes(null)) return null;
  const { year, month, day } = d;
  return [year, month, day].join("-");
};
