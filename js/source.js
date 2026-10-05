// *********************************************************************
// Homework 4 APIs
// *********************************************************************

function convertMsToMinSec(ms) {
  const minutes = Math.floor(ms / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  const paddedSeconds = String(seconds).padStart(2, '0');
  return `${minutes}:${paddedSeconds}`;
}

// **************** Update code below  **************** 


// Spotify ID and Access Token
localStorage.setItem("artist_id", "0elWFr7TW8piilVRYJUe4P");
localStorage.setItem("access_token", "");
localStorage.setItem("track_id_1", "71YaqakPUZh3cnMYmuE5Oh");
localStorage.setItem("track_id_2", "04QX4SHRnYuMj5PffvG0dA");
localStorage.setItem("track_id_3", "7JZCzh0bOodHRR4ctUdWft");
localStorage.setItem("album_id_1", "0Pr7tJefVMQCh8hy1n8OLr");
localStorage.setItem("album_id_2", "4TATXEH2tnZVTqlyURoWUR");
localStorage.setItem("album_id_3", "507VZINfvVEAyrcPbJuOVU");
localStorage.setItem("album_id_4", "2irmTvrbuG1ox2Qa6R8J1L");

async function load(){
    
    let artistID = localStorage.getItem("artist_id");
    let accessToken = localStorage.getItem("access_token");
    let trackID1 = localStorage.getItem("track_id_1");
    let trackID2 = localStorage.getItem("track_id_2");
    let trackID3 = localStorage.getItem("track_id_3");
    let albumID1 = localStorage.getItem("album_id_1");
    let albumID2 = localStorage.getItem("album_id_2");
    let albumID3 = localStorage.getItem("album_id_3");
    let albumID4 = localStorage.getItem("album_id_4");

const response = await fetch(
    `https://api.spotify.com/v1/artists/${artistID}`,
    {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    }
);

const artist = await response.json();
document.querySelector("#artist-name").textContent = artist.name;
document.querySelector(".artist-image img").src = artist.images[0].url;
const trackResponse1 = await fetch(
    `https://api.spotify.com/v1/tracks/${trackID1}`,
    {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    }
);

const track1 = await trackResponse1.json();
const tracks = document.querySelectorAll(".track");

tracks[0].querySelector("img").src = track1.album.images[0].url;
tracks[0].querySelector(".track-title").textContent = track1.name;
tracks[0].querySelector(".track-album").textContent = track1.album.name;
tracks[0].querySelector(".track-number").textContent = track1.track_number;
tracks[0].querySelector(".track-duration").textContent = convertMsToMinSec(track1.duration_ms);

const trackResponse2 = await fetch(
    `https://api.spotify.com/v1/tracks/${trackID2}`,
    {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    }
);

const track2 = await trackResponse2.json();

tracks[1].querySelector("img").src = track2.album.images[0].url;
tracks[1].querySelector(".track-title").textContent = track2.name;
tracks[1].querySelector(".track-album").textContent = track2.album.name;
tracks[1].querySelector(".track-number").textContent = track2.track_number;
tracks[1].querySelector(".track-duration").textContent = convertMsToMinSec(track2.duration_ms);

const trackResponse3 = await fetch(
    `https://api.spotify.com/v1/tracks/${trackID3}`,
    {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    }
);

const track3 = await trackResponse3.json();

tracks[2].querySelector("img").src = track3.album.images[0].url;
tracks[2].querySelector(".track-title").textContent = track3.name;
tracks[2].querySelector(".track-album").textContent = track3.album.name;
tracks[2].querySelector(".track-number").textContent = track3.track_number;
tracks[2].querySelector(".track-duration").textContent = convertMsToMinSec(track3.duration_ms);

const albumResponse1 = await fetch(
    `https://api.spotify.com/v1/albums/${albumID1}`,
    {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    }
);

const album1 = await albumResponse1.json();

const albums = document.querySelectorAll(".album-card");

albums[0].querySelector("img").src = album1.images[0].url;
albums[0].querySelector("h3").textContent = album1.name;
albums[0].querySelector("p").textContent = `${album1.release_date} • ${album1.album_type}`;

const albumResponse2 = await fetch(
    `https://api.spotify.com/v1/albums/${albumID2}`,
    {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    }
);

const album2 = await albumResponse2.json();

albums[1].querySelector("img").src = album2.images[0].url;
albums[1].querySelector("h3").textContent = album2.name;
albums[1].querySelector("p").textContent = `${album2.release_date} • ${album2.album_type}`;

const albumResponse3 = await fetch(
    `https://api.spotify.com/v1/albums/${albumID3}`,
    {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    }
);

const album3 = await albumResponse3.json();

albums[2].querySelector("img").src = album3.images[0].url;
albums[2].querySelector("h3").textContent = album3.name;
albums[2].querySelector("p").textContent = `${album3.release_date} • ${album3.album_type}`;

const albumResponse4 = await fetch(
    `https://api.spotify.com/v1/albums/${albumID4}`,
    {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    }
);

const album4 = await albumResponse4.json();

albums[3].querySelector("img").src = album4.images[0].url;
albums[3].querySelector("h3").textContent = album4.name;
albums[3].querySelector("p").textContent = `${album4.release_date} • ${album4.album_type}`;
}
load();


   