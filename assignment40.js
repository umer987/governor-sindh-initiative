function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_album('atif', '21');
var album2 = make_album('Sheehran', 'saleem', 12);
var album3 = make_album('youngstunner', '2020', 16);
console.log(album1);
console.log(album2);
console.log(album3);
