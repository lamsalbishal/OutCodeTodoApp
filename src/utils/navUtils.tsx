/**
 * Used to navigating without the navigation prop
 * @see https://reactnavigation.org/docs/navigating-without-navigation-prop/
 *
 * You can add other navigation functions that you need and export them
 */
import {
    CommonActions,
    createNavigationContainerRef,
    StackActions,
} from '@react-navigation/native';

type RootStackParamList = {
    HomeScreen: any;
    CreateEditNoteScreen: any;
};

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export function navigate(name: keyof RootStackParamList, params?: any) {
    if (navigationRef.isReady()) {
        navigationRef.navigate(name, params);
    }
}

export function navigateAndReset(routes = [], index = 0) {
    if (navigationRef.isReady()) {
        navigationRef.dispatch(
            CommonActions.reset({
                index,
                routes,
            }),
        );
    }
}

export function navigateAndSimpleReset(name: string, index = 0) {
    if (navigationRef.isReady()) {
        navigationRef.dispatch(
            CommonActions.reset({
                index,
                routes: [{ name }],
            }),
        );
    }
}

export function navigationRelace(name: string, params?: any) {
    if (navigationRef.isReady()) {
        navigationRef.dispatch(StackActions.replace(name, params));
    }
}

export function goBack() {
    navigationRef.current?.goBack();
}
