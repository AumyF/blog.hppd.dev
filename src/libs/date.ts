export class PostDate {
  constructor(year: string, month: string, day: string) {
    this.year = parseInt(year)
    this.month = parseInt(month)
    this.day = parseInt(day)
  }
  year: number
  month: number
  day: number
}

export const PostDateToString: (d?: PostDate) => string | null = d => {
  if (d == undefined) return null
  const { year, month, day } = d
  console.log({ year, month, day })
  return [year, month, day].join("-")
}
