function sendEmail() {
    var params = {
        name: document.getElementById("name").value,
        number: document.getElementById("number").value,
        message: document.getElementById("message").value,
    }

    const serviceID = "service_e4gjfmu";
    const templateID = "template_s85o54o";

    emailjs.send(serviceID, templateID, params)
        .then((res) => {
            document.getElementById("name").value = "";
            document.getElementById("number").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("We have received your message,thank you");
        })
        .catch((error) => console.log(error));
};


