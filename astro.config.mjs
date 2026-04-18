// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    fonts: [{
        provider: fontProviders.local(),
        name: "Brownist",
        cssVariable: "--font-brownist",
        options: {
            variants: [{
                src: ['./src/assets/fonts/Brownist-Regular.woff2'],
                weight: 'normal',
                style: 'normal',
            }]
        }
    },{
        provider: fontProviders.local(),
        name: "Bubble Boop",
        cssVariable: "--font-bubble-boop",
        options: {
            variants: [{
                src: ['./src/assets/fonts/BubbleBoop-Regular.woff2'],
                weight: 'normal',
                style: 'normal',
            }]
        }
    },{
        provider: fontProviders.local(),
        name: "Jojoba",
        cssVariable: "--font-jojoba",
        options: {
            variants: [{
                src: ['./src/assets/fonts/Jojoba-Regular.woff2'],
                weight: 'normal',
                style: 'normal',
            }]
        }
    },{
        provider: fontProviders.local(),
        name: "Pencil Child",
        cssVariable: "--font-pencil-child",
        options: {
            variants: [{
                src: ['./src/assets/fonts/PencilChild-Regular.woff2'],
                weight: 'normal',
                style: 'normal',
            }]
        }
    }]
});
