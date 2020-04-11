import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import * as Permissions from 'expo-permissions';
import {BarCodeScanner} from 'expo-barcode-scanner';
export default class TransactionScreen extends ReactComponent{
    constructor(){
        super();
        this.state={
            hasCameraPermissions:null,
            scanned:false,
            scannedData:'',
buttonState:'normal'
        }
    }
    getCameraPermissions=async()=>{
        const {status}=await Permissions.askAsync(Permissions.CAMERA);
        this.setState({
hasCameraPermissions:status==="granted"
        });
    }
    handleBarCodeScanned=async({type,data})=>{
        this.setState({
            scanned:true,
            scannedData:data,
buttonState:"normal"      
        })
    }
    render(){
        const hasCameraPermissions=this.state.hasCameraPermissions;
        const scanned=this.state.scanned;
        const buttonState=this.state.buttonState;
        if(buttonState==="clicked" && hasCameraPermissions){
            return(
                <BarCodeScanner
                onBarCodeScanned={scanned?undefined:this.handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}/>
            )
        }
        else if(buttonState==="normal"){
         
        
        return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text>{hasCameraPermissions===true ? this.state.scannedData : "Request Camera Permission" }</Text>
            <TouchableOpacity onPress={this.getCameraPermissions} style={styles.scanbutton}>
                <Text style={styles.buttontext}>scan QR code</Text>
            </TouchableOpacity>
        </View>
        
        );
    }
}
}
const styles=StyleSheet.create({
    scanbutton:{
        backgroundColor:"blue",
        padding:10,
        margin:10,
        
    },
    buttonText:{
        fontSize:15,
        textDecorationLine:'underline',

    }
})
