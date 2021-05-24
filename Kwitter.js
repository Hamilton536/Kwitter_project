function addUser()
{
    user_input = document.getElementById("user_name").value;
    
    if(user_input == "")
    {
        alert('Display Name input is empty!');
    }
    else
    {
        user_name = document.getElementById("user_name").value;

        localStorage.setItem("user_name", user_name);
       
        window.location = "Kwitter_room.html";
    }
}