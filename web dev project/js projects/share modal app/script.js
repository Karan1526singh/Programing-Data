const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

//   Modal open function
const openModal = () => {
  console.log("Modal is Open");
  modal.add("active");
  overlay.add("overlayactive");
};

// Modal close function
const closeModal = () => {
  modal.remove("active");
  overlay.remove("overlayactive");
};