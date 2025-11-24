import { CollectionConfig } from "payload";

export const Adds: CollectionConfig = {
    slug: "adds",
    access: {
        read: ()=> true,
    },
    fields: [
        {
            name: "title",
            type: "text",
            required: true,
        },
        {
            name: "price",
            type: "number",
            required: true,
        },
        {
            name: "photo",
            type: "upload",
            relationTo: "media",
            required: true,
        },
    ],
}