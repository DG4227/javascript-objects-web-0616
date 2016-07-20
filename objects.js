var playlist = {"Phil Ochs": "Here's to the State of Mississippi"}

function updatePlaylist(object, artist, song) {
	return Object.assign({}, playlist, { [artist]: song })
}

function removeFromPlaylist(object, artist) { 
	delete object[artist]

	return object
}