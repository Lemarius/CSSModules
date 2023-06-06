import style from './container.module.css';

const Container = ({ src, alt, color, name, text }) => {
	return (
		<div className={`${style.container} ${style[color]}`}>
			<img className={style.containerimg} src={src} alt={alt} />
			<h2 className={style.containerh2}>{name}</h2>
			<p className={style.containerp}>{text}</p>
			<button className={`${style.button} ${style[color]}`}>Learn More</button>
		</div>
	);
};

export default Container;
