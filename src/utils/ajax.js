const sendData = (formData) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://localhost:9090/api/registration', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onreadystatechange = () => {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                const response = JSON.parse(xhr.responseText);
                resolve(response);
            }
        };
        xhr.send(JSON.stringify(formData));
    });
};

export default sendData;
