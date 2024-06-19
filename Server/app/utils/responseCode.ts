/* eslint-disable @typescript-eslint/no-explicit-any */
export const ErrorCodes = {
	INTERNAL_SERVER_ERROR: {
		status: 500,
		code: 100,
		message: 'Internal server error.',
	},
	UNAUTHORIZED: { status: 401, code: 101, message: 'Unauthorized.' },
	ADMIN_UNAUTHORIZED: {
		status: 401,
		code: 101,
		message: 'Unauthorized role.',
	},
	BAD_REQUEST: { status: 400, code: 102, message: 'Bad request.' },
	REFRESH_VALIDITY_EXPIRED: {
		status: 401,
		code: 103,
		message: 'Refresh validity expired',
	},
	INVALID_CREDENTIALS: {
		status: 400,
		code: 104,
		message: 'Invalid credentials.',
	},
	GENERATE_BAD_REQUEST: (errorDescription: string) => {
		return { ...ErrorCodes.BAD_REQUEST, errorDescription };
	},

	MISSING_PERMISSION: {
		status: 403,
		code: 103,
		message: 'Missing permission.',
	},

	INACTIVE_USER: {
		status: 401,
		code: 104,
		message: 'Your account has been deactivated by the admin.',
	},

	ID_REQUIRED: { status: 400, code: 1000, message: 'Id is required.' },

	MONTH_YEAR_REQUIRED: {
		status: 400,
		code: 201,
		message: 'Month and year required.',
	},

	INVALID_ID: { status: 400, code: 1001, message: 'Invalid id.' },

	USER_NOT_FOUND: { status: 400, code: 1002, message: 'User not found.' },

	USER_NOT_VERIFIED: { status: 400, code: 1003, message: 'User not verified.' },

	INVALID_PASS_OR_EMAIL: { status: 400, code: 1004, message: 'Invalid credentials' },

	ROLE_IS_NOT_ACTIVE: { status: 400, code: 1005, message: 'Role is not active' },

	INVALID_TOKEN: { status: 400, code: 1006, message: 'Invalid token' },

	SAME_PASSWORD: { status: 400, code: 1007, message: 'Old password and new password can not be same' },

	ROLE_NOT_FOUND: { status: 400, code: 1008, message: 'Role not found' },

	CAN_NOT_EDIT_ROLE: { status: 400, code: 1009, message: 'Can not edit super admin role' },

	USER_ALREADY_EXISTS: { status: 400, code: 1010, message: 'User already exists.' },

	CAN_NOT_ASSIGN_ROLE: { status: 400, code: 1011, message: 'Can not assign super admin role' },

	CAN_NOT_EDIT_USER: { status: 400, code: 1012, message: 'Can not edit super admin user' },

	INVALID_WOOCOMMERCE_CREDENTIALS: { status: 400, code: 1013, message: 'Invalid credentials' },

	INVALID_XERO_CALLBACK: { status: 400, code: 1014, message: 'Invalid xero callback' },

	INVALID_HUBSPOT_CREDENTIALS: { status: 400, code: 1015, message: 'Invalid credentials' },

};

export const ValidationMessages = {
	GENERATE_INVALID_INPUT: (arr: any) =>
		`- invalid input, possible values: ${arr.join(', ')}`,
	NOT_EMPTY: 'must not be null.',
	MUST_BE_ARRAY: 'must be array.',
	NOT_EMPTY_ARRAY: 'are required.',
	INVALID_INPUT: '- invalid input.',
	MUST_BE_BOOLEAN: '- must be not null boolean.',
	MUST_BE_NUMBER: '- must be number.',
	MUST_BE_NUMBER_GTE_1: '- must be number greater than or equal to 1.',
	MIN_VALUE: '- minimum value must be ',
	NOT_EMPTY_BODY_ARRAY: 'body must be a non empty array.',
};

export const BaseResponse = (result: any) => {
	// console.log('object', result);
	return { ...result, responseStatus: 200 };
};