import { Alert } from 'react-native';
import { API_BASE_URL } from '../../config/urls';
import { AccessKey } from '../../config/urls';
import { UserCourses } from '../Reducers/AppReducer/AppReducer';


export const SearchProfile = (data, Setloading, navigation) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch(`${API_BASE_URL}${data}`, requestOptions)
        .then(response => response.json())
        .then(SearchUsers => {
            console.log('SearchUsers===>', SearchUsers)
            if (SearchUsers?.Data?.length > 0) {
                Setloading(false)
                navigation.navigate('SearchResult', { USERS: SearchUsers?.Data })
            }
            else {
                Setloading(false)
                Alert.alert('WARNING', 'No user found')
            }
        })
        .catch(error => {
            console.log('error', error)

        });
}


export const GetAllCourses = (UserID, dispatch) => {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: '',
        redirect: 'follow'
    };

    fetch(`${API_BASE_URL}/get-all-courses?accesskey=${AccessKey}&userID=${UserID}`, requestOptions)
        .then(response => response.json())
        .then(courses => {
            console.log('courses', courses)
            if (courses?.Data) {
                dispatch(UserCourses(courses?.Data))
            }
        })
        .catch(error => {
            console.log('error', error)

        });
}


export const GetUpdatedProfile = (dispatch, SetisLoading, data, UserDetail) => {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        body: '',
        redirect: 'follow'
    };

    fetch(`${API_BASE_URL}get-profile-by-id?accesskey=${AccessKey}&userID=${data.UserID}&ProfileID=${data.ProfileID}`, requestOptions)
        .then(response => response.json())
        .then(result2 => {
            dispatch(UserDetail(result2?.Data));
            console.log('result2', result2)
            SetisLoading(false)
        })
        .catch(error => {
            SetisLoading(false)
            console.log('error GetUpdatedProfile ', error)
        });
}