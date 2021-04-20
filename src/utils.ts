export const classList = (classes: object) => {
	return Object.entries(classes)
		.filter((entry) => entry[1])
		.map((entry) => entry[0])
		.join(' ')
}

export function curry<T extends any[], R>(fn: (...args: T) => R): <T extends any[]>(...args: T) => any {
	const arity = fn.length

	return function $curry(...args) {
		if (args.length < arity) {
			return curry.bind(null, ...args)
		}

		return fn.call(null, ...(args as any))
	}
}

export const size = {
	mobileS: 320,
	mobileM: 375,
	mobileL: 425,
	tablet: 768,
	laptop: 1024,
	laptopL: 1440,
	desktop: 2560
}
export const device = {
	mobileS: `(max-width: ${size.mobileS}px)`,
	mobileM: `(max-width: ${size.mobileM}px)`,
	mobileL: `(max-width: ${size.mobileL}px)`,
	tablet: `(max-width: ${size.tablet}px)`,
	laptop: `(max-width: ${size.laptop}px)`,
	laptopL: `(max-width: ${size.laptopL}px)`,
	desktop: `(max-width: ${size.desktop}px)`,
	desktopL: `(max-width: ${size.desktop}px)`
}
