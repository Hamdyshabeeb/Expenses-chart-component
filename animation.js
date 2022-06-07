export function chartAnimation() {
	const chartTimeLine = gsap.timeline({ duration: 0.5 });

	chartTimeLine
		.from('.white-section', {
			opacity: 0,
			ease: 'back',
			x: 100,
			rotate: 15,
			transformOrigin: 'top center',
		})
		.from(
			'.card-body-title',
			{
				x: -100,
				opacity: 0,
				ease: 'back',
			},
			'<0.3'
		)
		.from('.chart-day', {
			opacity: 0,
			stagger: 0.2,
			y: -30,
			color: '#000',
			ease: 'back',
			duration: 0.2,
		})
		.from(
			'.chart-bar',
			{
				scaleY: 0,
				stagger: 0.2,
				transformOrigin: '0 100%',
				ease: 'back',
			},
			'<0.2'
		)
		.from('.card-footer', {
			x: -100,
			opacity: 0,
			ease: 'back',
		})
		.from('.card-header', { x: 100, opacity: 0, ease: 'back' }, '<');
}
