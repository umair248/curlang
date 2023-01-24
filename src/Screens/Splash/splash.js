import React from 'react'
import { View, Image, ImageBackground } from 'react-native';
import Assets from '../../constants/imagePath';
import commonStyles from '../../styles/commonStyles';

function Splash() {
    return (
        <ImageBackground source={Assets.greenbackground} style={[commonStyles.backgroundImage,{justifyContent:"center"}]}>
            <Image source={Assets.AppIcons}  style={commonStyles.APPiconsflash} resizeMethod={'resize'} resizeMode={'contain'}/>
        </ImageBackground>
    )
}

export default Splash