/**
 * Created by triqm on 4/15/18.
 */
import { AppNavigator } from '../components/AppNavigator';
import { NavigationActions } from 'react-navigation'

const router = AppNavigator.router;
const mainNavAction = router.getActionForPathAndParams('Welcome');
const initialNavState = router.getStateForAction(NavigationActions.init());

const navReducer = (state = initialNavState, action) => {
    return router.getStateForAction(action, state) || state;
};

export default navReducer;
