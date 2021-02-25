export default ({store, app,$axios }) => {

$axios.setHeader('apikey', '5f11c0d0f1dad');
$axios.setHeader('Accept','application/json');
if(app.$cookies.get('user')){
$axios.setToken(app.$cookies.get('user').access_token, 'Bearer')
}


}
