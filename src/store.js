import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getElement = createAsyncThunk('weather/getElement',
    async (location, thunkAPI) => {
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=16b7b06634431c8a9632fbfda8c523bf`);
        return await res.data;
    })


const weatherSlice = createSlice(
    {
        name: 'weather',
        initialState: {
            isLoding: false,
            data: {
                "coord": {
                    "lon": 5.2913,
                    "lat": 52.1326
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "base": "stations",
                "main": {
                    "temp": 0,
                    "feels_like": 0,
                    "temp_min": 0,
                    "temp_max": 0,
                    "pressure": 0,
                    "humidity": 0
                },
                "visibility": 10000,
                "wind": {
                    "speed": 0.45,
                    "deg": 177,
                    "gust": 2.68
                },
                "clouds": {
                    "all": 100
                },
                "dt": 1671734505,
                "sys": {
                    "type": 2,
                    "id": 2009129,
                    "country": "NL",
                    "sunrise": 1671695149,
                    "sunset": 1671722926
                },
                "timezone": 3600,
                "id": 2747030,
                "name": "Soesterberg",
                "cod": 200
            }
        },
        reducers: {},
        extraReducers: {
            [getElement.pending]: (state) => {
                return { ...state, isLoding: true }
            },
            [getElement.fulfilled]: (state, action) => {
                state.data = action.payload;
                state.isLoding = true;
            },
            [getElement.rejected]: (state) => {
                state.isLoding = true;
            },
        }
    }
)


const store = configureStore({
    reducer: weatherSlice.reducer
})

export default store;