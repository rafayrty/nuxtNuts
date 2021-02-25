<template>
    
    <div class="main mt-8 lg:mt-8">
        <div class="top flex items-center justify-between">
<h1 class="text-2xl font-bold">{{$t('account.new_address')}}</h1>

<nuxt-link :to="localePath('/account/address')" class="text-xl font-semibold flex items-center text-green-600">
 {{$t('cart.back')}}
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="block w-6" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
</svg>

</nuxt-link>
        </div>

<div class="form-container mt-1 mb-12">
<form action="" @submit.prevent="insert">
<div class="col lg:grid grid-cols-2 gap-x-8 ">

    <div class="form-group mt-4">
     <label for="first_name">{{$t('form.first_name')}}</label>
     <input type="text" :class="{'error-input':errors.first_name}" @input="errors.first_name = false" v-model="first_name" class="w-full" :placeholder="$t('firstname_placeholder')">
            <!-- Error --> 
    <transition name="slide-fade">
     <span class="text-red-500 font-bold text-md" v-if="errors.first_name">{{errors.first_name[0]}}</span>
     </transition>
     <!-- Error -->
    </div>
    <div class="form-group mt-4">
     <label for="last_name">{{$t('form.last_name')}}</label>
        <input type="text" :class="{'error-input':errors.last_name}" @input="errors.last_name = false"  v-model="last_name" class="w-full" :placeholder="$t('lastname_placeholder')">
        <!-- Error --> 
    <transition name="slide-fade">
     <span class="text-red-500 font-bold text-md" v-if="errors.last_name">{{errors.last_name[0]}}</span>
     </transition>
     <!-- Error -->
    </div>



</div>


<div class="col lg:grid grid-cols-2 gap-x-8">

    <div class="form-group mt-4">
    <label for="phone">{{$t('form.phone')}}</label>
     <input type="tel" :class="{'error-input':errors.phone}" @input="errors.phone = false"   v-model="phone" class="w-full" :placeholder="$t('Phone_placeholder')">
        <!-- Error --> 
    <transition name="slide-fade">
    <span class="text-red-500 font-bold text-md" v-if="errors.phone">{{errors.phone[0]}}</span>
    </transition>
     <!-- Error -->
    </div>
    <div class="form-group mt-4">
        <label for="cities">{{$t('form.cities')}}</label>
<select name="city" :class="{'error-input':errors.city}" @change="errors.city = false" class="w-full border border-gray-200 py-3 bg-blue-100 text-gray-500 font-semibold" v-model="city" id="">
    <option value="0">{{$t('form.select_city')}}</option>
<option v-for="citi in cities" :value="citi.id" :key="citi.id">{{citi.name}}</option>
</select>
        <!-- Error --> 
    <transition name="slide-fade">
     <span class="text-red-500 font-bold text-md" v-if="errors.city">{{errors.city[0]}}</span>
     </transition>
     <!-- Error -->
    </div>

</div>

<div class="form-group mt-4">
    <label for="Address">{{$t('form.address')}}</label>
    <textarea name="" :class="{'error-input':errors.address}" @input="errors.address = false" :placeholder="$t('address_placeholder')"  v-model="address" id="" class="w-full" cols="30" rows="2"></textarea>
     <!-- Error --> 
    <transition name="slide-fade">
     <span class="text-red-500 font-bold text-md" v-if="errors.address">{{errors.address[0]}}</span>
     </transition>
     <!-- Error -->
</div>

<div class="address mt-4">

 <GmapAutocomplete @place_changed="setPlace">
      </GmapAutocomplete>

<GmapMap
  :center="{lat:32.701580, lng:35.298149}"
  :zoom="15"
  map-type-id="roadmap"
  style="width: 100%; height: 300px"
  ref="mapRef"
>
  <GmapMarker
  v-if="marker"
    :position="marker"
    :clickable="true"
    :draggable="true"
    @dragend="markerUpdate"
  />
</GmapMap>
</div>

<div class="save lg:w-7/12 mx-auto mt-6">

<button type="submit" :disabled="loading" class="bg-green-500 cursor-pointer flex justify-center items-center font-semibold py-4 px-2 text-white hover:bg-green-800 transition duration-200 text-xl w-full ">
    
    <svg v-if="loading" class="animate-spin rtl:ml-3 ltr:mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg> 

    {{$t('form.save')}}</button>
