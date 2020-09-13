export const classList = (classes: object) => {
    return Object.entries(classes)
        .filter(entry => entry[1])
        .map(entry => entry[0])
        .join(' ')
}

export const sleep = (ms = 0): Promise<any> => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

// prettier-ignore
export function curry
<T extends any[], R> (fn: (...args: T) => R):
<T extends any[]>(...args: T) => any {
    const arity = fn.length

    return function $curry (...args) {
        if (args.length < arity) {
            return curry.bind(null, ...args)
        }

        return fn.call(null, ...args as any)
    }
}
