import { Box, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'

const AsideBarMenu = () => {
	const isDesktop = useBreakpointValue({ base: false, lg: true })
	console.log(isDesktop)
	return <Box id='aside-menu' className='aside-bar-menu' bgColor='secondary' minW={200} minH='100vh'></Box>
}

export default AsideBarMenu
