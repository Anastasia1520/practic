let auditorium = {
  number: 57,
  furniture: ["bookcase", "desk", "chair"],
  tv: true,
  video: true,
  board: {
    material: "metal",
    coating: ["green", "matte"],
  },
  area: 70.8,
  seats: 35,
  addFurniture: function () {
    this.furniture.push(document.getElementById("furniture").value);
    document.getElementById("func1").textContent = this.furniture;
  },
  checkTv: () => {
    this.tv = document.getElementById("checktv").checked
      ? "Avaible"
      : "Not avaible";
    document.getElementById("tv").textContent = this.tv;
  },
  checkVideo() {
    this.video = document.getElementById("checkvd").checked
      ? "Avaible"
      : "Not avaible";
    document.getElementById("video").textContent = this.video;
  },
  showSeats() {
    document.getElementById("countSeats").textContent = this.seats;
  },
  addSeats() {
    document.getElementById("countSeats").textContent = ++this.seats;
  },
  removeSeats() {
    document.getElementById("countSeats").textContent = --this.seats;
  },
};

auditorium.changeMaterialBoard = function () {
  auditorium.board.material = document.getElementById("inputMat").value;
  alert(`Материал доски: ${auditorium.board.material}`);
};
