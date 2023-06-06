import Button from './components/button/Button';
import Container from './components/container/Container';

const App = () => {
	return (
		<>
			<div className='cards'>
				<Container
					src='/public/images/icon-sedans.svg'
					alt='Sedans'
					color='orange'
					name='SEDANS'
					text='Choose a sedan for its affordability and excellent fuel economy. Ideal
				for cruising in the city or on your next road trip.'
				/>
				<Container
					src='/public/images/icon-suvs.svg'
					alt='Suvs'
					color='darkcyan'
					name='SUVS'
					text='Take an SUV for its spacious interior, power, and versality. Perfect for your next family vacation and off-road adventures.'
				/>
				<Container
					src='/public/images/icon-luxury.svg'
					alt='Luxury'
					color='darkblue'
					name='LUXURY'
					text='Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style and motion.'
				/>
			</div>
		</>
	);
};

export default App;
