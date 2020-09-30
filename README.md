# Permanent Storage

An implementation based on browser [`storage` event](https://developer.mozilla.org/en-US/docs/Web/API/Window/storage_event) to persist items in local storage and session storage against clear action.

| ![Chrome](https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![IE](https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![Opera](https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Safari](https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png) |
| --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------- |
| 1 ✔                                                                                                 | 45 ✔                                                                                                   | ?                                                                                           | 15 ✔                                                                                             | (min version support?) ✔                                                                            |

For more details, visit [mdn](https://developer.mozilla.org/en-US/docs/Web/API/Window/storage_event#Browser_compatibility).

## Installation

```bash
npm i permanent-storage
```

# Example

```js
import PermanentStorage from "permanent-storage";

// default is localStorage
const trackerStorage = new PermanentStorage();

/* can be overridden by passing storage object
const trackerStorage = new PermanentStorage(window.sessionStorage);
*/

trackerStorage.setItem("a", "7823634e-0b8d-4b5d-ac59-d1bd298d6116");
trackerStorage.setItem("tracking-id", "UA298d61");
trackerStorage.getItem("tracking-id");
trackerStorage.removeItem("tracking-id");
trackerStorage.clear();
```

![image for localStorage](https://github.com/permanent-storage/assets/blob/master/localstorage.gif)

## Possible Usecase

For anonymous users, if you want to curbstone to prevent spam, this could be a neat and more reliable solution than using browser fingerprint. Fingerprinting is prune to data change that generate different hashes over time. Even if fingerprinting is using canvas images; chances of collision and gradual inconsistency are high.

## License

Copyright (c) 2020 - present by Rehan Umar and individual contributors. Licensed under [MIT license](LICENSE).
