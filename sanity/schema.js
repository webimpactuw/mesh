import positions from "./schema/documents/positions.js"
import archive from "./schema/documents/archive.js"
import members from "./schema/documents/members.js"
import events from "./schema/documents/events.js"
export const schema = {
  types: [archive, members, events, positions]
}
