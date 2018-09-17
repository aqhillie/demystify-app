const initialState = {
	width: 320,
	height: 240,
	color: {
		r: 15,
		g: 237,
		b: 183
	},
	fps: 60,
	speed: 5,
	trailLength: 33,
	numPoints: 5
}

export default function mystify(state = initialState, action) {
	switch(action.type) {
		case 'SET_FPS':
			return {
				...state,
				fps: action.fps
			};
		case 'SET_SPEED':
			return {
				...state,
				speed: action.speed / 10
			};
		case 'SET_TRAIL_LENGTH':
			return {
				...state,
				trailLength: action.trailLength
			};
		case 'SET_NUMBER_OF_POINTS':
			return {
				...state,
				numPoints: action.numPoints
			};
		case 'SET_SIZE':
			return {
				...state,
				width: action.size.width,
				height: action.size.height
			};
		case 'SET_COLOR':
			return {
				...state,
				color: action.color
			};
		default:
			return state;
	}
}
