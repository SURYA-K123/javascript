class BaseMobile {
    validatePhoneNumber(number) {
        const pattern = /^[0-9]{10}$/;
        return pattern.test(number)
    }

    validateEmail(email){
        const pattern = /[a-z0-9.]+[@]([a-z]+.)+[a-z]$/;
        return pattern.test(email);
    }
    connectCall(context, myNumber, receiverNumber) {
        const p = context.querySelector("#call-status");
        const text = "call connected to <span>" + receiverNumber + "<span/> from <span>" + myNumber + "</span>";
        p.innerHTML = text;

    }
    sendMessage(context, receiverNumber, message) {
        const p = context.querySelector("#message-status");
        const text = "Message <span>\" " + message + "</span> send to the number <span>\" " + receiverNumber + "</span>";
        p.innerHTML = text;
    }
    sendEmail(context, senderEmail, receiverEmail, subject, body) {
        const p = context.querySelector("#email-status");
        const text = "Mail send to <span>"+receiverEmail+"</span> with the subject <span>"+subject+"</span> from <span>"+senderEmail+"</span>";
        p.innerHTML = text;
    }
}

export default BaseMobile;