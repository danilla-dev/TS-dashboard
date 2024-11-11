import React from 'react'
import { HStack, Fieldset, Input } from '@chakra-ui/react'
import { Field } from '../components/ui/field'
import { NativeSelectField, NativeSelectRoot } from '../components/ui/native-select'
import { useUsersData } from '../hooks/useUsersData'

const UsersTableFilterForm: React.FC = () => {
	const { filterUsersByStatus, filterUsersByName } = useUsersData()
	const selectCollection = ['All', 'Active', 'Inactive']

	return (
		<HStack className='table-filter-form' w='100%' p='1em 0'>
			<Fieldset.Root>
				<Fieldset.Content flexDirection='row' justifyContent='space-between'>
					<Field label='Name:' maxW='45%'>
						<Input
							type='text'
							placeholder='Search users'
							bgColor='background'
							onChange={e => filterUsersByName(e.target.value)}
						/>
					</Field>
					<Field label='Status:' maxW='45%'>
						<NativeSelectRoot>
							<NativeSelectField
								bgColor='background'
								name='status'
								items={selectCollection}
								onChange={e => filterUsersByStatus(e.target.value)}
							/>
						</NativeSelectRoot>
					</Field>
				</Fieldset.Content>
			</Fieldset.Root>
		</HStack>
	)
}

export default UsersTableFilterForm
