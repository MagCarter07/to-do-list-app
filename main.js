const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

const addBtn = document.querySelector("button");


addBtn.addEventListener("click", () => {
     addTask()
    });

inputBox.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addTask()
    }
});

const addTask = () => {
    if (inputBox.value === '') {
        alert("You have to write something")
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
};

listContainer.addEventListener("click", (isClicked) => {
    if (isClicked.target.tagName === "LI") {
        isClicked.target.classList.toggle("checked");
        saveData();
    } else if (isClicked.target.tagName === "SPAN") {
        isClicked.target.parentElement.remove();
        saveData();
    }
}, false)

const saveData = () => {
    localStorage.setItem("data", listContainer.innerHTML)
};

const showTask = () => {
    listContainer.innerHTML = localStorage.getItem("data")
}

window.addEventListener("load", () => {
    document.querySelectorAll(".checked").forEach((li) => li.remove());
    saveData()
})

showTask();

localStorage.clear()
console.log(localStorage)


