const BASE_URL = 'https://thatcopy.pw/catapi/rest/';

const getCats = async () => {
		const data = await fetch(BASE_URL)
		.then(res => res.jason())
		.catch(e => console.log(e))

		return data.webpurl;

	
		console.log(e.message);
	
};

const loadImg = async () => {
	const img = document.getElementsByTagName('img')[0];
	img.src = await getCats();
};

loadImg();

const btn = document.getElementById('change-cat');
btn.addEventListener('click', loadImg);