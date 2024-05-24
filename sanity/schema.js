import positions from "./schema/documents/positions.js"
import archive from "./schema/documents/archive.js"
import members from "./schema/documents/members.js"
import events from "./schema/documents/events.js"
import questions from "./schema/documents/questions.js"
import eventPage from "./schema/documents/eventPage.js"
export const schema = {
  types: [archive, members, events, positions, eventPage, questions]
}


