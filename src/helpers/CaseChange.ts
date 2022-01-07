const camelReducer = (p: string, c: string) =>
	p + c.substring(0, 1).toUpperCase() + c.substring(1)

export const toUpper = (s: string) => s.toUpperCase()
export const toLower = (s: string) => s.toLowerCase()
export const toCamel = (s: string) => s.split(" ").reduce(camelReducer)
