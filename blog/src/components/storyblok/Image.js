const Image = ({ blok }) => {
	// return <img src={blok.src} alt={blok.alt} style={blok.style + "margin-bottom: 20px;"} />;
	return <img {...blok} />;
};

export default Image;
