import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
	{
		title: 'Get your API key',
		svgUrl: "https://www.lettria.com/img/exp_modo.svg",
		cta: 'Get started',
		href: '/documentation/docs/intro#getting-you-api-key',
		description: (
			<>
				In order to start using the Lettria API you'll need to get an API key.
				<br/>
				Then you can install the API and start using the Lettria API and all it's features.
			</>
		),
	},
	{
		title: 'Using the API',
		svgUrl: "https://www.lettria.com/img/exp_comp.svg",
		cta: 'API ressources',
		href: '/documentation/docs/API/lettria-sentence-object',
		description: (
			<>
				In order to get the most out of the API you'll need to know all the tools available.
				<br/>
				Browse our documentation and get familiar with the Lettria API.
			</>
		),
	},
	{
		title: 'Tutorials',
		svgUrl: "https://www.lettria.com/img/exp_struct.svg",
		cta: 'Read our tutorials',
		href: '/documentation/docs/Tutorials/API/pos-tagger',
		description: (
			<>
				Not sure where to start?
				<br/>
				Take a look at our tutorials to see what tools the Lettrai library contains to make your document analysis easier.
			</>
		),
	},
];

function Feature({svgUrl, title, description, href, cta}) {
	return (
		<div className={clsx('col col--4 ')}>
			<div className='home-feature'>
				{/* <img src={svgUrl} className={styles.featureSvg} alt={title} /> */}
				<div className={styles.textContainer}>
					<h3 className={styles.featureTitle}>{title}</h3>
					<p style={{opacity: .7}}>{description}</p>
				</div>
				<a href={href}>
					<div className={'button ' + styles.cta}>
						{cta}
					</div>
				</a>
			</div>
		</div>
	);
}

export default function HomepageFeatures() {
	return (
		<section className='home-features'>
			<div className="container">
				<div className="row">
					{FeatureList.map((props, idx) => (
						<Feature key={idx} {...props} />
					))}
				</div>
			</div>
		</section>
	);
}
