import { supremeDataLeader } from "./dataUtils";

import checkboxEmpty from "./checkboxIcon.png";
import checkboxFilled from "./checkboxFilledIcon.png";

function checkBoxToggle(box, title) {
  if (box.src == checkboxEmpty) {
    box.src = checkboxFilled;
    title.style.textDecoration = "line-through";
  } else {
    box.src = checkboxEmpty;
    title.style.textDecoration = "none";
  }
}

function toggleDescription(itemDescription, item) {
  if (itemDescription.innerHTML == "") {
    itemDescription.innerHTML = item.desc;
  } else {
    itemDescription.innerHTML = "";
  }
}

function itemView() {
  let container = document.getElementById("itemListContainer");
  container.innerHTML = "";
  supremeDataLeader
    .viewProject(0)
    .items.reverse()
    .forEach(item => {
      let itemContainer = document.createElement("li");
      itemContainer.dataset.index = item.index;
      itemContainer.classList.add("itemContainer");
      let itemPreview = document.createElement("div");
      itemPreview.dataset.index = item.index;
      itemPreview.classList.add("itemPreview");
      let itemTitle = document.createElement("div");
      itemTitle.classList.add("itemTitle");
      let itemDue = document.createElement("div");
      itemDue.classList.add("itemDue");
      itemTitle.innerHTML = item.title;
      itemDue.innerHTML = "Due " + item.due;

      let checkBox = document.createElement("img");
      checkBox.classList.add("checkBox");
      checkBox.src = checkboxEmpty;

      checkBox.addEventListener("click", () => {
        checkBoxToggle(checkBox, itemTitle);
      });

      itemTitle.style.cursor = "pointer";

      let itemDescription = document.createElement("div");
      itemDescription.classList.add("itemDescription");

      itemTitle.addEventListener("click", () => {
        toggleDescription(itemDescription, item);
      });

      itemPreview.appendChild(checkBox);
      itemPreview.appendChild(itemTitle);
      itemPreview.appendChild(itemDue);
      itemContainer.appendChild(itemPreview);
      itemContainer.appendChild(itemDescription);
      container.appendChild(itemContainer);
      console.log(item);
    });
}

export { itemView };
