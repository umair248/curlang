import { Alert } from 'react-native';
import { API_BASE_URL } from '../../config/urls';
import { AccessKey } from '../../config/urls';

import { LoginUser, Step, UserDetail,LogOut } from '../Reducers/AuthReducer/AuthReducer';



export function signUp(data, SetisLoading, navigation) {
    var requestOptions = { method: 'POST' };

    fetch(`${API_BASE_URL}${data}`, requestOptions)
        .then(response => response.json())
        .then(result => {
            if (result?.ResponseType == 0) Alert.alert(result.Msg)

            if (result?.ResponseType == 1) {
                Alert.alert('Registration Successfully, Login To Continue !')
                navigation.goBack()
            }
            SetisLoading(false);

        })
        .catch(error => {
            SetisLoading(false)
            console.log('error signUp', error)
        });
}


export const login = (data, SetisLoading, dispatch) => {

    var requestOptions = { method: 'GET' };

    fetch(`${API_BASE_URL}${data}`, requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result)
            if (result?.ResponseType == 0) Alert.alert(result.Msg)
            if (result?.ResponseType == 1) {

                if (result?.Data?.ProfileID == 0) {
                    dispatch(LoginUser(true));
                    dispatch(Step(result?.Data?.ProfileID))
                    dispatch(UserDetail(result?.Data));
                }
                else {
                    fetch(`${API_BASE_URL}get-profile-by-id?accesskey=${AccessKey}&userID=${result?.Data?.ID}&ProfileID=${result?.Data?.ProfileID}`, requestOptions)
                        .then(response => response.json())
                        .then(result2 => {
                            dispatch(LoginUser(true));
                            dispatch(Step(result2?.Data?.ProfileID))
                            dispatch(UserDetail(result2?.Data));
                            SetisLoading(false)
                        })
                        .catch(error => {
                            SetisLoading(false)
                            console.log('error login ', error)
                        });
                }

            }

            SetisLoading(false)

        })
        .catch(error => {
            SetisLoading(false)
            console.log('error login ', error)
        });
}

export const CreateProfile = (formdata, SetisLoading, dispatch) => {

    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'multipart/form-data');


    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };


    fetch(`${API_BASE_URL}/create-profile`, requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log('Result By Save===>', result);
            if (result?.Msg == 'Successfully Saved!') {
                dispatch(LoginUser(false));
                dispatch(Step(''))
                dispatch(UserDetail(''));
                Alert.alert('Account created ','Login to continue')
            }
            else {
                Alert.alert(result?.Msg)
            }
            SetisLoading(false)
        })
        .catch(error => {
            console.log('error', error)
            SetisLoading(false)
        });


}
export const Logout =(dispatch)=>{
    dispatch(LogOut())
}







