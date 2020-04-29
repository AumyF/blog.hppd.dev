export interface PostDate {
  year: number
  month: number
  day: number
}

export const PostDate: (
  year: string,
  month: string,
  day: string
) => PostDate = (year, month, day) => ({
  year: parseInt(year),
  month: parseInt(month),
  day: parseInt(day),
})

export const PostDateToString: (d?: PostDate) => string | null = d => {
  if (d == undefined || Object.values(d).includes(null)) return null
  const { year, month, day } = d
  console.log({ year, month, day })
  return [year, month, day].join("-")
}
