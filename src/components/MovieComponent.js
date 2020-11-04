import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList, TextInput, Button } from 'react-native';


const MovieComponent = ({ movies, onFetchMovies, onAddMovie }) => {

    console.log('movies ui', movies);

    const [movieName, setMovieName] = useState('')
    const [releaseYear, setReleaseYear] = useState('')
    return (
        <View>
            <Text>New movies information</Text>
            <TextInput
                value={movieName}
                placeholder='Enter new movie name'
                onChangeText={(text) => setMovieName(text)}
            />
            <TextInput
                value={releaseYear}
                placeholder='Release year'
                onChangeText={(text) => setReleaseYear(text)}
            />
            <View style={{ flexDirection: 'row' }}>
                <Button
                    title='Fetch movies'
                    onPress={onFetchMovies}
                />

                <Button
                    title='Add movies'
                    onPress={onAddMovie}
                />

            </View>

            <View>
                <FlatList
                    data={movies}
                    renderItem={({ item }) => <Text>{item.id} {item.title}</Text>}
                    keyExtractor={item => item.id}
                />
            </View>

        </View>
    )
}

export default MovieComponent

const styles = StyleSheet.create({})
