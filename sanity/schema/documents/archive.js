export default {
    name: 'archive',
    title: 'Archive',
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
            type: 'datetime',
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
            title: 'Alt Text',
            type: 'string',
            validation: (Rule) => Rule.required()
        },
        {
            name: 'programLink',
            title: 'Link to Event Program',
            type: 'string',
            validation: (Rule) => Rule.required()
        }
    ],
}
