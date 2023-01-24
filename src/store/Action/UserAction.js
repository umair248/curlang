import { Alert } from "react-native";
import { API_BASE_URL } from "../../config/urls";
import { AccessKey } from "../../config/urls";

export const AddUsersAsFriends = (item, UserID) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: '',
        redirect: 'follow'
    };

    fetch(`${API_BASE_URL}/add-user?accesskey=${AccessKey}&userID=${UserID}&otherUserID=${item?.id}`, requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log('result===>', result)
            if(result?.Msg == 'Successfully Added!')
            {
                Alert.alert('Successfully Added!')
            }else {
                Alert.alert(result?.Msg)
            }
        })
        .catch(error => {
            console.log('error', error)

        });
}

export const FollowUsers = (item, UserID) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: '',
        redirect: 'follow'
    };

    fetch(`${API_BASE_URL}/follow-user?accesskey=${AccessKey}&userID=${UserID}&otherUserID=${item?.id}`, requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log('result===>', result)
            if(result?.Msg == 'Successfully Added!')
            {
                Alert.alert('Successfully Added!')
            }else {
                Alert.alert(result?.Msg)
            }
        })
        .catch(error => {
            console.log('error', error)

        });
}