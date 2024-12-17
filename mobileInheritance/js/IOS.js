import BaseMobile from "./BaseMobile.js";

class iOS extends BaseMobile {
    constructor(navigator, context) {
        super();
        this.context = context;
        this.navigator = navigator;
        this.navigationStack = [context.querySelector(".ios-configuration")];
        this.appSection = context.querySelector(".app-section");
        this.callSection = context.querySelector(".call-section");
        this.messageSection = context.querySelector(".message-section");
        this.emailSection = context.querySelector(".email-section");
        this.facetimeSection = context.querySelector(".facetime-section");
        this.backbutton = context.querySelector(".ios-back-button");
        this.phoneNumber = null;
        this.email = null;
        this.addEventListeners();
    }

    configureSystem() {
        const phoneNumber = this.context.querySelector("#phone-number").value;
        const email = this.context.querySelector("#email-id").value;
        const facetimeId = this.context.querySelector("#facetime-id").value;
        if (!super.validatePhoneNumber(phoneNumber)) {
            window.alert("Enter the valid phone number");
            return false;
        }
        if (!super.validateEmail(email)) {
            window.alert("Enter the valid email Id");
            return false;
        }
        if(!super.validatePhoneNumber(facetimeId)){
            window.alert("Enter the valid facetime id");
            return false;
        }
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.facetimeId = facetimeId;
        return true;
    }

    connectFaceTimeAudioCall(receiverFaceTimeId) {
        if (!super.validatePhoneNumber(receiverFaceTimeId)){
            window.alert("Enter the valid facetime id");
            return;
        }
        const facetimeStatus = this.facetimeSection.querySelector("#facetime-call-status");
        const text = "Audio call connected to <span>" + receiverFaceTimeId + "</span>";
        facetimeStatus.innerHTML = text;
    }

    connectFaceTimeVideoCall(receiverFaceTimeId) {
        if (!super.validatePhoneNumber(receiverFaceTimeId)){
            window.alert("Enter the valid facetime id");
            return;
        }
        const facetimeStatus = this.facetimeSection.querySelector("#facetime-call-status");
        const text = "Video call connected to <span>" + receiverFaceTimeId + "</span>";
        facetimeStatus.innerHTML = text;
    }

    addEventListeners() {
        this.context.querySelector(".call").addEventListener("click", () => {
            this.navigationStack[this.navigationStack.length - 1].classList.remove("active");
            this.callSection.classList.add("active");
            this.navigationStack.push(this.callSection);
        });
        this.context.querySelector(".message").addEventListener("click", () => {
            this.navigationStack[this.navigationStack.length - 1].classList.remove("active");
            this.messageSection.classList.add("active");
            this.navigationStack.push(this.messageSection);
        });
        this.context.querySelector(".email").addEventListener("click", () => {
            this.navigationStack[this.navigationStack.length - 1].classList.remove("active");
            this.emailSection.classList.add("active");
            this.navigationStack.push(this.emailSection);
        });

        this.context.querySelector(".facetime").addEventListener("click", () => {
            this.navigationStack[this.navigationStack.length - 1].classList.remove("active");
            this.facetimeSection.classList.add("active");
            this.navigationStack.push(this.facetimeSection);
        });

        this.context.querySelector(".configure").addEventListener("click", () => {
            if (!this.configureSystem()) {
                return;
            }
            this.navigationStack[this.navigationStack.length - 1].classList.remove("active");
            this.appSection.classList.add("active");
            this.navigationStack.push(this.appSection);
        });

        this.callSection.querySelector("#connect-call").addEventListener("click", () => {
            const receiverNumber = this.callSection.querySelector("#receiver-phone-number").value;
            if (super.validatePhoneNumber(receiverNumber)) {
                super.connectCall(this.callSection, this.phoneNumber, receiverNumber);
            } else {
                window.alert("Enter the valid receiver number");
            }
        });

        this.messageSection.querySelector("#send-message").addEventListener("click", () => {
            const receiverNumber = this.messageSection.querySelector("#message-receiver-phone-number").value;
            const messageText = this.messageSection.querySelector("#message-text").value;
            if (super.validatePhoneNumber(receiverNumber)) {
                super.sendMessage(this.messageSection, receiverNumber, messageText);
            } else {
                window.alert("Enter the valid receiver number");
            }
        });

        this.emailSection.querySelector("#send-email").addEventListener("click", () => {
            const receiverEmail = this.emailSection.querySelector("#receiver-email").value;
            const emailSubject = this.emailSection.querySelector("#email-subject").value;
            const emailBody = this.emailSection.querySelector("#email-body").value;
            if (super.validateEmail(receiverEmail)) {
                super.sendEmail(this.context, this.email, receiverEmail, emailSubject, emailBody);
            } else {
                window.alert("Enter the valid receiver Email id");
            }
        });

        this.facetimeSection.querySelector("#connect-facetime-voice-call").addEventListener("click", () => {
            const receiverFaceTimeId = this.facetimeSection.querySelector("#receiver-facetime-id").value;
            this.connectFaceTimeAudioCall(receiverFaceTimeId);
        });

        this.facetimeSection.querySelector("#connect-facetime-video-call").addEventListener("click", () => {
            const receiverFaceTimeId = this.facetimeSection.querySelector("#receiver-facetime-id").value;
            this.connectFaceTimeVideoCall(receiverFaceTimeId);
        });

        this.backbutton.addEventListener("click", () => {
            const length = this.navigationStack.length;
            if (length >= 2) {
                this.navigationStack[this.navigationStack.length - 1].classList.remove("active");
                this.navigationStack.pop();
                this.navigationStack[this.navigationStack.length - 1].classList.add("active");
            } else {
                this.navigator.goToHome();
            }
        });
    }
}

export default iOS;
