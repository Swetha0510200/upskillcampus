function publishPost() {

    var title = document.getElementById("title").value;
    var content = document.getElementById("content").value;

    if(title === "" || content === "") {
        alert("Please fill all fields");
    } 
    else {
        alert("Post Published Successfully!");
    }

}
