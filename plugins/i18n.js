export default function({ app }, inject) {
    const dir = () => app.i18n.locales.find((x) => x.code === app.i18n.locale)?.dir;
    inject( 'dir', dir);

    app.i18n.beforeLanguageSwitch = (oldLocale, newLocale) => {
      app.store.dispatch('updateCategories',newLocale);
      app.store.dispatch('cart/updateCartProducts',newLocale);
      app.store.dispatch('cart/updateCartBaskets',newLocale);
      app.store.dispatch('recently/updateRecently',newLocale);

    }


  }
  