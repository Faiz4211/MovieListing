import React, { useEffect } from "react";
import { View, Text, StatusBar, ScrollView, Image, StyleSheet } from "react-native";

const MovieDetails = ({ navigation, route }) => {
    const [isLoadingData, setisLoadingData] = React.useState(false);
    const [data, setData] = React.useState([]);
    const [showData, setShowData] = React.useState(false);

    useEffect(() => {
        setisLoadingData(true);
        setShowData(true)
        const url = "https://api.themoviedb.org/3/movie/" + route.params.movieID + "?api_key=8ba633938500db5ea65fc2c09a31599c&language=en-US";
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                setisLoadingData(false);
                setData(json)
                console.log(json.original_title);
            })
            .catch((error) => console.log(error));

    }, [])

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={"#000000"}></StatusBar>
            <Text style={styles.Title}>Title:</Text>
            <View style={styles.body}>
                <Image style={{
                    height: 90,
                    width: 60,
                    marginRight: 15,
                    left: 10,
                }}
                    source={{ uri: 'https://image.tmdb.org/t/p/w440_and_h660_face/' + data.poster_path }}
                    resizeMode="cover"
                />
                <Text style={styles.Text}> {data.original_title}</Text>
            </View>
            <View style={styles.overview}>
                <Text style={styles.Title}>Overview:</Text>
                <Text style={styles.overviewText}> {data.overview}</Text>
            </View >
            <View style={styles.popularity}>
                <Text style={styles.Title}>Popularity:</Text>
                <Text style={styles.popularityText}> {data.popularity}</Text>
            </View>
        </View >
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#35baf6",
        flex: 1,
    },
    body: {
        color: "#000000",
        fontSize: 20,
        width: "90%",
        alignItems: "center",
        flexDirection: 'row',
        padding: 15,
        alignItems: 'flex-start',
    },
    Title: {
        fontSize: 30,
        marginTop: 30,
        color: "#fff",
        fontStyle: 'italic',
        lineHeight: 30,
        fontWeight: 'bold',
        marginLeft: 30,
    },
    Text: {
        color: "#fff",
        fontStyle: 'italic',
        fontSize: 20,
        justifyContent: 'center',
    },

    overviewText: {
        color: "#fff",
        paddingTop: 20,
        fontStyle: 'italic',
        fontSize: 20,
        justifyContent: 'center',
        width: "80%",
        left: 30,
    },
    popularityText: {
        color: "#fff",
        fontStyle: 'italic',
        fontSize: 20,
        justifyContent: 'center',
        width: "80%",
        left: 30,
        paddingTop: 20,
    },
});

export default MovieDetails;