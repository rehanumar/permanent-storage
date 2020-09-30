const otherWindow = (() => {
  const iframe = document.createElement("iframe");
  iframe.setAttribute("owner", "permanent-storage");
  iframe.setAttribute("src", location.href);
  iframe.setAttribute("importance", "low");
  iframe.setAttribute("loading", "lazy");
  iframe.setAttribute("style", "display: none");
  document.body.appendChild(iframe);
  return iframe.contentWindow;
})();

class Storage {
  constructor(storage) {
    this._storage = storage || window.localStorage;

    this._data = {};

    otherWindow.addEventListener("storage", this._setAllItems);
  }

  _setAllItems = () => {
    Object.entries(this._data).forEach((item) =>
      this.setItem(item[0], item[1])
    );
  };

  setItem = (key, value) => {
    this._data[key] = value;
    return this._storage.setItem(key, value);
  };

  getItem = (key) => this._storage.getItem(key);

  clear = () => {
    Object.entries(this._data).forEach((item) => this.removeItem(item[0]));
  };

  removeItem = (key) => {
    delete this._data[key];
    return this._storage.removeItem(key);
  };
}

if (!Object.entries) {
  Object.entries = function (obj) {
    var ownProps = Object.keys(obj),
      i = ownProps.length,
      resArray = new Array(i); // preallocate the Array
    while (i--) resArray[i] = [ownProps[i], obj[ownProps[i]]];

    return resArray;
  };
}

export default Storage;
