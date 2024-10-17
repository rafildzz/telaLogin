import React, { useState } from "react";

import { Image, Text, View, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';

import { style } from "./styles";
import Logo from '../../assets/logo.png'
import {MaterialIcons, AntDesign} from '@expo/vector-icons';
import { themas } from "../../global/themes";


export default function Login (){
    const [email,setEmail] = useState ('');
    const [password,setPassword] = useState ('');
    const [loading,setLoading] = useState (false)

    async function getLogin(){
        try{
            setLoading (true)
            
            if (!email || !password){
                return Alert.alert ('Atenção', 'Informe os campos obrigatórios!')
            }

            setTimeout(()=>{
                if(email == 'teste@email.com' && password == '1234'){
                Alert.alert ('Logado com sucesso!')
                }else{
                    Alert.alert('Usuário não encontrado!')
                }
                setLoading(false)
            },3000)

        }catch (error){
            console.log (error)
        }
    }

    console.log (loading)
    return (
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image
                    source={Logo}
                    style={style.logo}
                    resizeMode="contain"
                />
                <Text style={style.text}>Bem vindo de volta!</Text>
            </View>
            <View style={style.boxMid}>
                <Text style={style.titleInput}>E-MAIL</Text>
               <View style={style.boxInput}>
                    <TextInput
                    style={style.input}
                    value={email}
                    onChangeText={(e) =>setEmail(e)}
                    />
                    <MaterialIcons 
                        name='email'
                        size = {20}
                        color={themas.colors.gray}
                    />
                    
                </View>

                <Text style={style.titleInput}>SENHA</Text>
                <View style={style.boxInput}>
                    <TextInput
                    style={style.input}
                    value={password}
                    onChangeText={setPassword}
                    />
                    <MaterialIcons 
                        name='remove-red-eye'
                        size = {20}
                        color={themas.colors.gray}
                    />
                    
                </View>
                
            </View>
            <View style = {style.boxBottom}>
                <TouchableOpacity style={style.button} onPress={() => getLogin()}>
                    {
                        loading? 
                            <ActivityIndicator color={'#fff'} size={"small"}/>
                        : 
                            <Text style={style.textButton}>Entrar</Text>
                    }
                </TouchableOpacity>
            </View>
            <Text style={style.textBottom}> Não possui uma conta? <Text style={{color:themas.colors.primary}}> Crie agora!</Text></Text>
        </View>
    )
}