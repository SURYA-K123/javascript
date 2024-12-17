import BaseMobile from "./BaseMobile.js";

class Android extends BaseMobile {
    constructor(navigator, context) {
        super();
        this.context = context;
        this.navigator = navigator;
        this.navigationStack = [context.querySelector(".android-configuration")];
        this.appSection = context.querySelector(".app-section")
        this.callSection = context.querySelector(".call-section");
        this.messageSection = context.querySelector(".message-section");
        this.emailSection = context.querySelector(".email-section");
        this.skypeSection = context.querySelector(".skype-section");
        this.backbutton = context.querySelector(".android-back-button");
        this.phoneNumber = null;
        this.email = null;
        this.skypeId = null;
        this.addEventListeners();
    }

    configureSystem(){
        const phoneNumber = this.context.querySelector("#phone-number").value;
        const email = this.context.querySelector("#email-id").value;
        const skypeId = this.context.querySelector("#skype-id").value;
        if(!super.validatePhoneNumber(phoneNumber)){
            window.alert("Enter the valid phone number");
            return false;        
        }
        if(!super.validateEmail(email)){
            window.alert("Enter the valid email Id");
            return false;  
        }
        if(!super.validatePhoneNumber(skypeId)){
            window.alert("Enter the valid skype id");
            return false;
        }
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.skypeId = skypeId;
        return true;
    }
    
    connectSkypeAudioCall(receiverSkypeId){
        if(!super.validatePhoneNumber(receiverSkypeId)){
            window.alert("Enter the receiver skype Id");
            return;
        }
        const skypeStatus = this.skypeSection.querySelector("#skype-call-status");
        const text = "Audio call connected to <span>"+ receiverSkypeId + "</span>";
        skypeStatus.innerHTML = text; 
    }

    connectSkypeVideoCall(receiverSkypeId){
        if(!super.validatePhoneNumber(receiverSkypeId)){
            window.alert("Enter the receiver skype Id");
            return;
        }
        const skypeStatus = this.skypeSection.querySelector("#skype-call-status");
        const text = "Video call connected to <span>"+ receiverSkypeId + "</span>";
        skypeStatus.innerHTML = text;
    }

    addEventListeners() {
        this.context.querySelector(".call").addEventListener("click", () => {
            this.navigationStack[this.navigationStack.length - 1].classList.remove("active");
            this.callSection.classList.add("active");
            this.navigationStack.push(this.callSection);            
        })
        this.context.querySelector(".message").addEventListener("click", () => {
            this.navigationStack[this.navigationStack.length - 1].classList.remove("active");
            this.messageSection.classList.add("active");
            this.navigationStack.push(this.messageSection);
        })
        this.context.querySelector(".email").addEventListener("click", () => {
            this.navigationStack[this.navigationStack.length - 1].classList.remove("active");
            this.emailSection.classList.add("active");
            this.navigationStack.push(this.emailSection);
        })

        this.context.querySelector(".skype").addEventListener("click", () => {
            this.navigationStack[this.navigationStack.length - 1].classList.remove("active");
            this.skypeSection.classList.add("active");
            this.navigationStack.push(this.skypeSection);
        })

        this.context.querySelector(".configure").addEventListener("click", ()=>{
            if(!this.configureSystem()){
                return;
            }
            this.navigationStack[this.navigationStack.length - 1].classList.remove("active");
            this.appSection.classList.add("active");
            this.navigationStack.push(this.appSection);
        })

        this.callSection.querySelector("#connect-call").addEventListener("click", ()=>{
            const receiverNumber = this.callSection.querySelector("#receiver-phone-number").value;
            if(super.validatePhoneNumber(receiverNumber)){
                super.connectCall(this.callSection, this.phoneNumber, receiverNumber);
            } else{
                window.alert("Enter the valid receiver number");
            }
        })

        this.messageSection.querySelector("#send-message").addEventListener("click", ()=>{
            const receiverNumber = this.messageSection.querySelector("#message-receiver-phone-number").value;
            const messageText = this.messageSection.querySelector("#message-text").value;
            if(super.validatePhoneNumber(receiverNumber)){
                super.sendMessage(this.messageSection, receiverNumber, messageText);
            } else{
                window.alert("Enter the valid receiver number");
            }
        })

        this.emailSection.querySelector("#send-email").addEventListener("click", ()=>{
            const receiverEmail = this.emailSection.querySelector("#receiver-email").value;
            const emailSubject = this.emailSection.querySelector("#email-subject").value;
            const emailBody = this.emailSection.querySelector("#email-body").value;
            if(super.validateEmail(receiverEmail)){
                super.sendEmail(this.context, this.email, receiverEmail, emailSubject, emailBody);
            }
            else{
                window.alert("Enter the valid receiver Email id");
            }
        })

        this.skypeSection.querySelector("#connect-skype-voice-call").addEventListener("click",()=>{
            const receiverSkypeId = this.skypeSection.querySelector("#receiver-skype-id").value;    
            this.connectSkypeAudioCall(receiverSkypeId);
        });

        this.skypeSection.querySelector("#connect-skype-video-call").addEventListener("click",()=>{
            const receiverSkypeId = this.skypeSection.querySelector("#receiver-skype-id").value;
            this.connectSkypeVideoCall(receiverSkypeId);
        });


        this.backbutton.addEventListener("click", () => {
            const length = this.navigationStack.length;
            if (length >= 2) {
                this.navigationStack[this.navigationStack.length - 1].classList.remove("active");
                this.navigationStack.pop();
                this.navigationStack[this.navigationStack.length - 1].classList.add("active");
            }
            else {
                this.navigator.goToHome();
            }
        })
    }
}

export default Android;