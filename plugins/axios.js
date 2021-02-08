export default ({store, app: { $axios }}) => {

$axios.setHeader('apikey', '5f11c0d0f1dad');
$axios.setHeader('Accept','application/json');
if(store.state.auth.isLoggedIn){
 $axios.setToken(store.state.auth.user.access_token, 'Bearer')
}

}
