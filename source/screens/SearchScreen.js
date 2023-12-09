import { View, Image, StyleSheet, TextInput, FlatList, Button, ScrollView, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { useState } from 'react';
import { getCharacter } from '../services/api'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const SearchScreen = (props) => {

    const navigation = props.navigation

    const [characters, setCharacters] = useState([])
    const [nameSearch, setNameSearch] = useState('')

    return (
        <View>

            {/*CAMPO PARA NOME DO PERSONAGEM*/}
            <TextInput
                style={styles.textInput}
                onChangeText={setNameSearch}
                value={nameSearch}
            />
            {/*CAMPO PARA BUSCAR*/}
            <View style={styles.borderColor}>
                <Button
                    title="Search"
                    onPress={async () => {
                        try {
                            const chars = await getCharacter({
                                name: nameSearch
                            })
                            
                            setCharacters(chars.data)
                        } catch (error) {
                            setCharacters([])
                        }
                    }}
                />
            </View>

            {/*IMAGEM DE FUNDO*/}
            <ImageBackground source={require('../assets/twoWallpaper.jpeg')}
                style={
                    {
                        width: wp('100%'),
                        height: hp('100%')
                    }
                }

            >

                {/*RESULTADO DA BUSCA*/}
                <FlatList
                    data={characters}
                    key={(item) => item.id}
                    renderItem={(element) => {
                        const character = element.item

                        const object = {
                            key01: character.name,
                            key02: character.photo,
                            key03: character.status,
                            key04: character.born,
                            key05: character.occupation,
                            key06: character.gender,
                            key07: character.portrayedBy,
                        }

                        const navigateCardScreen = () => {
                            navigation.navigate('CardScreen', { myObject: object })
                        }

                        return (
                            <ScrollView>
                                <TouchableOpacity onPress={navigateCardScreen}>
                                    <View style={styles.card}>
                                        <Image style={styles.img} source={{ uri: character.photo }} />
                                        <View style={styles.alignText}>
                                            <Text style={styles.text}>Name: {character.name}</Text>
                                            <Text style={styles.text}>Status: {character.status}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </ScrollView>
                        )
                    }}
                />
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({

    textInput: {
        height: 40,
        width: '100%',
        fontSize: 14,
        fontWeight: '700'
    },

    img: {
        width: 150,
        height: 190,
        padding: 10,

    },

    card: {
        flexDirection: 'row',
        margin: 10,
        borderWidth: 2,
        borderColor: 'gray'
    },

    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
    },

    alignText: {
        margin: 'auto'
    },

    borderColor: {
        borderWidth: 1,
        borderColor: '#C1305B'
    }
})

export default SearchScreen