import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import {useNavigation} from '@react-navigation/native'
import * as MailComposer from 'expo-mail-composer';


import logoImg from "../../assets/logo.png";
import { Feather } from '@expo/vector-icons';


import styles from "./styles";

export default function Detail() {
  const navigation = useNavigation();

  const message = 'Olá ONG , estou querendo ajudar no caso CASOTITLE com R$ 120,00'

  function navigateBack(){
      navigation.goBack();
  }

  function sendWhatsapp(){
    
  }

  function sendMail(){
        MailComposer.composeAsync({
            subject:'Herói do caso: Cadelinha atropelada',
            recipiemts: ['testonic15@gmail.com'],
            body: message
        });
  }


  return (
    <View style={styles.container}>

        <View style={styles.header}>
            <Image source={logoImg} />

            <TouchableOpacity onPress={navigateBack}>
                <Feather name="arrow-left" size={28} color="#e02041" />
            </TouchableOpacity>
        </View>

        <View style ={styles.incident}>
                                
            <Text style={[styles.incidentProperty], { marginTop: 0 }}>ONG:</Text>
            <Text style ={styles.incidentValue}>APAD</Text>

            <Text style ={styles.incidentProperty}>CASO:</Text>
            <Text style ={styles.incidentValue}>Cadelinha atropelada</Text>

            <Text style ={styles.incidentProperty}>VALOR:</Text>
            <Text style ={styles.incidentValue}>  120,00</Text>

        </View>
        
        <View style ={styles.contactBox}>
            <Text style ={styles.heroTitle}> Salve o dia.</Text>
            <Text style ={styles.heroTitle}> Seja o Herói desse caso</Text>
            <Text style ={styles.heroDescription}> Entre em contato</Text>

            <View style ={styles.actions}>

            <TouchableOpacity style ={styles.action} onPress={sendWhatsapp} >
                <Text style ={styles.actionsText}>Whatsapp</Text>
            </TouchableOpacity>

            <TouchableOpacity style ={styles.action} onPress={sendMail}>
                <Text style ={styles.actionsText}>Email</Text>
            </TouchableOpacity>

            </View>

        </View>

    </View>

  );
}
