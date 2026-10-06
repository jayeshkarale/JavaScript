const h2 = document.getElementById("myh2");
        const mybtn = document.getElementById("btn");

        function fun() {
            h2.textContent = "Learning Events in JavaScript";
            h2.style.color = "maroon";
        }

        mybtn.addEventListener("click", () => {
            mybtn.style.color = "red";
            mybtn.style.backgroundColor = "yellow";
            fun();

            // Delay so the style changes paint before the alert blocks
            setTimeout(() => alert("You clicked on button."), 0);
        });