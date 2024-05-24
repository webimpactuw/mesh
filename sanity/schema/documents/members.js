export default {
    name: 'members',
    title: 'Members',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule) => Rule.required()
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required()
        },
        {
            name: 'class',
            title: 'Class',
            type: 'string',
            validation: (Rule) => Rule.required()
        },
        {
            name: 'major',
            title: 'Major',
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
            name: 'date',
            title: 'Creation Date',
            type: 'datetime',
            validation: (Rule) => Rule.required()
        }
    ],
}
