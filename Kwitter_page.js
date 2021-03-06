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
    room_name = localStorage.getItem("room_name");

    function send(){

      msg = document.getElementById("msg").value;
     firebase.database().ref(room_name).push({ 
           name : user_name,
           message : msg,
           like : 0
     });

     document.getElementById("msg").value = "";
     }


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
        message_id = childKey;
         message_data = childData;
       console.log(message_id);
       console.log(message_data);
       name1 = message_data['name'];
       message = message_data['message'];
       likes = message_data['like'];
      name_tag = "<h4>"+name1+"<img src='tick.gif' class='user_tick'></h4>";
      message_tag = "<h4 class='message_h4'>"+message+"</h4>";
      like_button = "<button class='btn btn-primary' id="+message_id+" value="+likes+" onclick='update(this.id)'>";
      thumbs = "<span class='glyphicon glyphicon-thumbs-up'>like:"+likes+"</span></button><hr>";
      row = name_tag+message_tag+like_button+thumbs;
      document.getElementById("output").innerHTML+=row;

     } });  }); }
getData();

function update(id){
console.log(id);
button_id = id;
like = document.getElementById(button_id).value;
updated_like = Number(like)+1;
firebase.database().ref(room_name).child(id).update({
      like:updated_like
});
}


function logout(){

      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";

}