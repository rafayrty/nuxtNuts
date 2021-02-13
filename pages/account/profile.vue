<template>
<div class="main mt-4  pb-12">


<div class="profile mt-4">
    <h1 class="text-2xl font-bold">{{$t('account.profile')}}</h1>
</div>

<div class="profile-form">

<form action="" class="mt-6 lg:mt-0">
    <div class="col lg:flex lg:justify-between">

<div class="form-group mt-2 lg:w-9/12 lg:mt-6">
    <label for="first_name">First Name</label>
    <input type="text" class="w-full" :placeholder="$t('firstname_placeholder')" name="first_name" id="first_name">
</div>
<div class="form-group mt-2 lg:w-9/12  lg:pl-4 lg:rtl:pr-4 lg:rtl:pl-0 lg:mt-6">
    <label for="last_name">Last Name</label>
    <input type="text" class="w-full" :placeholder="$t('lastname_placeholder')" name="last_name" id="last_name">
</div>
    </div>
    <div class="col lg:flex lg:justify-between">

<div class="form-group mt-2 lg:w-9/12 lg:mt-6">
    <label for="email">Email</label>
    <input type="text" class="w-full" :placeholder="$t('email_placeholder')" name="email" id="email">
</div>

<div class="form-group mt-2 lg:w-9/12  lg:pl-4 lg:rtl:pl-0 lg: rtl:pr-4 lg:mt-6">
    <label for="password">Password</label>
    <input type="text" class="w-full" :placeholder="$t('password_placeholder')" name="password" id="email">
</div>


</div>
<div class="form-group mt-2 lg:mt-6">
    <label for="password">Phone Number</label>
    <input type="text" class="w-full" :placeholder="$t('Phone_placeholder')" name="phone" id="email">
</div>
<div class="form-group mt-4">
    <input type="checkbox" name="terms" id="terms">
<label for="terms">{{$t('form.terms')}}</label>
</div>

<div class="submit mt-4 mb-6 lg:mx-auto lg:w-7/12">
    <button type="submit" class="w-full   bg-green-500 hover:bg-blue-500 cursor-pointer transition duration-200 text-white py-3 font-semibold text-lg px-4">{{$t('form.save')}}</button>
</div>

</form>

</div>


</div>
</template>
<style>

</style>
<script>
export default {
    layout:'account',
     transition:{
        name:'main'
    }
     
}
</script>