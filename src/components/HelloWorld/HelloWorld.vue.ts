import { reactive } from "vue";

export default {
	props: {
		msg: String,
	},
	setup(props) {
		const state = reactive({ count: 0 });

		return { state };
	},
};