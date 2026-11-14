# How to Add Your Photos

Place your photos inside the `public/photos/` folder.

Then open `data/birthday-content.ts` and update the `gallery` array with the correct filenames:

```ts
{ id: 1, src: "/photos/your-photo.jpg", caption: "Your caption here", date: "2024", rotation: -3 },
```

## Supported formats
- `.jpg` / `.jpeg`
- `.png`
- `.webp`

## How to enable images in GallerySection

In `components/GallerySection.tsx`, inside the `PhotoPlaceholder` component:

1. Remove the placeholder `<div>` block.
2. Uncomment the `<Image ... />` block below it.

That's it! The same applies to `FinalSection.tsx` for the closing photo.
