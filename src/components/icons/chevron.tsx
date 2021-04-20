import React from 'react'

const ChevronIcon: React.FC<{name: string}> = (props) => {
	switch (props.name) {
		case 'chevron-left':
			return (
				<svg {...props} focusable='false' viewBox='0 0 24 24' aria-hidden='true'>
					<path fill='currentColor' d='M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z'></path>
				</svg>
			)
		case 'chevron-right':
			return (
				<svg {...props} focusable='false' viewBox='0 0 24 24' aria-hidden='true'>
					<path fill='currentColor' d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'></path>
				</svg>
			)
		case 'chevron-down':
			return (
				<svg {...props} focusable='false' viewBox='0 0 24 24' aria-hidden='true'>
					<path fill='currentColor' d='M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z'></path>
				</svg>
			)
		case 'chevron-up':
			return (
				<svg {...props} focusable='false' viewBox='0 0 24 24' aria-hidden='true'>
					<path fill='currentColor' d='M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z'></path>
				</svg>
			)
		default:
			throw new Error('Icon not found')
	}
}

export default ChevronIcon
