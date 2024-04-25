import React, { create } from 'zustand';
import axios from "axios";

export const useStore = create((set) => {
    return {
        popular: [],
        thumb: 'https://image.tmdb.org/t/p/w500/',
        thumb200: 'https://image.tmdb.org/t/p/w200/',
        thumb300: 'https://image.tmdb.org/t/p/w300/',
        title: '',
        overview: '',
        back: 'https://image.tmdb.org/t/p/original/',
        detail: {},
        getMovie: (type) => {
            axios(`https://api.themoviedb.org/3/movie/${type}?api_key=f89a6c1f22aca3858a4ae7aef10de967`)
                .then(res => {
                    //console.log(res.data.results)
                    set({ [type]: res.data.results });
                });
        },
        getDetail: (id) => {
            axios(`https://api.themoviedb.org/3/movie/${id}?api_key=f89a6c1f22aca3858a4ae7aef10de967&append_to_response=videos,images,casts`)
                .then(res => {
                    console.log("asd:" + res.data)
                    set({ detail: res.data });
                });
        }
    }
});


