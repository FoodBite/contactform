// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyADpc2g7KKcApHlwVs2ZUkYh2a6jofYz8o",
    authDomain: "contactform-4a766.firebaseapp.com",
    databaseURL: "https://contactform-4a766.firebaseio.com",
    projectId: "contactform-4a766",
    storageBucket: "",
    messagingSenderId: "426506204986",
    appId: "1:426506204986:web:ca13d103d18a3ae4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var MyUsers = firebase.database().ref('MyData');
function validate() {
            
            let name = document.querySelector('#name').value;
            let pass = document.querySelector('#pass').value;
            if (name == "" || pass == "") {
                alert("please submit both fields");
            } else {
                document.querySelector('#name').value = '';
                document.querySelector('#pass').value = '';
                let newData= MyUsers.push();
                newData.set({
                    Name : name,
                    Password:pass
                });

            }
             
        }