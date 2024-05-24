export default {
    name: 'questions',
    title: 'Questions',
    type: 'document',
    fields: [
        {
            name: 'question',
            title: 'Question',
            type: 'string',
            validation: (Rule) => Rule.required()
        },
        {
            name: 'answer',
            title: 'Answer',
            type: 'string',
            validation: (Rule) => Rule.required()
        },
        {
            name: 'createDate',
            title: 'Creation Date',
            type: 'datetime',
            validation: (Rule) => Rule.required()
        }
    ],
}
