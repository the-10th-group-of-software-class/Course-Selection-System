/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ListResp_Teacher_ = {
    properties: {
        data: {
            type: 'any-of',
            contains: [{
                type: 'array',
                contains: {
                    type: 'Teacher',
                },
            }, {
                type: 'null',
            }],
        },
        count: {
            type: 'number',
            isRequired: true,
        },
    },
} as const;