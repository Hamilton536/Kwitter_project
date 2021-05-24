var firebaseConfig = {
  apiKey: "AIzaSyBDkzoVeB0ciSoLHSKstZT0t2DPnHzwWFw",
  authDomain: "kwitter-project-11a55.firebaseapp.com",
  databaseURL: "https://kwitter-project-11a55-default-rtdb.firebaseio.com",
  projectId: "kwitter-project-11a55",
  storageBucket: "kwitter-project-11a55.appspot.com",
  messagingSenderId: "240126971303",
  appId: "1:240126971303:web:6388e694453938b6befa82",
  measurementId: "G-EJ5M84KXE5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "welcome " + user_name + "!";
    
  function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot) {
       childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout(){
  localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location.replace("index.html");
}