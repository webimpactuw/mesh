// eslint-disable-next-line import/no-anonymous-default-export
export default {
    name: 'eventPage',
    title: 'Events Page',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required()
        },
        {
            name: 'date',
            title: 'Date',
            type: 'date',
            validation: (Rule) => Rule.required(),
            options: {
                dateFormat: 'MMMM Do, YYYY',
            }
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            validation: (Rule) => Rule.required()
        },
        {
            name: 'altText',
            title: 'Alternative Picture Text',
            type: 'string',
            validation: (Rule) => Rule.required()
        },
        {
            name: 'time',
            title: 'Time',
            type: 'string',
            validation: (Rule) => Rule.required()
        },
        {
            name: 'location',
            title: 'Location',
            type: 'string',
            validation: (Rule) => Rule.required()
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            validation: (Rule) => Rule.required()
        },
    ],
}
