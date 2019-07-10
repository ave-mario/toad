import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

let pastLocations = [];
function updatePastLocations(location, action, isFirstRendering) {
  switch (action) {
    case 'PUSH':
      pastLocations.push(location);
      break;
    case 'REPLACE':
      pastLocations[
        isFirstRendering ? pastLocations.length - 1 : pastLocations.length
      ] = location;
      break;
    case 'POP': {
      pastLocations.pop();
      const appLocation = pastLocations[pastLocations.length - 1];
      if (!(appLocation && appLocation.key === location.key)) {
        pastLocations = [location];
      }
      break;
    }
    default:
  }
}
history.listen(updatePastLocations);

function isPreviousLocationWithinApp() {
  return pastLocations.length > 1;
}

export function goBackOrReplace(location) {
  if (isPreviousLocationWithinApp()) {
    history.goBack();
  } else {
    history.replace(location);
  }
}
export default history;
