<script>
	import Gallery from "./components/image_gallery.svelte";
	import Menu from "./components/Menu.svelte";
	import { selected_camera, query_date } from './stores.js';

	let cameras = {"FHAZ" : [], "RHAZ" : [], "MAST" : [], "CHEMCAM" : [], "MAHLI" : [], "MARDI" : [], "NAVCAM" : []}

	const requestOptions = {
		method: 'GET',
		redirect: 'follow'
	};

	function GetData(){

		const reqeustURL = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${$query_date}&api_key=eMBfXfG5KfgFjM8jkZqGdPo5b5nA2vMJMr9ab387`;
		console.log(reqeustURL);

		fetch(reqeustURL, requestOptions)
			.then(response => response.json())
			.then(result => FilterData(result))
			.catch(error => console.log('error', error));
	}

	// GetData($query_date);

	function FilterData(data){

		console.log(data)
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

</script>

<main class="has-background-black-ter">
	<p style="position: absolute; color: red; z-index: 100; padding: 10px">{$selected_camera} : {$query_date}</p>
	<Menu rover_cameras={Object.keys(cameras)} on:query={GetData}/>
	<Gallery image_list={cameras[`${$selected_camera}`]}/>
</main>

<style>
	main{
		width: 100vw;
		height: 100vh;
	}
</style>