let btns = document.getElementsByClassName("btn");
let display = document.getElementById("display");
let str = "";

for (let btn of btns) {
    btn.onclick = function () {
        if (btn.textContent == "AC") {
            str = "";

        } else if (btn.textContent == "DEL") {
            str = str.substring(0, str.length - 1)

        } else if (btn.textContent == "=") {
            if (str.length == 0)
                return;

            if (str.charAt(str.length - 1) == "+" || str.charAt(str.length - 1) == "*" || str.charAt(str.length - 1) == "-" || str.charAt(str.length - 1) == "/") {
                str = str.substring(0, str.length - 1);
            }
            if (str.charAt(str.length - 1) == "%") {
                let num = str.substring(0, str.length - 1);

                if (num == "" || isNaN(num)) {
                    display.textContent = "Error";
                    str = ""
                    return;
                } else {
                    str = (parseFloat(num) / 100) + "";
                }
            }
            if (str.charAt(0) == "*" || str.charAt(0) == "/" || str.charAt(0) == "%") {
                display.textContent = "Error";
                str = "";
                return;
            }
            try {
                str = eval(str) + "";
            } catch {
                display.textContent = "Error";
                str = "";
                return;
            }

        }
        else if (btn.textContent == "+" || btn.textContent == "-" || btn.textContent == "/" || btn.textContent == "*") {
            let lastDigit = str.charAt(str.length - 1)
            if (lastDigit == "+" || lastDigit == "-" || lastDigit == "/" || lastDigit == "%" || lastDigit == "*") {
                str = str.substring(0, str.length - 1)
            }
            str += btn.textContent
        }
        else {
            str += btn.textContent
        }
        if (str.length == 0) {
            display.textContent = 0
        } else {
            display.textContent = str
        }
    }
}