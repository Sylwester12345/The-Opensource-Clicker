//AI DIDNT MADE IT ALL!!

let clicks = 0;
let cursors = 0;
let farms = 0;
let cursorupgraded = false;
let deleteconsent = 0;
let farmsupgraded = false;

document.getElementById("clicknotification").style.visibility = "hidden";
function ClickFunction() {
  clicks += 1;
  document.getElementById("clicknotification").style.color = "white";
  document.getElementById("MainLabel").textContent = "Clicks: " + clicks;
  document.getElementById("clicknotification").style.visibility = "visible";

  setTimeout(() => {
    document.getElementById("clicknotification").style.visibility = "hidden";
    document.getElementById("clicknotification").style.color = "white";
  }, 500);

  document.getElementById("clicknotification").style.visibility = "visible";
  checkifcanupdate();
}

function CursorSystem() {
  if (cursorupgraded == true) {
    let howmanyclicksgenerates = cursors * 2;
    clicks += howmanyclicksgenerates;

    document.getElementById("MainLabel").textContent = "Clicks: " + clicks;
    setTimeout(() => {
      CursorSystem();
    }, 1000);
  } else {
    let howmanyclicksgenerates = cursors * 1;
    clicks += howmanyclicksgenerates;

    document.getElementById("MainLabel").textContent = "Clicks: " + clicks;
    setTimeout(() => {
      CursorSystem();
    }, 1000);
  }
}

function ShopBuyACursor() {
  if (clicks >= 50) {
    if (cursors >= 1) {
      clicks -= 50;
      CursorSystem();
      cursors += 1;
      document.getElementById("HowMuchCursors").textContent =
        "Cursors: " + cursors;
      document.getElementById("CURSORCSS").textContent = "Bought!";

      setTimeout(() => {
        document.getElementById("CURSORCSS").textContent =
          "Buy A Cursor - 50 Clicks";
      }, 2000);
      document.getElementById("MainLabel").textContent = "Clicks: " + clicks;
      checkifcanupdate();
    } else {
      clicks -= 50;
      cursors += 1;
      document.getElementById("HowMuchCursors").textContent =
        "Cursors: " + cursors;
      document.getElementById("CURSORCSS").textContent = "Bought!";
      setTimeout(() => {
        document.getElementById("CURSORCSS").textContent =
          "Buy A Cursor - 50 Clicks";
      }, 2000);
      document.getElementById("MainLabel").textContent = "Clicks: " + clicks;

      checkifcanupdate();
    }
  } else if (clicks < 50) {
    setTimeout(() => {
      document.getElementById("CURSORCSS").textContent =
        "Buy A Cursor - 50 Clicks";
    }, 2000);
    document.getElementById("CURSORCSS").textContent =
      "You dont have enough money";
  }
}

function FarmSystem() {
  if (farmsupgraded == true) {
    let howmanyclicksgenerateswithfarms = farms * 20;
    clicks += howmanyclicksgenerateswithfarms;

    document.getElementById("MainLabel").textContent = "Clicks: " + clicks;
    setTimeout(() => {
      FarmSystem();
    }, 1000);
  } else if (farmsupgraded == false) {
    let howmanyclicksgenerateswithfarms = farms * 10;
    clicks += howmanyclicksgenerateswithfarms;

    document.getElementById("MainLabel").textContent = "Clicks: " + clicks;
    setTimeout(() => {
      FarmSystem();
    }, 1000);
  }
}

function ShopBuyAFarm() {
  if (clicks >= 200) {
    if (cursors >= 1) {
      clicks -= 200;
      farms += 1;
      document.getElementById("HowManyFarms").textContent = "Farms: " + farms;
      document.getElementById("FARM").textContent = "Bought!";

      setTimeout(() => {
        document.getElementById("FARM").textContent = "Buy A Farm - 200 Clicks";
      }, 2000);
      document.getElementById("MainLabel").textContent = "Clicks: " + clicks;
      checkifcanupdate();
    } else {
      clicks -= 200;
      farms += 1;
      document.getElementById("HowManyFarms").textContent = "Farms: " + farms;
      document.getElementById("FARM").textContent = "Bought!";
      setTimeout(() => {
        document.getElementById("FARM").textContent = "Buy A Farm - 200 Clicks";
      }, 2000);
      document.getElementById("MainLabel").textContent = "Clicks: " + clicks;
      checkifcanupdate();
      FarmSystem();
    }
  } else if (clicks < 50) {
    setTimeout(() => {
      document.getElementById("FARM").textContent = "Buy A Farm - 200 Clicks";
    }, 2000);
    document.getElementById("FARM").textContent = "You dont have enough money";
  }
}

function UpgradeCursors() {
  if (clicks >= 500) {
    clicks -= 500;
    cursorupgraded = true;
    document.getElementById("UpgradeCursors").style.display = "none";
  }
}

function UpgradeFarming() {
  if (clicks >= 1000) {
    clicks -= 1000;
    farmsupgraded = true;
    document.getElementById("UpgradeFarms").style.display = "none";
  }
}

function checkifcanupdate() {
  if (clicks > 499) {
    document.getElementById("UpgradeCursors").style.backgroundColor =
      "rgb(255, 255, 255)";
  } else {
    document.getElementById("UpgradeCursors").style.backgroundColor =
      "rgba(0, 0, 0, 0.27)";
  }

  if (clicks > 999) {
    document.getElementById("UpgradeFarms").style.backgroundColor =
      "rgb(255, 255, 255)";
  } else {
    document.getElementById("UpgradeFarms").style.backgroundColor =
      "rgba(0, 0, 0, 0.27)";
  }
}

function SaveData() {
  const alldata = {
    clicksdata: clicks,
    cursorsdata: cursors,
    farmsdata: farms,
    cursorupgradeddata: cursorupgraded,
  };
  localStorage.setItem("SaveFile", JSON.stringify(alldata));

  setTimeout(() => {
    SaveData();
  }, 60000);
}

const FetchedData = JSON.parse(localStorage.getItem("SaveFile"));
if (FetchedData == null) {
  let clicks = 0;
  let cursors = 0;
  let farms = 0;
  let cursorupgraded = false;
} else {
  clicks = FetchedData.clicksdata;
  cursors = FetchedData.cursorsdata;
  farms = FetchedData.farmsdata;
  cursorupgraded = FetchedData.cursorupgradeddata;
  if (cursorupgraded == true) {
    document.getElementById("UpgradeCursors").style.display = "none";
  }
  document.getElementById("MainLabel").textContent = "Clicks: " + clicks;
  document.getElementById("HowManyFarms").textContent = "Farms: " + farms;
  document.getElementById("HowMuchCursors").textContent = "Cursors: " + cursors;
  CursorSystem();
  FarmSystem();
}

function DeleteData() {
  if (deleteconsent == 0) {
    document.getElementById("DeleteButton").textContent = "Are you sure?";
    deleteconsent = 1;
  } else if (deleteconsent == 1) {
    deleteconsent = 0;
    setTimeout(() => {
      document.getElementById("DeleteButton").textContent =
        "Delete Data (CAUTIOUS)";
    }, 3000);
    localStorage.removeItem("SaveFile");
    document.getElementById("DeleteButton").textContent = "Done";
  }
}

checkifcanupdate();
SaveData();
