<script>

	import Gallery from "./components/image_gallery.svelte";

	let cameras = {"FHAZ" : [], "RHAZ" : [], "MAST" : [], "CHEMCAM" : [], "MAHLI" : [], "MARDI" : [], "NAVCAM" : []}

	const requestOptions = {
			method: 'GET',
			redirect: 'follow'
	};

	function GetData(){

		fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2021-2-3&api_key=eMBfXfG5KfgFjM8jkZqGdPo5b5nA2vMJMr9ab387", requestOptions)
			.then(response => response.json())
			.then(result => FilterData(result))
			.catch(error => console.log('error', error));
	}

	function FilterData(data){
		for(const photo of data.photos)
		{

			switch(photo.camera.name) {
				case "FHAZ":
					cameras.FHAZ.push(photo);
					break;
				case "RHAZ":
					cameras.RHAZ.push(photo);
					break;
				case "MAST":
					cameras.MAST.push(photo);
					break;
				case "CHEMCAM":
					cameras.CHEMCAM.push(photo);
					break;
				case "MAHLI":
					cameras.MAHLI.push(photo);
					break;
				case "MARDI":
					cameras.MARDI.push(photo);
					break;
				case "NAVCAM":
					cameras.NAVCAM.push(photo);
					break;
			}
		}

		cameras = cameras;

		console.log(cameras)
	}

	GetData();


</script>

<main>
	<Gallery list={cameras.NAVCAM}/>
</main>