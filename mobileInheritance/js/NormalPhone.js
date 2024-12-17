import BaseMobile from "./BaseMobile.js";

class NormalPhone extends BaseMobile {
  constructor(navigator, context) {
    super();
    this.context = context;
    this.navigator = navigator;
    this.contextStack = [document.querySelector(".sim-type")];
    this.callSection = this.context.querySelector(".call-section");
    this.messageSection = document.querySelector(".message-section");
    this.simType = null;
    this.addEventListeners();
  }

  configureNumber(){
    const simNumber1 = this.context.querySelector("#phone-number-1").value;
    const simNumber2 = this.context.querySelector("#phone-number-2").value;
    if(this.simType === "single-sim"){
      if(!super.validatePhoneNumber(simNumber1)){
        return false;
      }
    }else if(this.simType === "dual-sim"){
      if(!super.validatePhoneNumber(simNumber1) || !super.validatePhoneNumber(simNumber2)){
        return false;
      }
    }
    this.simNumber1 = simNumber1;
    this.simNumber2 = simNumber2;
    return true;
  }

  addEventListeners() {
    this.context.querySelector("#enter-phone-number-button").addEventListener("click", () => {
      const simType = document.querySelector("#sim-type").value;
      this.simType = simType;
      const secondPhoneNumber = document.querySelector("#phone-number-2");
      if (simType === "dual-sim") {
        secondPhoneNumber.classList.remove("hide");
      }
      else if (simType === "single-sim") {
        secondPhoneNumber.classList.add("hide");
      }
      const phnoSection = document.querySelector(".phone-number-section");
      phnoSection.querySelector(".sim-type-display").innerHTML = simType;
      phnoSection.classList.add("active");
      this.contextStack[this.contextStack.length - 1].classList.remove("active");
      this.contextStack.push(phnoSection);
    });

    this.context.querySelector("#call-option").addEventListener("click", () => {
      if(!this.configureNumber()){
        window.alert("Enter the valid phone number")
        return;
      }
      this.callSection.classList.add("active");
      this.contextStack[this.contextStack.length - 1].classList.remove("active");
      this.contextStack.push(this.callSection);
    });

    this.context.querySelector("#message-option").addEventListener("click", () => {
      if(!this.configureNumber()){
        window.alert("Enter the valid phone number")
        return;
      }
      this.messageSection.classList.add("active");
      this.contextStack[this.contextStack.length - 1].classList.remove("active");
      this.contextStack.push(this.messageSection);
    });

    this.callSection.querySelector("#connect-call").addEventListener("click", () => {
      const receiverNumber = this.callSection.querySelector("#receiver-phone-number").value;
      if(super.validatePhoneNumber(receiverNumber)){
        super.connectCall(this.callSection, this.simNumber1, receiverNumber);
      }
      else{
        window.alert("Enter the valid receiver phone Number");
      }
    });

    this.messageSection.querySelector("#send-message").addEventListener("click", () => {
      const receiverNumber = this.messageSection.querySelector("#message-receiver-phone-number").value;
      const messageText = this.messageSection.querySelector("#message-text").value;
      if(super.validatePhoneNumber(receiverNumber)){
        super.sendMessage(this.messageSection, receiverNumber, messageText);
      }
      else{
        window.alert("Enter the valid receiver phone Number");
      }
    });
    
    this.context.querySelector("#normal-phone-back").addEventListener("click", () => {
      if (this.contextStack.length >= 2) {
        this.contextStack[this.contextStack.length - 1].classList.remove(
          "active"
        );
        this.contextStack[this.contextStack.length - 2].classList.add(
          "active"
        );
        this.contextStack.pop();
      } else {
        this.navigator.goToHome();
      }
    });
  }
}

export default NormalPhone;
