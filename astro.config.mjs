// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						{ label: 'Guía de Ejemplo', slug: 'guides/example' },
						{ label: 'Instalación de Node.js', slug: 'guides/instalacion' },
						{ label: 'Primeros pasos con Node.js', slug: 'guides/primeros-pasos' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
	image: {
    service: passthroughImageService()
  }
});