</div>

</form>
</div>


    </div>




</template>

<script>
import {gmapApi} from 'vue2-google-maps'

export default {
     computed: {
    google: gmapApi
  },
    layout:'account',
    transition:{
        name:'main'
    },
    async asyncData(context){
try{
    let cities = await context.app.$axios.$get(`/api/address/mobShipping/${context.app.i18n.locale}`);
    return { cities };
}catch(e){
    context.error(e);
}
    },
    data(){
        return{
    marker:{lat:32.701580,lng:35.298149},
    address:null,
    city:"0",
    first_name:'',
    last_name:'',
    phone:'',
    lat:'',
    lng:'',
    place_id:'',
    loading:false,
    errors:[]
        }
    },
    methods:{
        setPlace(place) {
            console.log(place);
        
       this.marker = {
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
          }
           this.$refs.mapRef.$mapPromise.then((map) => {
       this.fetchAddress(this.marker.lat,this.marker.lng);
      map.panTo({lat:this.marker.lat, lng:this.marker.lng})
    })
    

    },
    markerUpdate(markerPosition){
        this.$refs.mapRef.$mapPromise.then((map) => {
            this.fetchAddress(markerPosition.latLng.lat(),markerPosition.latLng.lng())
      map.panTo({lat:markerPosition.latLng.lat(), lng:markerPosition.latLng.lng()})
    })
    },
     getAddressComponent(address_components, key) {
    var value='';
    var postalCodeType = address_components.filter(aComp =>
        aComp.types.some(typesItem => typesItem === key))
    if (postalCodeType != null && postalCodeType.length > 0)
        value = postalCodeType[0].long_name
    return value;
},
        fetchAddress(lat,lng){
      var self = this;

           fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyA3xZMib4wH3ZYtLCXd3OdLBqMkXg_xi-0&region=IL&language=he`)
         .then((resp) => resp.json()) // Transform the data into json
         .then(function(data) {
           let address = data.results[0].formatted_address;  
   let country = self.getAddressComponent(data.results[0].address_components,'country');
  //  self.city = self.getAddressComponent(data.results[0].address_components,'locality');
  let  city =self.getAddressComponent(data.results[0].address_components,'locality');
   self.place_id = data.results[0].place_id;
   self.lat = data.results[0].geometry.location.lat;
   self.lng = data.results[0].geometry.location.lng;
   self.mapOptions = {
    center: new google.maps.LatLng(self.lat,self.lng),
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
   self.$axios.$get(`/api/address/shipping/exists/${city}`, {
     method: "GET",
     headers: {"Content-type": "application/json;charset=UTF-8",'apikey':"5f11c0d0f1dad"}
   }).then(function(data){
       
       if(data.message=="City Not Found"){
         self.city = "0";
         self.lat = 32.701580;
         self.lng = 35.298149;
         self.$toast.show(self.$i18n.t('messages.address_error'),{type:'error',duration:1500});

        // self.presentToast(self.translate.instant("WARNINGS.delivery"),"danger");
       }else{
                       self.address = address;    

       }
    //    self.mapInitializer();

   })
   
   
   
           })
       },
       insert(){
           this.loading = true;
           let formData = new FormData();
           formData.append('user_id',this.$store.getters['auth/user'].id);
           formData.append('first_name',this.first_name);
           formData.append('last_name',this.last_name);
           formData.append('phone',this.phone);
           formData.append('lat',this.lat);
           formData.append('lng',this.lng);
           formData.append('place_id',this.place_id);
          if(this.city!='0') formData.append('city',this.city)
           formData.append('address',this.address);

           this.$axios.$post('/api/auth/addresses',formData).then(res=>{
               this.loading = false;
               this.$toast.show('Address Added Successfully',{type:'success',duration:3000});
               this.$router.push(this.localePath({path:'/account/address'}));
           }).catch(err => {

        this.loading = false;
        if (err.response.status == 422) {

          this.errors = err.response.data.errors;
          this.$toast.show('Authentication Error Occurred', {
            type: 'error',
            duration: 3000
          });
        } else {
          this.$toast.show(`An Unknown Error ${err.response.status} Occurred`, {
            type: "error",
            duration: 3000
          });
        }

      })
       }
    }
}
</script>