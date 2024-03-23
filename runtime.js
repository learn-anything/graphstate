/** @typedef {string     } String */
/** @typedef {string & {}} ID */
/** @typedef {number     } Int */
/** @typedef {number     } Float */
/** @typedef {boolean    } Boolean */

/**
 * @template T
 * @typedef {T | null} Maybe
 */

/**
 * @template TVars
 * @template TValue
 * @typedef  {object} Query_Data
 * @property {string} name
 * @property {string} query
 * @property {TVars } _type_vars
 * @property {TValue} _type_value
 */
