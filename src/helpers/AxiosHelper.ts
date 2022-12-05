import axios from 'axios';
import config from '../config';
import { useTokenStore } from '../store/token/useTokenStore';


const axiosClient = axios.create({
    baseURL: config.URL,
});


axiosClient.interceptors.request.use(async config => {    
    const accessToken = await useTokenStore.getState().accessToken;

    config.headers = {
        ...config.headers,
        Authentication: `Bearer ${accessToken}`
    }
    return config;
});

export const getAxiosClient = () => {
    return axiosClient;
};


axiosClient.interceptors.response.use(response => {
    return response;
}, async err => {
    if (err.response.status == 401) {
        // await removeSessionAndUserInfo();
        // //useUserDataStore.getState().setUserData(null);
        // await useNavigationStore.getState().setCurrentSection("logout");

    }
    return new Promise((resolve, reject) => {
        const originalReq = err.config;

        //refreshToken = "eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.gWHc4_m1H6oZslbyMIWG7JnWhXdC7C0MzojpYPJIb0p--fqDbSK6h5vKas349OW4env2qso8W3gFzEStbg3Fa1zFGAfFDV4Ur1VSqFSoH8uaKXCiT3L0RjVdV6MMsDimDR1EEoopJ6ItA69AF6YP88C90P4DiuWtUsN0YADWotTh64Vk4z6yZlwR1H0jsl14BYoup2KAjoQqZr4k5jCG0ETsd61eTULPWKBg7lqVEY7sdvN3KaoKNZVvmyq9UtnpmqE3tDROlUUod8GaAro5VltRVAOXNYwYQDRICfswVYm3VZFoETyroo8C0n9ZCoDmi2QnvqmwbncZhbG2PYIYlA.9uF4lRux5g5fc1-u.UWGmvzrp_Vr06f1Yni6JgyXKgjoZy-bBtRG6uMVqrewS7G0IP7Ob8kT9L-MhtMkYBgOeiYMgrDoQAXOABqSfevIu2y7ZrBJctekg_DYTRjv02RJDw8O48EU0d2RPLLiqGtQ-gTLiSFpkbLi5hlUKlKGvaBA6DH_fMAKXw7tobg01RvqCKX1KUyVdEO-fzaSsOVN3lRY2GwblpKNTjJxQlpLKpMN0DnvOCdXC69O2MnDf_dXobw2PD7EJXbibWgIhhWKx2PwaTqStx_HINUQH3MvCePlRvWs7Y-DaDHLahtknTo0dLjAgoJzWxeUEP238T0E4GVoKt4tV9ohLdXHcN5pWDW37D78eiaVKDN7pBL7G2DqTxN3Kk4T8ICP9TKLF0JS-lu1MjPsN6oeWRnBJSJtGJCJIsB3aXKKnK8XPdMzs1fj9zR4lILQ7bcWLvtj3P6BPzY9EUQo9O_dCUhPvt1trSJ6OTbAvSjUAAiQlbNsnJwgQLQQAQxmPJHGB_LAl8OQVbXxK2tgRLjJ8GUwbK2lCjW0uw3Q-rQiJEI1d6KumBkPlDdtrBXl5jJ-oPbpC8lAuzECcRY99ceXe5s5-dT6zDYQ5D3aJDnO2cHNQaf9C0U_dJ8U_1ptC3M7l9jwnvM837mXBVdV8-ys6kn6qvCi9mOlnvl0S0xfEsZJGzsOB-O-7nqZQxRVCusDscAIHNpKP-OHk9msRkVH89IQK7QIHHd_lXFW8igpNW0PBXc8D2i3zcGK4JLt0D4joNihb06BW7B3gUcM-VibEjsWbNgB12yisnBvRheXrQQPMCmHJ9TbDC4KVn9N9doAg7KgEUi7L6QBHnmuindeLpFTyQ7osg3czTDoUQiX1C-KCPb1gQpMjHTu6P-GinO-dujB2Sn8zs9yGHErLMqtCgRA3GwQh8oqalUufi1BRg7ox7jiYqK-E8bstktasDSB04y5hX7iZjgrCyv_-TnjrJ6R97-U-KhRcZsF2pxLc8Tz4_cWXzPoxBjmtk6Wo3aLZTR81KV660LOllO8J8JivJ7E44rwz9Ew0mwTT5rlskn6aQSt5b5ojmLNhV5lmA8UO66htesrqLNMOlWLDC9Ip7RPoc4oDnuQgKUDEnoTuDAa2P2MVMj72nL37e5xtXUOV8M0ZI2MeSH-zNp1JJmJwtBRiY7aP-ak-I3_IekEUZ0L2Q_a8oNOnhXwQoLV8lo1M1bRiNAnWVAtIY1fFmvB7bnv-udeb3bxQHI5IpkM81Lih8M-Y_jfH_kICFpdDBl0glzV3iF9wJ0luhAfbT9eqdanCOJsT1dqngk6xAzdFIusYSTBieZEKMV_CHEE_TYgnbA.MYuEJUCeu7DCqx3GvsPtCw";
        // if (err.response && err.response.status === 401 && err.config && !err.config.__isRetryRequest) {

        //     originalReq._retry = true;
        //     let res = fetch(axiosClient.defaults.baseURL + 'users/login/refresh', {
        //         method: 'POST',
        //         mode: 'cors',
        //         cache: 'no-cache',
        //         credentials: 'same-origin',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         redirect: 'follow',
        //         referrer: 'no-referrer',
        //         body: JSON.stringify({
        //             ClientId: clientId,
        //             ClientSecret: clientSecret,
        //             refreshToken: refreshToken
        //         }),
        //     })
        //     .then(res => res.json())
        //     .then(res => {

        //         const token = `Bearer ${res.authenticatedUser.idToken}`;

        //         SecureStore.setItemAsync('appToken', token);
        //         originalReq.headers.Authorization = token;
        //         dispatch(authActions.refreshToken(token, null));

        //         return axios(originalReq);
        //     }).catch(
        //         error => {
        //             dispatch(authActions.logout());                    
        //         }
        //     );
        //     resolve(res);
        // }

        throw err;


    });
});


/*****
    *******
        para utilizar cuando habiliten el refresh token
    *******
*****/
// axiosClient.interceptors.response.use(response => {
//     return response;
// }, err => {    
//     console.log('error',err);
//     return new Promise((resolve, reject) => {
//         const originalReq = err.config;

//         if (err.response && err.response.status === 401 && err.config && !err.config.__isRetryRequest) {

//             originalReq._retry = true;
//             let res = fetch(axiosClient.defaults.baseURL + 'users/login/refresh', {
//                 method: 'POST',
//                 mode: 'cors',
//                 cache: 'no-cache',
//                 credentials: 'same-origin',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 redirect: 'follow',
//                 referrer: 'no-referrer',
//                 body: JSON.stringify({
//                     ClientId: clientId,
//                     ClientSecret: clientSecret,
//                     refreshToken: refreshToken
//                 }),
//             })
//             .then(res => res.json())
//             .then(res => {

//                 const token = `Bearer ${res.authenticatedUser.idToken}`;

//                 SecureStore.setItemAsync('appToken', token);
//                 originalReq.headers.Authorization = token;
//                 dispatch(authActions.refreshToken(token, null));

//                 return axios(originalReq);
//             }).catch(
//                 error => {
//                     dispatch(authActions.logout());                    
//                 }
//             );
//             resolve(res);
//         }

//         throw err;


//     });
// });
