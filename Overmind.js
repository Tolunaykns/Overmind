
function sendRequest(url, data, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        callback(JSON.parse(xhr.responseText));
      }
    };
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(data));
  }
  
  var username = "joe_shmoe";
  var param2 = "Joe";
  
  var userProfileData = {
    username: username,
    param2: param2
  };
  
  var serverEndpoint = "https://example.com/createProfile";
  
  sendRequest(serverEndpoint, userProfileData, function(response) {
    if (response.success) {
      console.log("User logged in successfully");
    } else {
      console.error("Error creating profile:", response.error);
    }
  });
  