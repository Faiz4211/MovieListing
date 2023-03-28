import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, StatusBar, ScrollView, Image } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import Loader from '../components/Loader';

const MovieList = ({ navigation }) => {
    const [isLoadingData, setisLoadingData] = React.useState(false);
    const [data, setData] = React.useState([]);
    const [showData, setShowData] = React.useState(false);
    useEffect(() => {
        setisLoadingData(true);
        setShowData(true)
        const url = "https://api.themoviedb.org/3/movie/now_playing?api_key=8ba633938500db5ea65fc2c09a31599c&language=en-US&page=1";
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                setisLoadingData(false);
                setData(json["results"])
                // console.log(data);
            })
            .catch((error) => console.log(error));

    }, [])


    return (

        <ScrollView
            horizontal={false}>
            <View style={{ flex: 1, alignItems: 'center', backgroundColor: "#0e0e0e" }}>

                {
                    showData ? (
                        isLoadingData ? (
                            <Loader />
                        ) : (

                            data.map((movies, i) => (

                                <TouchableOpacity onPress={() => navigation.navigate('MovieDetails', {
                                    movieID: movies.id
                                })}

                                    key={i}
                                    style={{
                                        color: "#f40000",
                                        fontSize: 20,
                                        width: wp('90%'),
                                        marginBottom: 20,
                                        borderRadius: 20,
                                        alignItems: "center",
                                        backgroundColor: '#e5e5e5',
                                        flex: 1,
                                        flexDirection: 'row',
                                        padding: 15,
                                        alignItems: 'flex-start',


                                    }}>
                                    <Image style={{
                                        height: hp('15%'),
                                        width: wp('30%'),
                                        alignSelf: 'flex-start',
                                        marginRight: wp('2%')

                                    }}
                                        source={{ uri: 'https://image.tmdb.org/t/p/w440_and_h660_face/' + movies.poster_path }}
                                        resizeMode="cover"

                                    />
                                    <View >

                                        <Text style={{
                                            color: "#f40000", fontStyle: 'italic',
                                            width: wp('50%'),
                                            fontWeight: '700',

                                        }} >
                                            Title={movies.title}
                                        </Text>
                                        <Text style={{
                                            color: "#f40000", fontStyle: 'italic',
                                            marginTop: hp(4),
                                            fontWeight: '400'

                                        }} >
                                            Date={movies.release_date}

                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            ))
                        )
                    ) : (

                        <View></View>
                    )
                }

            </View >
        </ScrollView>
    )
}

export default MovieList;
