import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, StatusBar, ScrollView, Image } from "react-native";

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
                console.log(data);
            })
            .catch((error) => console.log(error));

    }, [])


    const colors = ['#e6f6fe', '#cdeefd', '#b3e5fc', '#9addfb', '#81d4fa', '#68cbf8', '#4fc3f7', '#35baf6', '#e6f6fe', '#cdeefd', '#b3e5fc', '#9addfb', '#81d4fa', '#68cbf8', '#4fc3f7', '#35baf6', '#e6f6fe', '#cdeefd', '#b3e5fc', '#9addfb',]

    return (

        <ScrollView
            horizontal={false}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#fff" }}>
                <StatusBar backgroundColor="#000000" />

                {
                    showData ? (
                        isLoadingData ? (
                            <Text style={{ color: "#000000", fontSize: 20, fontWeight: 'bold' }}>"LOADING MOVIES..."</Text>
                        ) : (

                            data.map((movies, i) => (

                                <TouchableOpacity onPress={() => navigation.navigate('MovieDetails', {
                                    movieID: movies.id
                                })}

                                    key={i}
                                    style={{
                                        color: "#000000",
                                        fontSize: 20,
                                        width: "90%",
                                        marginBottom: 20,
                                        borderRadius: 20,
                                        alignItems: "center",
                                        backgroundColor: colors[i],
                                        flex: 1,
                                        flexDirection: 'row',
                                        padding: 15,
                                        alignItems: 'flex-start',

                                    }}>
                                    <Image style={{
                                        height: 90,
                                        width: 60,
                                        marginRight: 15,


                                    }}
                                        source={{ uri: 'https://image.tmdb.org/t/p/w440_and_h660_face/' + movies.poster_path }}
                                        resizeMode="cover"

                                    />
                                    <View style={{

                                    }}>

                                        <Text style={{
                                            color: "#000000", fontStyle: 'italic',
                                            textAlign: 'center'

                                        }} >
                                            Title={movies.title}
                                        </Text>
                                        <Text style={{
                                            color: "#000000", fontStyle: 'italic',

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
