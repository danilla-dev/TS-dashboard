// src/utils/tableUtils.ts
export const paginateData = <T>(data: T[], page: number, itemsPerPage: number): T[] => {
	const startIndex = (page - 1) * itemsPerPage
	const endIndex = startIndex + itemsPerPage
	return data.slice(startIndex, endIndex)
}
