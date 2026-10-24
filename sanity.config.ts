import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { presentationTool } from "sanity/presentation";
import { media } from "sanity-plugin-media";
import { colorInput } from "@sanity/color-input";

import schemas from '@/src/sanity/schemas';
import pageSettings from '@/src/sanity/schemas/document/page-settings';

// Plugins to display on Sanity Studio
const plugins = [
    structureTool({
        structure: (S) => {
          
          // Page Settings Singleton
          const PageSettingsListItem = S.listItem()
            .title(pageSettings.title || 'Page Settings')
            .child(
              S.editor()
                .id(pageSettings.name)
                .schemaType(pageSettings.name)
                .documentId(pageSettings.name)
            );
          
          // Main content types (pages, blog, portfolio, services)
          const mainContentItems = S.documentTypeListItems().filter((listItem) => {
            const listItemID = listItem.getId();
            return (
              listItemID &&
              ['page', 'blog', 'work', 'service'].includes(listItemID)
            );
          });

          // Other content types (navigation, testimonials, etc.)
          const otherContentItems = S.documentTypeListItems().filter((listItem) => {
            const listItemID = listItem.getId();
            return (
              listItemID &&
              !['media.tag', 'page', 'blog', 'work', 'service', pageSettings.name].includes(listItemID)
            );
          });
          
          return S.list()
            .title('Content')
            .items([
              PageSettingsListItem, 
              S.divider(), 
              ...mainContentItems, 
              S.divider(), 
              ...otherContentItems
            ])
        },
    }),
    presentationTool({
        previewUrl: {
          origin: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
          preview: '/',
          previewMode: {
            enable: '/api/draft-mode/enable',
          },
        },
    }),
    media(),
    colorInput(),
]

export const config = defineConfig({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "",
    title: process.env.NEXT_PUBLIC_WEBSITE_TITLE,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_V,
    basePath: process.env.NEXT_PUBLIC_SANITY_STUDIO_URL,
    plugins,
    schema: { types: schemas },
})