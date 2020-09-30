import PermanentStorage from "permanent-storage";

const trackerStorage = new PermanentStorage();

trackerStorage.setItem("a", "7823634e-0b8d-4b5d-ac59-d1bd298d6116");
trackerStorage.setItem("tracking-id", "UA298d61");

window.trackerStorage = trackerStorage;

const localStorageValuesElm = document.getElementById("local-storage-values");

localStorageValuesElm.innerText = JSON.stringify(localStorage, null, "\t");
