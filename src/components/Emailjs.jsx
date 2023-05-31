let templateParams = {
    from_name: '',
    user_name: '!',
    message:'',
    destinatario:'', 
};

export const sendEmail = () => {
    emailjs.send('service_rc45sbr', 'template_rzffwmp', templateParams)
    .then(function(response) {
    console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
    console.log('FAILED...', error);
    });
}
