// eslint-disable-next-line import/no-anonymous-default-export
export default {
    name: 'events',
    title: 'Events',
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
            name: 'altText',
            title: 'Alternative picture Text',
            type: 'string',
            validation: (Rule) => Rule.required()
        },
        {
            name: 'eventLink',
            title: 'Event Link',
            type: 'string',
            validation: (Rule) => Rule.required()
        }
    ],
}
