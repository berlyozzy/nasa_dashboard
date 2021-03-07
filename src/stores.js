import { writable } from 'svelte/store';
const d = new Date();

export const selected_camera = writable("FHAZ");
export const query_date = writable(`${d.getFullYear()}-${d.getDate()}-${d.getMonth()+1}`);