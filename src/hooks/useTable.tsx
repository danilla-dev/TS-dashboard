import React, { useState, useEffect } from 'react'
import { useUsersData } from '../hooks/useUsersData'
import { paginateData } from '../utils/tableUtils'

export const useTable = () => {
	const { filteredData } = useUsersData()
	const [page, setPage] = useState(1)
	const itemsPerPage = 20

	if (!filteredData) {
		console.log('Skeleton in future')
		return null
	}
	const pageData = paginateData(filteredData, page, itemsPerPage)

	useEffect(() => {
		if (page > Math.ceil(filteredData.length / itemsPerPage)) {
			setPage(1)
		}
	}, [filteredData])

	const handleChangeNextPage = () => {
		setPage(prev => prev + 1)
	}
	const handleChangePrevPage = () => {
		setPage(prev => prev - 1)
	}
	const handleChangePage = (e: React.MouseEvent<HTMLButtonElement>) => {
		setPage(Number(e.currentTarget.textContent))
	}
	return { pageData, handleChangeNextPage, handleChangePrevPage, handleChangePage, filteredData, page, itemsPerPage }
}
