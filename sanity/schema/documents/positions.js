export default {
    name: 'positions',
    title: 'Positions',
    type: 'document',
    fields: [
        {
            name: 'positionName',
            title: 'Position Name',
            type: 'string',
            validation: (Rule) => Rule.required()
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            validation: (Rule) => Rule.required()
        },
        {
            name: 'alt',
            title: 'Alt',
            type: 'string',
            validation: (Rule) => Rule.required()
        },
        {
            name: 'positionDescriptionLink',
            title: 'Position Description Link',
            type: 'string',
            validation: (Rule) => Rule.required()
        },
        {
            name: 'applicationLink',
            title: 'Application Link',
            type: 'string',
            validation: (Rule) => Rule.required()
        }
    ],
}