const Image = ({ blok }) => {
	return <img src={blok.src} alt={blok.alt} style={blok.style + "margin-bottom: 20px;"} />;
};

export default Image;
