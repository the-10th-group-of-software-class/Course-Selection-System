/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Student = {
    properties: {
        name: {
            type: 'string',
            isRequired: true,
        },
        student_id: {
            type: 'string',
            isRequired: true,
        },
        id: {
            type: 'any-of',
            contains: [{
                type: 'number',
            }, {
                type: 'null',
            }],
        },
        email: {
            type: 'string',
            isRequired: true,
        },
        major: {
            type: 'string',
            isRequired: true,
        },
    },
} as const;
