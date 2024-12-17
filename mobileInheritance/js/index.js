import NormalPhone from "./NormalPhone.js";
import Android from "./Android.js";
import Windows from "./Windows.js";
import iOS from "./IOS.js";

class Navigator {
  constructor(options, normalPhone, smartPhone, androidPhone, windows, iosPhone) {
    this.navigationStack = [document.querySelector(".options")];
    this.options = options;
    this.normalPhone = normalPhone;
    this.smartPhone = smartPhone;
    this.androidPhone = androidPhone;
    this.windows = windows;
    this.iosPhone = iosPhone;
    this.addEventListeners();
  }

  goToHome() {
    this.navigationStack[this.navigationStack.length - 1].classList.remove("active");
    this.navigationStack[this.navigationStack.length - 2].classList.add("active");
    this.navigationStack.pop();
  }

  addEventListeners() {
    this.options.querySelector("#mobile-type").addEventListener("change", () => {
      const option = this.options.querySelector("#mobile-type").value;
      const smartPhoneOptions = this.options.querySelector(".smart-phone-options");
      if (option === "smart-phone") {
        smartPhoneOptions.classList.remove("hide");
      }
      else {
        smartPhoneOptions.classList.add("hide");
      }
    });

    this.options.querySelector("#go-to-device").addEventListener("click", () => {
      const option = this.options.querySelector("#mobile-type").value;
      if (option === "normal-phone") {
        this.normalPhone.classList.add("active");
        this.navigationStack[this.navigationStack.length - 1].classList.remove("active");
        this.navigationStack.push(this.normalPhone);
      } else if (option === "smart-phone") {
        const smartPhoneType = this.options.querySelector("#smart-phone-type").value;
        if (smartPhoneType === "android") {
          this.androidPhone.classList.add("active");
          this.navigationStack[this.navigationStack.length - 1].classList.remove("active");
          this.navigationStack.push(this.androidPhone);
        }
        else if(smartPhoneType === "windows"){
          this.windows.classList.add("active");
          this.navigationStack[this.navigationStack.length - 1].classList.remove("active");
          this.navigationStack.push(this.windows);
        }
        else if(smartPhoneType === "ios"){
          this.iosPhone.classList.add("active");
          this.navigationStack[this.navigationStack.length - 1].classList.remove("active");
          this.navigationStack.push(this.iosPhone);
        }
      }
    });
  }
}

const options = document.querySelector(".options");
const normalPhone = document.querySelector(".normal-phone");
const smartPhone = document.querySelector(".smart-phone");
const androidPhone = document.querySelector(".android-phone");
const windows = document.querySelector(".windows");
const iosPhone = document.querySelector(".ios-phone");

const n = new Navigator(options, normalPhone, smartPhone, androidPhone, windows, iosPhone);
const np = new NormalPhone(n, normalPhone);
const android = new Android(n, androidPhone);
const window = new Windows(n, windows);
const ios = new iOS(n, iosPhone);
