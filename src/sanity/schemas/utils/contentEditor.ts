import { defineType } from "sanity";

export default defineType({
    name: "contentEditor",
    type: "array",
    of: [
        {type: 'block'},
        {type: 'image'}
    ]
})