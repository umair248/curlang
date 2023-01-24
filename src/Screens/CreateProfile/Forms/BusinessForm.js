import React, { useState } from 'react'
import { Image, View, TextInput, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import TextInputWithLabel from '../../../Components/TextInputWithLabel'
import commonStyles from '../../../styles/commonStyles'
import { moderateScale, verticalScale } from '../../../styles/responsiveSize';
import DropDown from '../../../Components/DropDown';
import styles from '../styles'
import TextLabel from '../../../Components/Label';
import Asssests from '../../../constants/imagePath'
import HorizontalList from '../HorizontalList';
import ButtonComp from '../../../Components/ButtonComp'
import colors from '../../../styles/colors'
import Loader from '../../../Components/Loader';
import { CreateProfile } from '../../../store/Action/AuthFunctions';
import { AccessKey } from '../../../config/urls';
import mime from "mime";

function BusinessForm({ profile }) {

    const [city, setcity] = useState();
    const [state, setstate] = useState();
    const [age, setage] = useState();
    const [gender, setgender] = useState();
    const [perhour, setperhour] = useState();
    const [totalcourse, settotalcourse] = useState();
    const [aboutMe, SetaboutMe] = useState('')
    const [isLoading, SetisLoading] = useState(false)
    const UserDetail = useSelector(state => state?.AuthReducer?.UserDetail);
    const dispatch = useDispatch();



    const ClearValues = () => {
        setcity();
        setstate();
        setage();
        setgender();
        setperhour();
        settotalcourse();

    }

    const AddUsers = () => {


        SetisLoading(true)

        var formdata = new FormData();
        formdata.append('accessKey', AccessKey);
        formdata.append('UserID', UserDetail?.ID);
        formdata.append('type', 'Teacher');
        formdata.append('age', age);
        formdata.append('gender', gender);
        formdata.append('aboutMe', '');
        formdata.append('feePerHour', perhour);
        formdata.append('feePerCourse', totalcourse);
        formdata.append('selectedCity', city);
        formdata.append('favoriteCity', city);
        formdata.append('profilePicFile', {
            uri: profile?.assets[0]?.uri,
            type: profile?.assets[0]?.type,
            name: profile?.assets[0]?.fileName
        });

        CreateProfile(formdata, SetisLoading, dispatch)

    }

    const StudentList = [
        { icon: Asssests.User, Id: 0 },
        { icon: Asssests.User2, Id: 1 },
        { icon: Asssests.User, Id: 2 },
        { icon: Asssests.User2, Id: 3 },
        { icon: Asssests.User, Id: 4 },
        { icon: Asssests.User2, Id: 5 },
    ];

    const Courses = [
        { icon: Asssests.America, Id: 0 },
        { icon: Asssests.China, Id: 1 },
        { icon: Asssests.America, Id: 2 },
        { icon: Asssests.Pakistan, Id: 3 },
        { icon: Asssests.America, Id: 4 },
        { icon: Asssests.China, Id: 5 },
    ];




    // console.log('gander===>',gender)


    return (
        <KeyboardAwareScrollView>
            <View style={[commonStyles.row, { marginTop: moderateScale(30) }]}>

                <TextInputWithLabel
                    label={'Enter Your City'}
                    value={city}
                    type={'white'}
                    onChangeText={(e) => setcity(e)}
                    placeholder={'Your City'} />

                <TextInputWithLabel
                    label={'Enter Your State'}
                    value={state}
                    type={'white'}
                    onChangeText={(e) => setstate(e)}
                    placeholder={'State'} />

            </View>

            <View style={[commonStyles.row]}>
                <TextInputWithLabel
                    label={'Enter Your Age'}
                    value={age}
                    type={'white'}
                    keyboardType={'number-pad'}
                    onChangeText={(e) => setage(e)}
                    placeholder={'Your age'} />

                <DropDown data={[
                    { label: 'Male', value: 'male' },
                    { label: 'Female', value: 'female' },
                    { label: 'Other', value: 'other' }]}
                    value={gender} setvalue={setgender}
                    type={'short'} label={'Gender'} placeholder={'Select'} />

                {/* <ElementDropDown Label={'Select Category'}
                    defaultValue={'SELECT CATEGORIES'}
                    width={'85%'} alignSelf={'center'}
                    height={60} Bg={'none'} marginTop={20}
                    fontSize={16} fontWeight={'500'} /> */}

                {/* <CustomDropDown
                    data={GENDERLIST}
                    Label={'Gender'}
                    defaultValue={'-Select-'}
                    width={'50%'}
                    setvalue={setgender}
                    value={gender}
                    Bg={'none'} /> */}
            </View>

            <View>
                <TextLabel label={'About Me'} marginLeft={20} marginBottom={10} marginTop={10} fontSize={16} />
                <TextInput
                    style={styles.textarea}
                    placeholder='Introduce yourself'
                    multiline={true}
                    value={aboutMe}
                    placeholderTextColor={'#fff'}
                    onChangeText={(e) => SetaboutMe(e)}
                />
            </View>

            <TextLabel label={'Fee'} marginLeft={30} marginBottom={0} marginTop={20} fontSize={16} />
            <View style={[commonStyles.row, { marginTop: moderateScale(20) }]}>
                <DropDown data={[
                    { label: '50$/hr', value: '50$/hr', icon: () => <Image source={Asssests.America} resizeMode={'contain'} style={styles.iconStyle} /> },
                    { label: '20$/hr', value: '20$/hr', icon: () => <Image source={Asssests.China} resizeMode={'contain'} style={styles.iconStyle} /> },
                    { label: '10$/hr', value: '10$/hr', icon: () => <Image source={Asssests.Pakistan} resizeMode={'contain'} style={styles.iconStyle} /> }]}
                    value={perhour} setvalue={setperhour}
                    type={'short'} placeholder={'Select'} />

                <DropDown data={[
                    { label: '250$/Course', value: '1', icon: () => <Image source={Asssests.America} resizeMode={'contain'} style={styles.iconStyle} /> },
                    { label: '100$/Course', value: '2', icon: () => <Image source={Asssests.China} resizeMode={'contain'} style={styles.iconStyle} /> },
                    { label: '190$/Course', value: '3', icon: () => <Image source={Asssests.Pakistan} resizeMode={'contain'} style={styles.iconStyle} /> }]}
                    value={totalcourse} setvalue={settotalcourse}
                    type={'medium'}
                    placeholder={'Select'} />

            </View>

            <HorizontalList data={StudentList} type={0} label={'Student List'} />
            <HorizontalList data={Courses} type={1} label={'Eligible Courses'} />

            <View style={[commonStyles.row, { marginTop: moderateScale(20) }]}>
                <ButtonComp
                    btnText='Clear'
                    onPress={() => ClearValues()}
                    // type={'4'}
                    marginTop={10}
                    width={'35%'}
                    height={verticalScale(35)}
                    borderColor={'#fff'}
                />

                <ButtonComp
                    btnText='Save'
                    onPress={() => AddUsers()}
                    type={'4'}
                    marginTop={10}
                    width={'35%'}
                    height={verticalScale(35)}
                    backgroundColor={colors.orange1}
                />

            </View>


            <Loader isLoading={isLoading} type={'white'} />

        </KeyboardAwareScrollView>
    )
}

export default BusinessForm