import { createBrowserHistory } from "history";
const history = typeof window !== 'undefined' ? createBrowserHistory() : null;
// export default createBrowserHistory();
export default history;
