import { Card, Text } from 'react-native-paper';
import { ScrollView, StyleSheet, ImageBackground, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { TouchableOpacity } from 'react-native';


const CardScreen = (props) => {

    const navigation = props.navigation

    const route = useRoute()
    const { myObject } = route.params

    return (
        <View>

            <ImageBackground source={require('../assets/twoWallpaper.jpeg')}
                style={[
                    styles.img,
                    {
                        width: wp('100%'),
                        height: hp('100%'),
                    },
                ]}
            >
                <ScrollView>

                    <Card style={styles.cardBox}>

                        <Card.Content>
                            <Text style={styles.textData} variant="titleLarge">{myObject.key01}</Text>
                        </Card.Content>
                        <Card.Cover source={{ uri: myObject.key02 }} style={styles.img} />

                        <Card.Content>
                            <Text style={styles.textData} variant="bodyMedium">{myObject.key03}</Text>
                            <Text style={styles.textData} variant="bodyMedium">{myObject.key04}</Text>
                            <Text style={styles.textData} variant="bodyMedium">{myObject.key05}</Text>
                            <Text style={styles.textData} variant="bodyMedium">{myObject.key06}</Text>
                            <Text style={styles.textData} variant="bodyMedium">{myObject.key07}</Text>
                        </Card.Content>
                        <Card.Actions>
                            <View>
                                <TouchableOpacity
                                    style={styles.viewButton}
                                    onPress={() => {
                                        navigation.navigate('SearchScreen')
                                    }}>
                                        <Text style={styles.button}>Back</Text>
                                    </TouchableOpacity>
                            </View>
                        </Card.Actions>
                    </Card>
                </ScrollView>

            </ImageBackground>
        </View>
    )

}

const styles = StyleSheet.create({

    cardBox: {
        margin: 'auto',
        marginTop: 10,
        width: '100%',
        height: '100%',
        backgroundColor: '#C1305B',
    },

    textData: {
        fontFamily: 'Arial',
        fontSize: 18,
        margin: 10,
        fontWeight: 'bold'
    },

    img: {
        margin: 'auto',
        padding: 3,
        width: 300,
        height: 350,
    },

    viewButton: {
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#FFF',
    },

    button: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: '600',
        padding: 10,
        fontFamily: 'Arial'
    }
})

export default CardScreen