import React, { useState, useEffect } from 'react'
import { useUsersData } from '../hooks/useUsersData'

export const useTable = () => {
	const { filteredData } = useUsersData()
	const [page, setPage] = useState(1)
	const itemsPerPage = 20

	if (!filteredData) {
		console.log('Skeleton in future')
		return null
	}
	const startIndex = (page - 1) * itemsPerPage
	const endIndex = startIndex + itemsPerPage
	const pageData = filteredData.slice(startIndex, endIndex)

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
