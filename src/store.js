// import { writable } from "svelte/store";

// export const useCounter = () => {
//     const {subscribe , update} = writable(0);

//     const  increment = (v) => update((n) => n + v)
//     const decrement = (v) => update((n) => n - v)

//     return {count : {subscribe} , increment , decrement }
// }
import { writable } from 'svelte/store';

function createCount() {
	const { subscribe, set, update } = writable(0);

	return {
		subscribe,
		increment: () => update((n) => n + 1),
		decrement: () => update((n) => n - 1),
		reset: () => set(0)
	};
}

export const count = createCount();
