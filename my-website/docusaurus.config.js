const lightCodeTheme = require('prism-react-renderer/themes/github');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
	title: 'Documentations',
	tagline: 'Lettria documentation & tutorials',
	url: 'https://lettria.com',
	baseUrl: '/documentation/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.png',
	organizationName: 'Lettria', // Usually your GitHub org/user name.
	projectName: 'documentation', // Usually your repo name.
	onBrokenLinks: 'ignore',
	presets: [
		[
			'@docusaurus/preset-classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					includeCurrentVersion:false
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css')
				}
			})
		]
	],

	themeConfig:
	/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
	({
		navbar: {
			title: '',
			logo: {
				alt: 'Lettria Site Logo',
				src: 'img/logo.png',
				href: 'https://lettria.com',
			},
			items: [
				{
					type: 'doc',
					docId: 'intro',
					position: 'left',
					label: 'Documentation'
				},
				{
					type: 'docsVersionDropdown',

				}
			
			]
		},
		footer: {
			logo: {
			  alt: 'Facebook Open Source Logo',
			  src: 'img/logo-footer.svg',
			  href: 'https://lettria.com',
			  width: 80,
			  height: 80,
			},
			// copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
			style: 'light',
			links: [
				{
					title: 'Solutions',
					items: [
						{
							label: 'Use Cases',
							to: 'https://www.lettria.com/solutions?type=use_case'
						},
						{
							label: 'Success Stories',
							to: 'https://www.lettria.com/solutions?type=success_story'
						},
						{
							label: 'Industry',
							to: 'https://www.lettria.com/solutions'
						}
					]
				},
				{
					title: 'Platform',
					items: [
						{
							label: 'Features',
							to: 'https://www.lettria.com/platform'
						},
						{
							label: 'Pricing',
							to: 'https://www.lettria.com/pricing'
						}
					]
				},
				{
					title: 'About',
					items: [
						{
							label: 'Our approach',
							to: 'https://www.lettria.com/about-us'
						}
					]
				},
				{
					title: 'Blog',
					items: [
						{
							label: 'Publications',
							to: 'https://www.lettria.com/blog'
						}
					]
				}
			],
		},
		prism: {
			theme: lightCodeTheme
		}
	})
});
